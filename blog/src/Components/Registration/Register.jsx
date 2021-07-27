import { Button, makeStyles } from '@material-ui/core';

import url from './Images/login.jpg'
import { Link} from 'react-router-dom';
import { newUser } from '../../service/api';
import {React, useState} from 'react'
import { useHistory } from 'react-router'
import { red } from '@material-ui/core/colors';

const initialValues={
  email:'',
  username:'',
  password:'',
  
}
const useStyle=makeStyles(()=>(
 {
    register:{
       height:'90vh',
       display:'flex',
       flexDirection:'column',
       alignItems:'center',
       justifyContent:'center',
      background: `url(${url})`,
      backgroundSize:'cover',
      color:'#F6E9E9'
    },
    registerTitle:{
    fontSize:'50px'
    },
    registerForm:{
     marginTop:'20px',
     display:'flex',
     flexDirection:'column'
    },
    label:{
        margin:'10px 0',
        fontSize:20,
        fontWeight:500
    },
    registerInput:{
        padding:'10px',
        backgroundColor:'white',
        border:'none',
        fontSize:20,
        
    },
    registerButton:{
        marginTop:20,
        background:'#2F4F4F',
        color:'#efff'
    },
    loginButton:{
        position:'absolute',
        top:80,right:20,
        background:'#2F4F4F',
        
        color:'#efff'
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }

}))

function Register() {
    const [user, setUser]=useState(initialValues);
    const[error,setError]=useState(false);
    const history=useHistory();

    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
        console.log(e.target.value);
    }
    const userData=async()=>{
    
            setError(false)
           const res=await newUser(user)
          if(res!==500)
          history.push('/login');
           else
           setError(true);
    
    }
    const classes =useStyle();
    return (
        <div className={classes.register}>
          <span className={classes.registerTitle}>Register</span>
          <form action="" className={classes.registerForm}>
          <label className={classes.label}>Username</label>
              <input name="username" onChange={(e)=>handleChange(e)} type="text" placeholder="Enter your username" className={classes.registerInput}></input>
              <label className={classes.label}>Email</label>
              <input name="email" onChange={(e)=>handleChange(e)} type="text" placeholder="Enter your email" className={classes.registerInput}></input>
              <label className={classes.label}>Password</label>
              <input name="password" onChange={(e)=>handleChange(e)} type="password" placeholder="Enter your password" className={classes.registerInput}></input>
              <Button className={classes.registerButton} onClick={()=>userData()}>Register</Button>
          </form>
          <Link to='/login'className={classes.link}><Button className={classes.loginButton}>Login</Button></Link>
          {error&&<span style={{color:red,marginTop:'10px'}}>Username or email already in use</span>}
        </div>
    )
}


export default Register
