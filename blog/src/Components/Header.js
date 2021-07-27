import React, { useContext } from 'react'
import {AppBar,Toolbar, Typography, makeStyles, Button} from '@material-ui/core'

import { Link} from 'react-router-dom';
import { Context } from '../Context/Context';

const useStyles=makeStyles(
    {
        component:{
            background:'#FFFFFF',
            color:'black',
            
        },
        container:{
            justifyContent:'space-around',
            alignItems:'center',
            
            
        },
        link:{
            textDecoration:'none',
            color:'inherit',
            
        },
        welcome:{
            fontSize:'20px',
            fontWeight:800,
            fontFamily:'LucidaHandwriting,cursive'
        }
    }
)
function Header() {

    const classes=useStyles();
    const {user,dispatch}=useContext(Context);

    const logout=()=>{
        dispatch({type:"LOGOUT"})
    }

    return (
        
        <div>
           <AppBar className={classes.component}>
            
               <Toolbar className={classes.container}>
                <Link to='/' className={classes.link}><Typography>HOME</Typography></Link> 
                <Typography className={classes.welcome}>Welcome {user?user.username:""} !!!</Typography>
                {//user&&<Typography>{user.username}</Typography>}
                }
                {!user&&<Link to='/login'className={classes.link}><Button>LogIn</Button></Link>}
                {user&&<Link to='/' className={classes.link}><Button onClick={logout}>LogOut</Button></Link>}
                {!user&&<Link to='/register'className={classes.link}><Button>Register</Button></Link>}
               </Toolbar>
               
           </AppBar> 
        </div>
    )
}

export default Header
