import axios from 'axios';//fetching data from backend

const url='';

export const createPost=async(post)=>{

    try{
    return await axios.post(`${url}/create`,post);
    }

    catch(error){
        console.log(`error while creating post api ${error}`)
    }
}

export const newUser=async(user)=>{

    try{
    return await axios.post(`${url}/register`,user);
    }

    catch(error){
        console.log(`error while adding new user ${error}`)
        return 500;
    }
}


export const getAllPosts = async(param)=>{
    try{
      let response= await axios.get(`${url}/posts${param}`);
      return response.data;
    }
    catch (error){
        console.log('Error while calling getAllPosts API',error)
    }
}

export const uploadFile=async(data)=>{
    try{
        return await axios.post(`${url}/file/upload`,data);
    }
    catch (error){
        console.log('Error while uploading image',error)
    }
}

export const getPost= async(id)=>{
    try{
       let response=await axios.get(`${url}/post/${id}`);
       return response.data;
    }
    catch(error){
        console.log(`Error while calling getPost API ${error}`)
    }
}

export const updatePost=async(id,post)=>{
    try{
      await axios.post(`${url}/update/${id}`,post);
    }
    catch(error){
        console.log(`Error while calling updatePost API ${error}`)
    }
}

export const deletePost=async(id)=>{
    try{
      await axios.delete(`${url}/delete/${id}`);
    }
    catch(error){
        console.log(`Error while calling deletePost API ${error}`)
    }
}

export const newComment=async(data)=>{
    try{
     return await axios.post(`${url}/comment/new`,data);
    }
    catch(error){
        console.log(`Error while adding comment ${error}`)
    }
}
export const getComment=async(id)=>{
    try{
     let response= await axios.get(`${url}/comments/${id}`);
     return response.data;
    }
    catch(error){
        console.log(`Error while getting comments ${error}`)
    }
}

export const deleteComment=async(id)=>{
    try{
        let response= await axios.delete(`${url}/comment/delete/${id}`);
        return response.data;
       }
       catch(error){
           console.log(`Error while deleting comment ${error}`)
       }
}