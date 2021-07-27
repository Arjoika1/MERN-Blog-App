import React from 'react'
import url from './Images/poster.jpeg'
import {Box, makeStyles, Typography} from '@material-ui/core'


const useStyles=makeStyles({
    image:{
       background: `url(${url}) center/55% #000 repeat-x`,
       width:'100%',
       height:'55vh',
       display:'flex',
       flexDirection:'column',
       alignItems:'center',
       justifyContent:'center',
    
       '& :first-child':{
        fontSize:50,
        color: 'rgba(255,255,255,0.9)',
        lineHeight:1
       },
       '& :last-child':{
        fontSize:30,
        backgroundColor: 'rgba(255,255,255,0.5)',
        fontWeight:'bold',
        
       }
    }
});


function Banner() {
   const classes=useStyles();
    return (
        <div>
        <Box className={classes.image}>
          <Typography>FAN THEORIES</Typography>
          <Typography>Movies and Web-Series</Typography>
        </Box>
        </div>
    )
}

export default Banner
