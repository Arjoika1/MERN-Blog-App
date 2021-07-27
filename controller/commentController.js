
import Comment from "../schema/comment-schema.js";


export const newComment=async(request,response)=>{
    console.log(request.body);
    try{
        const comment= await new Comment(request.body).save();
    
        response.status(200).json(comment);
    }
    catch(error){
        response.status(500).json(error);
    }
}

export const getComments=async(request,response)=>{
    try{
        console.log(request.params.id);
        const comments=await Comment.find({postId:request.params.id})
        response.status(200).json(comments);
    }

    catch(error){
        response.status(500).json(error);
    }
}

export const deleteComment=async(request,response)=>{
    try{
        console.log(request.params.id);
        let comment=await Comment.findById(request.params.id)
        await comment.delete();
        request.status(200).json("comment deleted successfully");
    }

    catch(error){
        response.status(500).json(error);
    }
}