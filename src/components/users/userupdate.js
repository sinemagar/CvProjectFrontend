import * as React from 'react';

import { Avatar, Box, Button, Grid,  Paper, TextField } from "@mui/material";
import Logo from './logo.jpg'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
const UserUpdate =()=>{

  const [userUpdate,getupdate]=useState({
    userName:"",
    password:"",
    name:"",
    surName:"",
    mail:"",
    egitimBilgileri:"",
    tecrube:"",
    cepNo:"",
    beceri:"" 
  });

const navigate = useNavigate();
const handleUpdate = async()=>{
  try{
    const userIdUpdate = localStorage.getItem("user.id");
  const response = await axios.put("http://localhost:8080/users/update/"+userIdUpdate,userUpdate);
  localStorage.getItem("user",JSON.stringify(response.data))
    alert("Kayıt Başarılı.")
    navigate("/user");


  }catch(error){
    //console.log(error)
    alert("Yanlış bişeyler var...")
    
    }



}



    const beceristyle = {width: 680,
        maxWidth: '100%'}
        const paperStyle = {backgroundColor:'#CCFFFF', padding:20,height:'75vh',width:700,margin:'50px auto'};
        const btnStyle = {margin:'8px 0px'}
        const avatarStyle ={backgroundColor: '#0066FF' }
//cvproject\src\components\logo.jpg
   
return(
  <Grid> <Paper elevation={10} style={paperStyle}>
      <Grid align='center'>
          <Avatar style={avatarStyle}
          variant="rounded"
          sx={{ width: 100, height: 56 }}
          src={Logo}></Avatar>
          <h2> User Update</h2>
          </Grid>
  <Box component='form'
  sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
   
    >
  <div>
        <TextField id='username'
  label='Ad'
  placeholder="Adınız"
  variant="filled"
  value={userUpdate.name}
    onChange={(e)=>getupdate({...userUpdate,name:e.target.value})}
  />
  <TextField
    id="usersurname"
    label="Soyad"
    placeholder="Soyadınız"
    multiline
    variant="filled"
    value={userUpdate.surName}
    onChange={(e)=>getupdate({...userUpdate,surName:e.target.value})}

  />
  
  <TextField
    id="useregitim"
    label="Eğitim Bilgileri"
    multiline
    rows={4}
   
    placeholder="Eğitim Bilgileriniz"
    variant="filled"
    value={userUpdate.egitimBilgileri}
    onChange={(e)=>getupdate({...userUpdate,egitimBilgileri:e.target.value})}
    
  />

      </div>
<div>
  <TextField id='usermail'
  label='Mail'
  placeholder="Mailiniz"
  variant="filled"
  value={userUpdate.mail}
    onChange={(e)=>getupdate({...userUpdate,mail:e.target.value})}
    
  />
 <TextField id='usercepno'
  label='Cep No'
  placeholder="Telefon Numaranız"
  variant="filled"
  value={userUpdate.cepNo}
    onChange={(e)=>getupdate({...userUpdate,cepNo:e.target.value})}
    
  />
      <TextField
    id="useregitim"
    label="Tecrübe"
    multiline
    rows={4}
   
    placeholder="Tecrübe Yılını Giriniz"
    variant="filled"
    value={userUpdate.tecrube}
    onChange={(e)=>getupdate({...userUpdate,tecrube:e.target.value})}
    
  />
<TextField id='usermail'
  label='Username'
  placeholder="Kullanıcı adı giriniz"
  variant="filled"
  value={userUpdate.userName}
    onChange={(e)=>getupdate({...userUpdate,userName:e.target.value})}
    
  />
  <TextField id='usermail'
  label='password'
  placeholder="Şifre giriniz"
  type={"password"}
  variant="filled"
  value={userUpdate.password}
    onChange={(e)=>getupdate({...userUpdate,password:e.target.value})}
    
  />

</div>
<div>

  <TextField
  id ='userbeceri'
  label='Beceri'
  multiline
  rows={4} 
  style={beceristyle}
  value={userUpdate.beceri}
  onChange={(e)=>getupdate({...userUpdate,beceri:e.target.value})}
  

  />
  
</div>


  </Box>
  <Button onClick={handleUpdate} type="submit" color= 'primary' variant="contained" style={btnStyle}>Done</Button>

  </Paper>
  </Grid>

  
  
);
}
export default UserUpdate;