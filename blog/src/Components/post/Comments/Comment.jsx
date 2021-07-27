import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import { Box, makeStyles, Typography,Button } from '@material-ui/core'
import React, { useContext } from 'react'
import { deleteComment } from '../../../service/api';
import { Context } from '../../../Context/Context';

const useStyles=makeStyles({
component:{
    marginTop:'30px',
    background:'#F5F5F5',
    padding:'10px',
    marginBottom:'50px'
},
container:{
   display:'flex',
   marginBottom:'5px'
},
name:{
    fontSize:'18px',
    fontWeight:'600',
    marginRight:'30px'
},
date:{
    color:'#878787',
    fontSize:'14px'
}
})

function Comment({comment,setToggle}) {


    const classes=useStyles();
    const {user}=useContext(Context);

   const removeComment= async()=>{
       await deleteComment(comment._id);
       setToggle(prev=>!prev);
   }

    return (
        <>
         
        <Box className={classes.component}>
          
             <Box className={classes.container}>
            <Typography className={classes.name}>{comment.name}</Typography>
            <Typography className={classes.date}>{new Date(comment.date).toDateString()}</Typography>
            {user?.username===comment.name&&<Button onClick={()=>removeComment()} style={{marginLeft:'auto'}}><DeleteSharpIcon/></Button>}
            </Box>
            <Typography>{comment.comment}</Typography>
            
        </Box>
        </>
    )
}

export default Comment
