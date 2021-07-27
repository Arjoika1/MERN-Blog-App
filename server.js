import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/route.js';
import DOTEnv from 'dotenv';

import Connection from './database/db.js';



const app=express();
DOTEnv.config();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',router); 

if(process.env.NODE_ENV==='production')
{
    app.use(express.static('blog/build'));
}

const Port=process.env.PORT||8000;
app.listen(Port,()=>console.log(`Server in running on port ${Port}`));

const URL='mongodb+srv://Arjoika:iwantajob@G00gle@blogdata.cvg2h.mongodb.net/PROJECT0?retryWrites=true&w=majority'

Connection(process.env.MONGODB_URI||URL);


