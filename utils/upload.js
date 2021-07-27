import multer from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage';

const storage= new GridFsStorage({
    url:'mongodb+srv://Arjoika:iwantajob@G00gle@blogdata.cvg2h.mongodb.net/PROJECT0?retryWrites=true&w=majority',
    options:{useNewUrlParser:true,useUnifiedTopology:true},
    file:(request,file)=>{
        const match=["image/png","image/jpg","ímage.jpeg"];
        if(match.indexOf(file.memeType)===-1)
        return `${Date.now()}.blog.${file.originalname}`;

        return{
            bucketName:"photos",
            filename:`${Date.now()}.blog.${file.originalname}`

        }
    }
})

export default multer({storage});