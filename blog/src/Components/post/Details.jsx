
import { Box, makeStyles, Typography, Button } from '@material-ui/core'
import EditSharpIcon from '@material-ui/icons/EditSharp';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import {React, useState, useEffect, useContext} from 'react'
import url from './Images/poster.png';
import { Link, useHistory } from 'react-router-dom';
import { getPost,deletePost } from '../../service/api';
import { Context } from '../../Context/Context';
import Comments from './Comments/Comments';



const useStyle=makeStyles((theme)=>(
    {
    container:{
       padding:'0 100px',
       [theme.breakpoints.down('md')]:{
           padding:'2px'
       }
    },
      image:{
        width:'100%',
        height:'60vh',
        objectFit:'contain',
        objectPosition:'50% 50%',
        background:'black'
      },
      icons:{
        float:'right'
      },
      icon:{
          margin:'5px',
          padding:'5px',
          color:'#2F4F4F',
          cursor:'pointer'          
      },
      title:{
          fontSize:'38px',
          fontWeight:600,
          margin:'20px 0 10px 0',
          textAlign:'justify',
          textJustify:'auto'
      },
      subtitle:{
          color:'#878787',
          display:'flex',
          justifyContent:'space-between',
          margin:'10px 0',
          [theme.breakpoints.down('sm')]:{
              display:'block'
          }
      },
      link:{
          textDecoration:'none',
          color:'inherit'
      }
    })
)

function Details({match}) {
    const classes=useStyle();
    const history=useHistory();
    const {user}=useContext(Context);

    const [post,setPost]=useState({});

    useEffect(()=>{
        const fetchData= async()=>{
           let data= await getPost(match.params.id);
           console.log(data);
           setPost(data)
        }
        fetchData();
    },[])

    const deleteBlog=async()=>{
        await deletePost(post._id);
        history.push('/');
    }


    return (
        <>
        <Box className={classes.container}>
            <img src={post.picture||url} alt="glue" className={classes.image}/>

            {post.username===user?.username&&<Box className={classes.icons}>
               <Link to={`/update/${post._id}`}><Button className={classes.icon}><EditSharpIcon/></Button></Link>
                <Button onClick={()=>deleteBlog()} className={classes.icon}><DeleteSharpIcon/></Button>
            </Box>}

            <Typography className={classes.title}>{post.title}</Typography>

            <Box className={classes.subtitle}>
                <Link to={`/?username=${post.username}`} className={classes.link} >
                <Typography>Author:<span style={{fontWeight:600}}>{post.username}</span></Typography>
                </Link>
                <Typography >{new Date(post.createDate).toDateString()}</Typography>
            </Box>

            <Typography style={{marginBottom:50,textAlign:'justify',textJustify:'auto',fontSize:23}}>{post.description}</Typography>
            <Comments post={post}/>
        </Box>
        </>
    )
}

export default Details
