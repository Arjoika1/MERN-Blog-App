import { Box, Button, makeStyles, TextareaAutosize, Typography } from '@material-ui/core'

import url from './profile.png'
import {React,useContext,useState,useEffect} from 'react'
import { Context } from '../../../Context/Context'
import { newComment,getComment } from '../../../service/api'
import Comment from './Comment'

const useStyles=makeStyles({
component:{
    margintTop:100,
    display:'flex',
    justifyContent:'center'
},
image:{
   width:'50px',
    height:'50px',
    borderRadius:'50%'
},
textarea:{
    width:'100%',
    margin:'0 20px',
    fontSize:'18px'
},
button:{
    background:"#2F4F4F",
    color:'white',
    height:'40px'
},
comment:{
marginTop:'15px',
fontSize:'25px',
fontWeight:'800px',
marginBottom:'20px'
}
})

const initialValue={
    name:'',
    postId:'',
    date: new Date(),
    comment:''
}

function Comments({post}) {
   const classes=useStyles();
   const [comment,setComment]=useState(initialValue);
   const [comments,setComments]=useState([]);
   const [toggle,setToggle]=useState(false);
   const {user}=useContext(Context);
   
   const handleChange=(e)=>{
       setComment({...comment,name:user.username,postId:post._id,comment:e.target.value})
   }

   const postComment=async()=>{
             const res= await newComment(comment) ;
             setToggle(prev=>!prev);  
                
   }

   useEffect(()=>{
       const getData= async ()=>{
          let res= await getComment(post._id);
          setComments(res);
          console.log(res);
       }
       getData();
   },[post,toggle])

    return (
        <Box>
            <Box className={classes.component}>
            <img src={url} alt="dp" className={classes.image}/>
            <TextareaAutosize placeholder="Add public comment..." onChange={(e)=>handleChange(e)} className={classes.textarea} minRows={4}/>
            <Button variant="contained" size='medium' className={classes.button} onClick={()=>postComment()}>Post</Button>
            </Box>

            {comments&&<Typography className={classes.comment}>Comments</Typography>}
            {
            comments&&comments.map(comment=>(
                <Comment comment={comment} setToggle={setToggle}/>
            ))
           }
        </Box>

       
    )
}

export default Comments
