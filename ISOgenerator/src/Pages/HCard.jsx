import { Grid, Typography } from "@mui/material";
import React from "react";

export default function HCard(){
    return(
        <>
            <Grid container sx={{bgcolor:"white", p:6}}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3">
                        Overview
                    </Typography>
                    <Typography variant="h6">
                    Universal Research and Accreditation is here to help organizations achieve HACCP (Hazard Analysis and Critical Control Points) certification, a vital standard for ensuring food safety. Our expert team will assist you in implementing a comprehensive HACCP plan, enabling you to manage food safety risks effectively and maintain high-quality standards. Partner with us to enhance your food safety practices and build consumer trust.
                    </Typography>
                    <Typography variant="h5" sx={{mt:3}}>
                    Benefits of HACCP Certification:
                    </Typography>
                    <Typography variant="h6" sx={{mt:3}}>
                        <ol>
                            <li><strong>Proactive Food Safety:</strong>Identify and control potential hazards at critical points in the food production process to prevent contamination.</li>
                            <li><strong>Regulatory Compliance:</strong> Meet industry regulations and standards for food safety, ensuring adherence to legal requirements.
                            </li>
                            <li>
                            <strong>Consumer Trust:</strong>  Build confidence among consumers by demonstrating your commitment to maintaining high safety and quality standards.
                            </li>
                            <li><strong>Improved Operations:</strong>  Enhance operational efficiency by implementing a systematic approach to food safety, leading to better product quality.
                            </li>
                        </ol>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}