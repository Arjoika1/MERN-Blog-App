///happen in mongoDB
import User from "../schema/userSchema.js";

export const register=async (request,response)=>{
    console.log(request.body);

    try{
    const user=await new User(request.body).save();//creates a new user
    
     response.status(200).json(user);
    }
    catch(error){
        response.status(500).json(error);
    }
}
export const login=async(request, response)=>{
    try{
      const user=await User.findOne({username:request.body.username,password:request.body.password});
      !user&&response.status(400).json("Invalid username or password!!");
      console.log(user);
      response.status(200).json(user);
    }
    catch{
        response.status(500).json(error);
    }
}