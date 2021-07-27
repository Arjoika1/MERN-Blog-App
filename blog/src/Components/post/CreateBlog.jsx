import { Box,makeStyles,FormControl, InputBase, Button, TextareaAutosize } from '@material-ui/core'
import {AddCircle} from '@material-ui/icons'

import {React,useState, useEffect, useContext} from 'react'
import { useHistory } from 'react-router'
import { useLocation } from 'react-router-dom'
import { Context } from '../../Context/Context'

import {createPost, uploadFile} from '../../service/api'

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
      button:{
    
        background:'#2F4F4F',
        color:'#efff'
    },
    textArea:{
        width: '100%',
        marginTop:'30px',
        border:'none',
        fontSize:'18px',
        '&:focus-visible':{
            outline:'none'
        },
        circle:{
        cursor:'pointer'
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




function CreateBlog() {

    const classes=useStyle();

    const [post, setPost]=useState(initialValues);
    const [file,setFile]=useState('');
    const [image,setImage]=useState('http://localhost:8000/file/1626504003635.blog.poster.png');
    const {user}= useContext(Context);
    const location=useLocation();
    
    

    useEffect(()=>{
        
     const setCat=()=>{   
     const cat=location.search.substring(10);
     
    console.log(cat);
    if(cat!=='')
       { 
           post.categories=cat;
       console.log();
       }
    }
    setCat();
    },[]);

    useEffect(()=>{
    
    const setUser=()=>{
        setPost({...post,username:user.username});
        console.log(user.username);
    };
    setUser();
    },[user]);

    

    useEffect(()=>{
        const getImage=async()=>{
            if(file){
                
                let data =new FormData();
                data.append("name",file.name);
                data.append("file",file);

                const image=await uploadFile(data);
                //post.picture=image.data;
                setPost({...post,picture:image.data});
                console.log(post.picture);
                setImage(image.data);
            }

        }
        getImage();
    },[file])

    //const url="http://localhost:8000/file/1626504003635.blog.poster.png";

    const handleChange=(e)=>{
        setPost({...post,[e.target.name]:e.target.value})
        console.log(e.target.value)
    }

    const savePost=async()=>{

        //console.log(location.search.substring(10));
        await createPost(post);
        history.push('/');
    }
    

    const history=useHistory();

    return (

        <Box className={classes.container}>
            <img src={image} alt='gum' className={classes.image}/>
        
           <FormControl className={classes.form}>
              

           <label htmlFor="fileInput">
               <AddCircle className={classes.circle}fontSize="large" color="action"/>
               </label>
               <input onChange={(e)=>setFile(e.target.files[0])} type="file" id="fileInput" style={{display:'none'}}/>

               <InputBase onChange={(e)=>handleChange(e)} name="title" placeholder="title" className={classes.textField}/>

               <Button onClick={()=>savePost()}variant="contained" className={classes.button}>Publish</Button>
           </FormControl>

           <TextareaAutosize onChange={(e)=>handleChange(e)} name="description" minRows={5} placeholder={`What's your theory??` } className={classes.textArea}/>
        </Box>
    )
}

export default CreateBlog
