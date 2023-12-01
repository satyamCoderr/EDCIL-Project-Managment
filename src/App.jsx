//import React, { useEffect } from 'react';
import {Route , Routes , } from "react-router-dom";
import { useEffect } from 'react';
import { Login, Register , Homepage , DashboardPage } from './pages';
import {useDispatch} from "react-redux";
import {checkIsLoggedIn}  from './redux/actionCreators/authActionCreators.js';
//import { checkIsLoggedIn } from './redux/actionCreators/authActionCreators';


const App = () => {
const dispatch = useDispatch();
useEffect(() => {
   dispatch(checkIsLoggedIn());
},[]);
  
  return (
    <div className='App'>
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="/dashboard/*" element={<DashboardPage/>}/>
      </Routes>
      
    </div>
  );
};

export default App;