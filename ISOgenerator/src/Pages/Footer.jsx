import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import {Link} from "react-router-dom"


export default function Footer(){
    return(
        <>
        <Grid container sx={{bgcolor:"#7469B6" , mt:3, p:2, color:"white"}}>

            <Grid item xs={2} md={2}></Grid>

            <Grid item xs={8} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <PhoneIcon sx={{ mr: 1 }} /> {/* margin right to add space between icon and text */}
        <Typography variant="h6">
       9259418998
      </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <MailIcon sx={{ mr: 1 }} />
        <Typography variant="h6">
        ura.certification@gmail.com
        </Typography>
      </Box>
            </Grid>

            <Grid item xs={12} md={4}>
            <Typography
          variant="h6"
          component={Link}
          to="/Home" 
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          Universal Research and Accreditation
        </Typography> 
        
            </Grid>
        </Grid>
        </>
    )
}