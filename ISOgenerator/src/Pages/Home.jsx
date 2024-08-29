import React from "react";
import { Grid, Typography, Box, Button, Container } from "@mui/material";

import {Link} from "react-router-dom"

export default function Home() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} className="main">
          <div className="content">
            <Typography variant="h2">
            Universal Research and Accreditation
            </Typography>
            <Typography variant="h4">
              Get your ISO Certificate just one click
            </Typography>
            <Button variant="contained"
            className="certificate"
             sx={{color:"white", backgroundColor:"#7469B6", mt:2}}
             component={Link}
             to="/services"
             >
              View All Certificate
              </Button>
              <Button variant="contained"
            className="certificate"
             sx={{color:"white", backgroundColor:"#7469B6", mt:2}}
             component={Link}
             to="/getCertificate"
             >
              Verify your Certificate
              </Button>
          </div>
          </Grid>
      </Grid>
     
    </>
  );
}
