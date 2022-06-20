import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from './logo.jpg'

const SignUp =()=>{

  const [signup,postsignUp]=useState({
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
  const handleSignUp = async()=>{
  try{
    const response = await axios.post("http://localhost:8080/users/signup",signup);

    console.log(response.data.id);
    
    alert("Kayıt Başarılı.")
    navigate("/user");



  }
  catch(error){
  alert("Yanlış bişeyler var...")
  
  }



}




    const beceristyle = {width: 680,
        maxWidth: '100%'}
        const paperStyle = {backgroundColor:'#CCFFFF', padding:20,height:'74vh',width:700,margin:'50px auto'};
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
                <h2> User SignUp</h2>
                </Grid>
        <Box component='form'
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
         
          >
        <div>
              <TextField
              
              id='username'
        label='Ad'
        placeholder="Adınız"
        variant="filled"
        value={signup.name}
          onChange={(e)=>postsignUp({...signup,name:e.target.value})}
        />
        <TextField
          id="usersurname"
          label="Soyad"
          placeholder="Soyadınız"
          multiline
          variant="filled"
          value={signup.surName}
          onChange={(e)=>postsignUp({...signup,surName:e.target.value})}

        />
        
        <TextField
          id="useregitim"
          label="Eğitim Bilgileri"
          multiline
          rows={4}
         
          placeholder="Eğitim Bilgileriniz"
          variant="filled"
          value={signup.egitimBilgileri}
          onChange={(e)=>postsignUp({...signup,egitimBilgileri:e.target.value})}
          
        />

            </div>
 <div>
        <TextField id='usermail'
        label='Mail'
        placeholder="Mailiniz"
        variant="filled"
        value={signup.mail}
          onChange={(e)=>postsignUp({...signup,mail:e.target.value})}
          
        />
       <TextField id='usercepno'
        label='Cep No'
        placeholder="Telefon Numaranız"
        variant="filled"
        value={signup.cepNo}
          onChange={(e)=>postsignUp({...signup,cepNo:e.target.value})}
          
        />
            <TextField
          id="useregitim"
          label="Tecrübe"
          multiline
          rows={4}
         
          placeholder="Tecrübe Yılını Giriniz"
          variant="filled"
          value={signup.tecrube}
          onChange={(e)=>postsignUp({...signup,tecrube:e.target.value})}
          
        />
      <TextField id='usermail'
        label='Username'
        placeholder="Kullanıcı adı giriniz"
        variant="filled"
        value={signup.userName}
          onChange={(e)=>postsignUp({...signup,userName:e.target.value})}
          
        />
        <TextField id='usermail'
        label='password'
        placeholder="Şifre giriniz"
        type={"password"}
        variant="filled"
        value={signup.password}
          onChange={(e)=>postsignUp({...signup,password:e.target.value})}
          
        />

      </div>
      <div>

        <TextField
        id ='userbeceri'
        label='Beceri'
        multiline
        rows={4} 
        style={beceristyle}
        value={signup.beceri}
        onChange={(e)=>postsignUp({...signup,beceri:e.target.value})}
        

        />
        
      </div>


        </Box>
        <Button onClick={handleSignUp} type="submit" color= 'primary' variant="contained" style={btnStyle}>Done</Button>

        </Paper>
        </Grid>

        
        
    );
}
export default SignUp;