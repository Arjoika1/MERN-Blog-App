import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import url from './Images/poster.png'


const useStyles=makeStyles({

    post:{
      height:'350px',
      margin:'20px',
      border:'1px solid #d3cede',
      borderRadius:'10px',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      
      '& > *':{
       padding:'0 5px 5px 5px'
      }
      //width:'25.4%'
    },
    image:{
        height:'170px',
        borderRadius:'10px 10px 0px 0px',
        width:'100%',
        objectFit:'cover'
    },
    heading:{
     fontSize:'20px',
     fontWeight:600
    },
    text:{
        color:'#878787',
        fontSize:'14px',

    },
    description:{
      
      fontSize:'15px',
      textAlign:'justify',
      textJustify:'auto'
    }

});

function Post({post}) {

    if(!post.picture)
     post.picture=url;
     
    const classes=useStyles();

    const addEllipsis=(str)=>{
             return str.length>50?str.substring(0,95)+'...':str;
    }
    const addEllipsisTitle=(str)=>{
        return str.length>15?str.substring(0,20)+'...':str;
}
    return (
        <Box className={classes.post}>
           <img className={classes.image} src={post.picture} alt="pos"/>
           <Typography className={classes.text}>{post.categories}</Typography>
           <Typography className={classes.heading}>{addEllipsisTitle(post.title)}</Typography>
           <Typography className={classes.text}>Author: {post.username}</Typography>
           <Typography>{addEllipsis(post.description)}</Typography>
           
        </Box>
    )
}

export default Post
