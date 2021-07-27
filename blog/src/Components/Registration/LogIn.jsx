import { Button, makeStyles } from '@material-ui/core';

import {React, useState} from 'react'
import { useHistory } from 'react-router'

import { Link} from 'react-router-dom';
import url from './Images/login.jpg'
import axios from 'axios';
import { useRef } from 'react';
import { useContext } from 'react';
import { Context } from '../../Context/Context';
const useStyle=makeStyles(()=>(
 {
    login:{
       height:'90vh',
       display:'flex',
       flexDirection:'column',
       alignItems:'center',
       justifyContent:'center',
      background: `url(${url})`,
      backgroundSize:'cover',
      color:'#F6E9E9'
    },
    loginTitle:{
    fontSize:'50px'
    },
    loginForm:{
     marginTop:'20px',
     display:'flex',
     flexDirection:'column'
    },
    label:{
        margin:'10px 0',
        fontSize:20,
        fontWeight:500
    },
    loginInput:{
        padding:'10px',
        backgroundColor:'white',
        border:'none',
        fontSize:20,
        
    },
    loginButton:{
        marginTop:20,
        background:'#2F4F4F',
        color:'#efff'
    },
    
    registerButton:{
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

function LogIn() {

    const classes =useStyle();
    const userRef= useRef();
    const passwordRef=useRef();
    const [error,setError]=useState(false);
    const {isFetching,dispatch}=useContext(Context);
    


    const onSubmit=async (e) =>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            setError(false);
            const ur='';
           const res= await axios.post(`${ur}/login`,{
               username:userRef.current.value, password: passwordRef.current.value
           });
           dispatch({type:"LOGIN_SUCCESS",payload:res.data});
        }
        catch(err){
            setError(true);
            dispatch({type:"LOGIN_FAILURE"});
        }
    }
     console.log(isFetching);
    return (
        <div className={classes.login}>
          <span className={classes.loginTitle}>Login</span>
          <form action="" className={classes.loginForm}>
              <label className={classes.label}>Username</label>
              <input ref={userRef} type="text" placeholder="Enter your username" className={classes.loginInput}></input>
              <label className={classes.label}>Password</label>
              <input ref={passwordRef}  type="password" placeholder="Enter your password" className={classes.loginInput}></input>
              <Button className={classes.loginButton} onClick={onSubmit} disabled={isFetching}>Login</Button>
          </form>
          <Link to='/register'className={classes.link}><Button className={classes.registerButton}>Register</Button></Link>
          {error&&<span style={{color:"red",marginTop:'10px'} }>Invalid username or password</span>}
        </div>
    )
}

export default LogIn
