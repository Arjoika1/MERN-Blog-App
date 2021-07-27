import Home from './Components/Home/Home';
import Details from './Components/post/Details';
import CreateBlog from './Components/post/CreateBlog';
import UpdateBlog from './Components/post/UpdateBlog';
import Header from './Components/Header';
import './App.css';
import React from 'react';
import { Box } from '@material-ui/core';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import LogIn from './Components/Registration/LogIn';
import Register from './Components/Registration/Register';
import {useContext} from 'react';
import { Context } from './Context/Context';

function App() {
   
  const {user}=useContext(Context);
   
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Box style={{marginTop:'64px'}}>
    <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/login'>
         {user?<Home/>:<LogIn/>}
         </Route>
         <Route exact path='/register'>
           {user?<Home/>:<Register/>}
         </Route>
         <Route exact path='/details/:id' component={Details}/>
         <Route exact path='/create' component={CreateBlog}></Route>
         <Route exact path='/update/:id' component={UpdateBlog}></Route>
    </Switch>
    </Box>
    </BrowserRouter>
    </>
      
    
  );
}

export default App;
