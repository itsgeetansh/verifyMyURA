import React, { useState } from "react";
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import Footer from "./Footer";
import Lottie from "lottie-react";
import contact from "../contact.json"
export default function Contact(){
    
  const [values, setValues] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    alert('Form submitted successfully!');

    setValues({
      name: '',
      email: '',
      mobile: '',
      message: ''
    });

    e.target.submit();
  };
    return(
            <>
            <Grid container >
                <Grid item xs={12} md={12}>
                <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.17005851687!2d73.6981553041223!3d18.52454504095413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1722234104358!5m2!1sen!2sin"
            referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="655px"
            sx={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
                </Grid>   
            </Grid>

            <Container>
                <Grid container>
                <Grid item xs={12} md={12} sx={{textAlign:"center"}}>
                    <Typography variant="h2" sx={{mt:8,
          fontWeight: 'bold', 
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', 
          position: 'relative',
          color:"rgb(172, 110, 197)",
          display: 'inline-block',
          '::after': {
            content: '""',
            display: 'block',
            width: '50%', 
            height: '4px', 
            backgroundColor: '#7469B6',
            position: 'absolute',
            bottom: '-10px', 
            left: '25%',
          },
          }}>
                    Get in Touch
                    </Typography>
                </Grid>

                <Grid xs={12} md={12} sx={{mt:2}}>
                <Typography variant="h6">
                    Have any questions, feedback, or inquiries? Our team is here to assist you. Reach out to us through any of the following methods, and we'll be happy to help.
                    </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{mt:4}}>
                    <form action="https://formspree.io/f/xnnadbll" method="POST" onSubmit={handleSubmit}>
      <TextField
        required
        id="name"
        name="name"
        label="Name"
        fullWidth
        value={values.name}
        onChange={handleChange}
        sx={{
          mt: 3
        }}
      />
      <TextField
        required
        id="email"
        name="email"
        label="Email"
        fullWidth
        type="email"
        value={values.email}
        onChange={handleChange}
        sx={{
          mt: 3
        }}
      />
      <TextField
        required
        id="mobile"
        name="mobile"
        fullWidth
        label="Mobile Number"
        type="tel"
        value={values.mobile}
        onChange={handleChange}
        sx={{
          mt: 3
        }}
      />
      <TextField
        required
        id="message"
        name="message"
        label="Message"
        multiline
        fullWidth
        rows={4}
        value={values.message}
        onChange={handleChange}
        sx={{
          mt: 3
        }}
      />
      <Button
        className="submitButton"
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ backgroundColor: "#7469B6", mt: 7 }}
      >
        Submit
      </Button>
    </form>
        </Grid>
        <Grid item xs={12} md={6} sx={{width:"350px", mb:8}}>
                  <Lottie loop={true} animationData={contact} />
                </Grid>
                </Grid>
            </Container>
            <Footer/>
            </>
        
    )
}