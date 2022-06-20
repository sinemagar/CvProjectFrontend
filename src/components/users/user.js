import { Avatar, Button, Grid, Paper } from "@mui/material";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";





const User= ()=>{

    const navigate  =useNavigate();


  const [userInfo,setUserInfo]=useState([]);
  const userIdInfo =localStorage.getItem("user.id")
  useEffect(()=>{axios.get("http://localhost:8080/users/"+userIdInfo).then((res)=>{
    setUserInfo(res?.data);                                           //? data gelmesede hata verme
    console.log(res.data);



  })},[])


  const handleExit = ()=>{

    navigate("/")


  }

        

    const paperStyle = {backgroundColor:'#CCFFFF', padding:20,height:'70vh',width:700,margin:'50px auto'};
    const avatarStyle ={backgroundColor: '#0066FF' }
   
    const btnStyle = {margin:'8px 0px'}

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}><PermIdentityOutlinedIcon fontSize="large"/></Avatar>
                <h2 id="username">{userInfo.name} {userInfo.surName}  </h2>
                </Grid>
<hr></hr>
<br></br>

    <div>
    <tr>
<td><b>Telefon No:</b> </td>
<td id="cepno"


>{userInfo.cepNo}</td>
</tr>
<br></br><hr></hr>
<tr>
<td><b>Mail:</b> </td>
<td id="mail" >{userInfo.mail} </td>
</tr>
<br></br><hr></hr>
<tr>
<td><b>Eğitim Bilgileri:</b> </td>
<td id="egitm" > {userInfo.egitimBilgileri} </td>
</tr>
<br></br><hr></hr>
<tr>
<td><b>İş Tecrübe Yılı:</b> </td>
<td id="tecrube" > {userInfo.tecrube} </td>
</tr>
<br></br><hr></hr>
<tr>
<td><b>Mesleki Bilgiler:</b> </td>
<td id="meslek" >{userInfo.beceri} </td>
</tr>

    </div>
    <br></br><hr></hr><br></br><br></br>
    <Button type="submit" color= 'primary' href="/userupdate" variant="contained" style={btnStyle} fullWidth>Update</Button>

    <br></br><br></br>
    <Button type="submit" color= 'primary'  onClick={handleExit} variant="contained" style={btnStyle} fullWidth>LogOut</Button>

            </Paper>
        </Grid>
    );


}
export default User;

