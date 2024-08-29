import { Grid, Typography } from "@mui/material";
import React from "react";
import Footer from "./Footer";

export default function Card14001(){
    return(
        <>
            <Grid container sx={{bgcolor:"white", p:6}}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3">
                        Overview
                    </Typography>
                    <Typography variant="h6">
                    At Universal Research and Accreditation, we specialize in helping businesses achieve ISO 14001 certification, the international standard for environmental management systems. Our expert guidance ensures that your organization meets rigorous environmental standards, promoting sustainability and operational efficiency. By partnering with us, you can enhance your environmental performance.
                    </Typography>
                    <Typography variant="h5" sx={{mt:4}}>
                    Benefits of ISO 14001 Certification:
                    </Typography>
                    <Typography variant="h6" sx={{mt:3}}>
                        <ol>
                            <li><strong>Environmental Sustainability</strong>  Implementing ISO 14001 helps reduce your environmental impact, promoting sustainable business practices.</li>
                            <li><strong>Operational Efficiency:</strong> Streamline processes to reduce waste and enhance overall efficiency.
                            </li>
                            <li>
                            <strong>Operational Efficiency</strong> Streamline processes to reduce waste and resource consumption, leading to cost savings.
                            </li>
                            <li><strong>Competitive Advantage:</strong> Gain a market edge by showcasing your dedication to sustainable practices and environmental stewardship.</li>
                        </ol>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}