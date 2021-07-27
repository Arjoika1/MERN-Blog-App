import React, {useContext} from 'react'
import { Button,Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { data } from '../../AllCategory/data'
import { Link, useLocation } from 'react-router-dom'
import { Context } from '../../Context/Context';

const useStyle=makeStyles({
    button:{
        marginTop:'15px',
        marginLeft:'7px',
        marginBottom:'15px',
        background:'#2F4F4F',
        color:'#efff'
    },
    table:{
        border:'1px solid rgba(224,224,224,1)'
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }
})
function Categories() {
    const classes=useStyle();

    const location= useLocation();
    const {user}=useContext(Context);
    return (
        <>
          <Link to={user?`/create/${location.search}`:'/login'} className={classes.link}><Button variant="contained" className={classes.button}>Add Your Theory</Button></Link> 
        
          <Table className={classes.table}>
              <TableHead>
                  <TableRow>
                      <TableCell> <Link to={`/`} className={classes.link}>All Movies&Series</Link></TableCell>
                  </TableRow>
              </TableHead>

              <TableBody>
              {
                  data.map(category=>(
                    <TableRow>
                  <TableCell>
                   <Link to={`/?category=${category}`} className={classes.link}>{category}</Link>
                  </TableCell>
                  </TableRow>
                  ))
              }
                  
              </TableBody>
          </Table>
        
        </>
    )
}

export default Categories
