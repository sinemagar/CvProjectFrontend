import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";




const Login=()=>{
    

    
const [login, setLogin]=useState({

    userName:"",
    password:""

});
const navigate  =useNavigate();
const handleUserLogin= async()=>{
    //C:\Users\sinem\Desktop\cvproject\frontend\cvproject\src\components\users
    try{
        
        const response = await axios.post("http://localhost:8080/users/Login",login)
    
        console.log(response.data.id);
       // localStorage.setItem("user",JSON.stringify(response.data))
        localStorage.setItem("user.id",response.data.id)
        console.log(localStorage.getItem("user.id",response.data.id))
       // Navigation("/users");
        alert("Şifre Doğru Hoş geldiniz...")
        navigate ("/user");
    
    }catch(error){
        //console.log(error)
        alert("Yanlış bişeyler var...")
}}




   const paperStyle = {backgroundColor:'#CCFFFF', padding:20,height:'50vh',width:280,margin:'20px auto'};
   const avatarStyle ={backgroundColor: '#0066FF' }
   const btnStyle = {margin:'8px 0px'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2> User Sign In</h2>
                </Grid>

            <TextField label='Username' placeholder="Enter Username" fullWidth required  
            value={login.userName}
            onChange={(e)=>setLogin({...login,userName:e.target.value })} />

            <hr></hr>
            <TextField label='Password' placeholder="Enter Password"type='password' fullWidth required
            value={login.password}
            onChange={(e)=>setLogin({...login,password:e.target.value })} />
            <FormControlLabel
            control={
            <Checkbox
            name="checked"
            color="primary"/>} label="Remember Me"
            />

            <Button  onClick= { handleUserLogin} type="submit" color= 'primary' variant="contained" style={btnStyle} fullWidth>Sign In</Button>

               
                <Typography> Do you have a account?
                <Link href="/signup">Sign Up</Link> <br></br><br></br>
                <Link href="/adminlogin">Admin Girişi için Tıklayınız.</Link>

                </Typography>
                
                
            </Paper>
        </Grid>
     
        )
}




export default Login;