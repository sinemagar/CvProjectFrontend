import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";




const ALogin=()=>{


    const[alogin,setALogin]=useState({//useState ile ikideğişken üzerine değer ataması yapılmaktadır
        //bu kısımda login işlemi olacağı için database de buluanan adminname ile pasword verilerini boş veri imiş gibi tanımlıyoruz.
        //eğer başka veri girilirse bu kısımda, textfielde yazı yazılamaz.
        adminName:"",
        password:""
    })

    const navigate = useNavigate();//giriş işlemi yaptıktan sonra yönlendirilecek sayfa için
    const handleAdminLogin = async()=>{//handle değişkeni tıklanma işlevine atanıyor. eğerki butona tıklanma işlevi yapılırsa database üzerinden verileri kontrol ediyor.
        try{


            const response = await axios.post("http://localhost:8080/admins/adminlogin",alogin);//backende post işlemi atmak için port giriiyor.
            console.log(response);
            localStorage.setItem("admin",JSON.stringify(response.data));
            localStorage.setItem("admin.id",response.data.id);
            console.log(localStorage.getItem("admin.id"))
            //işlem doğru ise navigate ile yönlendirme işlemi yapılıyor.
            alert("Şifre Doğru Hoş Geldiniz...")
            navigate("/admin");



        }catch(error){
            console.log(error);
            alert("Yanlış bişeyler var...")
        }
    }



   const paperStyle = {backgroundColor:'#CCFFFF', padding:20,height:'50vh',width:280,margin:'30px auto'};
   const avatarStyle ={backgroundColor: '#0066FF' }
   const btnStyle = {margin:'8px 0px'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Admin Sign In</h2>
                </Grid>

            <TextField 
            label='Admin Name'
            placeholder="Enter Admin Name" 
            fullWidth 
            required
            //girilen değeri adminname e atıyor
            value={alogin.adminName}
            onChange={(e)=> setALogin({...alogin,adminName:e.target.value})}//onchange methodu ile text de giriken veriyi useState de tanımlanan değişkene yolluyor.
            />

            <hr></hr>
            <TextField 
            label='Password'
             placeholder="Enter Password"
             type='password' 
             fullWidth 
             required
            value={alogin.password}
            onChange={(e)=>setALogin({...alogin,password:e.target.value})}
             />
            <FormControlLabel
            control={
            <Checkbox
            name="checked"
            color="primary"/>} label="Remember Me"
            />

            <Button onClick={handleAdminLogin}
            type="submit" //tıklama işlemi ile birlikte handleadminlogin fonksiyonunu çağırıyor ve işlemler gerçekleşiyor.
            color= 'primary' 
            variant="contained" 
            style={btnStyle} 
            fullWidth>
                Sign In
            </Button>

                

            
                
                
            </Paper>
        </Grid>
     
        )
}

export default ALogin;