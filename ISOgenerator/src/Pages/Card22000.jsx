import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Card22000(){
    return(
        <>
            <Grid container sx={{bgcolor:"white", p:6}}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3">
                        Overview
                    </Typography>
                    <Typography variant="h6">
                    Universal Research and Accreditation is dedicated to guiding organizations through the process of achieving ISO 22000 certification, the international standard for food safety management systems (FSMS). Our experienced team supports you in implementing effective food safety practices, ensuring your products meet the highest standards of safety and quality. Partner with us to enhance your food safety practices and build trust with consumers.
                    </Typography>
                    <Typography variant="h5" sx={{mt:3}}>
                    Benefits of ISO 22000 Certification:
                    </Typography>
                    <Typography variant="h6" sx={{mt:3}}>
                        <ol>
                            <li><strong>Enhanced Food Safety:</strong>Ensure the safety of food products through a structured food safety management system that addresses potential hazards.</li>
                            <li><strong>Regulatory Compliance:</strong> Meet legal and regulatory requirements for food safety, demonstrating your commitment to high standards.
                            </li>
                            <li>
                            <strong>Consumer Confidence:</strong>  Build trust with customers by proving your dedication to delivering safe and high-quality food products.
                            </li>
                            <li><strong>Risk Management:</strong> Identify, assess, and manage food safety risks effectively, reducing the likelihood of contamination and safety issues.
                            </li>
                        </ol>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}