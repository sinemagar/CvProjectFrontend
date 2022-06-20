import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Grid } from '@mui/material';
import { useEffect, useState } from "react";
import axios from 'axios';

const Admin=()=>{


  
const [userCv, setUserCv] = useState([]);// useState sayesinde belirlediğimiz iki değişkene atama yapabilmekteyiz

useEffect(()=>{axios.get("http://localhost:8080/users").then((res)=>{//backende bağlanacağımız portu vve frontend deki port get işlemi
 setUserCv(res.data);

console.log(res.data);

  })},[])






    const divstyle =  {backgroundColor:'#CCFFFF', padding:20,height:'100vh',width:'auto',margin:'20px '};
    const btnStyle = {margin:'8px 0px'}

    return(
<div style={divstyle}>

      <Button //admin çıkış işlemi için 
      type="submit" 
      color= 'primary' 
      variant="contained" 
      style={btnStyle} 
      fullWidth
      href='/adminlogin'
      >Log Out
      </Button>

    <div>
    <Grid align='center'>
                
                <h2> Users</h2>
                </Grid>
    </div>
  
      {userCv.map((user)=>(//material ui kullanarak acordion yapısına maps işlemi yaparak kullanıcı kadar bilgileri ekrana bastırma
      //userCv üzerinden alınan verileri mapleyerek her bir datayı user üzerinden çekmesini sağlamaktadır.
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> <b>Ad Soyad:</b> {user.name} {user.surName} <b>Mail:</b> {user.mail} <b>Cep No: </b>{user.cepNo} </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
            <li>
                <b>
                  UserName:
                </b>
                {user.userName}
              </li>
              <li>
                <b>
                  Beceri:
                </b>
                {user.beceri}
              </li>
              <li>
                <b>
                  Tecrübe Yılı:
                </b>
                {user.tecrube}
              </li>
              <li>
                <b>
                  Eğitim Bilgileri:
                </b>
                {user.egitimBilgileri}
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      ))}
    
     
     
      

    </div>

    );

}
export default Admin;