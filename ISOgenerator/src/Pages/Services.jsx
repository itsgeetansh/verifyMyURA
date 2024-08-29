import React from "react";
import { Container, Grid } from "@mui/material";
import ServicesCard from "../Component/Card";
import Footer from "./Footer";

export default function Services(){
    const servicesStyle = {
    minHeight: '140vh',
    backgroundImage: 'url(/img/main.jpeg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
      };
    
    return(
        <>
        <div style={servicesStyle}>
        <Container >
            <Grid container>
                <Grid item xs={12} md={4} sx={{mt:5}}>
                    <ServicesCard
                     title="ISO 9001 Certification" 
                     image="/img/quality.jpeg" 
                     description="QUALITY MANAGEMENT SYSTEM"
                    />
                </Grid>
                <Grid item xs={12} md={4} sx={{mt:5}}>
                    <ServicesCard
                     title="ISO 14001 Certification" 
                     image="/img/environment.jpeg" 
                     description="ENVIRONMENT MANAGEMENT SYSTEM"
                    />
                </Grid>
                <Grid item xs={12} md={4} sx={{mt:5}}>
                    <ServicesCard
                     title="CEMARK Certification" 
                     image="/img/cemark.webp" 
                     description="CEMARK"
                    />
                </Grid>
                
                <Grid item xs={12} md={4} sx={{mt:3}}>
                    <ServicesCard
                     title="ISO 13485 Certification" 
                     image="/img/medical.jpeg" 
                     description="MEDICAL DEVICES QUALITY MANAGEMENT SYSTEM"
                    />
                </Grid>
                <Grid item xs={12} md={4} sx={{mt:3}}>
                    <ServicesCard
                     title="ISO 27001 Certification" 
                     image="/img/security.jpeg" 
                     description="INFORMATION SECURITY MANAGEMENT SYSTEM"
                    />
                </Grid>
                <Grid item xs={12} md={4} sx={{mt:3}}>
                    <ServicesCard
                     title="ISO 22301 Certification" 
                     image="/img/business.webp" 
                     description="BUSINESS CONTINUITY MANAGEMENT SYSTEM"
                    />
                </Grid>
                
                <Grid item xs={12} md={4} sx={{mt:3}}>
                    <ServicesCard
                     title="ISO 200000 Certification" 
                     image="/img/services.jpeg" 
                     description="SERVICES MANAGEMENT SYSTEM"
                    />
                </Grid>
              <Grid item xs={12} md={4} sx={{mt:3}}>
                    <ServicesCard
                     title="ISO 50001 Certification" 
                     image="/img/energy.webp" 
                     description="ENERGY MANAGEMENT SYSTEM"
                    />
                </Grid>
                <Grid item xs={12} md={4} sx={{mt:3}}>
                    <ServicesCard
                     title="ISO 22000 Certification" 
                     image="/img/food.webp" 
                     description="FOOD SAFETY MANAGEMENT SYSTEM"
                    />
                </Grid>
                <Grid item xs={12} md={4} sx={{mt:3}}>
                    <ServicesCard
                     title="HACCP Certification" 
                     image="/img/hazard.webp" 
                     description="HAZARD ANALYSIS AND CRITICAL CONTROL POINT"
                    />
                </Grid>
               <Grid item xs={12} md={4} sx={{mt:3}}>
                    <ServicesCard
                     title="ISO 45001 Certification" 
                     image="/img/health.jpeg" 
                     description="OCCUPATION HEALTH AND SAFETY MANAGEMENT SYSYTEM"
                    />
                </Grid>
            </Grid>
        </Container>
        <Footer/>
        </div>
       
        </>
    )
}