import mongoose from 'mongoose';

const Connection = async(URL)=>{

try{
 
 await mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false});//asynchronous

 console.log('database connected successfully');
}
catch(error){
  console.log('Error while connecting to mongoDB',error);
}
}

export default Connection;