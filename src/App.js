import React from 'react';
import { Routes,Route } from 'react-router-dom';


import Login from './components/login/Login';
import ALogin from './components/login/adminlogin';
import Admin from './components/admin/admin';
import UserUpdate from './components/users/userupdate';
import User from './components/users/user';
import SignUp from './components/users/signup'; 
function App() {
  return (
   
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/adminlogin" element={<ALogin/>}/>
    <Route path="/admin" element={<Admin/>}/>
    <Route path="/userupdate" element={<UserUpdate/>}/>
    <Route path="/user" element={<User/>}/>
    <Route path="/signup" element={<SignUp/>}/>
  </Routes>


  );
}

export default App;