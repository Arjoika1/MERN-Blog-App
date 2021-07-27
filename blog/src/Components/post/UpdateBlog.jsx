import { Box,makeStyles,FormControl, InputBase, Button, TextareaAutosize } from '@material-ui/core'
import {AddCircle} from '@material-ui/icons'
import {React, useState, useEffect} from 'react'
import { getPost,updatePost, uploadFile } from '../../service/api'
import { useHistory } from 'react-router-dom'

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
      form:{
          display:'flex',
          flexDirection:'row',
          marginTop:'10px'
      },
      textField:{
          flex:"1px",
          margin:'0 30px',
          fontSize:'25px'
      },
      circle:{
          cursor:'pointer'
      },
      button:{
    
        background:'#2F4F4F',
        color:'#efff',
        cursor:'pointer'
    },
    textArea:{
        width: '100%',
        marginTop:'30px',
        border:'none',
        fontSize:'18px',
        '&:focus-visible':{
            outline:'none'
        }
    }
    }
    ))



    const initialValues={
        title:'',
        description:'',
        picture:'',
        username:'',
        categories:'All',
        createDate: new Date()
    }


function UpdateBlog({match}) {

    const classes=useStyle();
    const history=useHistory();

    const [post,setPost]=useState(initialValues);
    const [file,setFile]=useState('');
    const url=post.picture?post.picture:'http://localhost:8000/file/1626504003635.blog.poster.png';
    const [image,setImage]=useState(url);


   

    useEffect(()=>{
      const fetchData=async()=>{
          let data=await getPost(match.params.id);
          setPost(data);
          setImage(url);
      }
      fetchData();
    },[url])


    
    useEffect(()=>{
        const getImage=async()=>{
            if(file){
                
                let data =new FormData();
                data.append("name",file.name);
                data.append("file",file);
                 const img=await uploadFile(data);
                //post.picture=img.data;
                setPost({...post,picture:img.data});
                console.log(post.picture);
                setImage(img.data);
                console.log(post.picture);
                console.log(img.data);
                console.log(image);
            }

        }
        getImage();
    },[file])


    const handleChange=(e)=>{
        setPost({...post,[e.target.name]:e.target.value})
    }

    const updateBlog=async()=>{
        await updatePost(match.params.id,post);
        history.push(`/details/${match.params.id}`);
    }

    return (

        <Box className={classes.container}>
            <img src={image} alt='gum' className={classes.image}/>
        
           <FormControl className={classes.form}>
              
               <label htmlFor="fileInput">
               <AddCircle className={classes.circle}fontSize="large" color="action"/>
               </label>
               <input onChange={(e)=>setFile(e.target.files[0])} type="file" id="fileInput" style={{display:'none'}}/>

               <InputBase  name="title" onChange={(e)=>handleChange(e)} placeholder="title" className={classes.textField} value={post.title}/>

               <Button onClick={()=>updateBlog()} variant="contained" className={classes.button}>Update</Button>
           </FormControl>

           <TextareaAutosize name="description" onChange={(e)=>handleChange(e)} minRows={5} placeholder={`What's your theory??` } className={classes.textArea} value={post.description}/>
        </Box>
    )
}

export default UpdateBlog
