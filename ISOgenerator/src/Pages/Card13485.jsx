import { Grid, Typography } from "@mui/material";
import React from "react";
import Footer from "./Footer";

export default function Card13485(){
    return(
        <>
            <Grid container sx={{bgcolor:"white", p:6}}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3">
                        Overview
                    </Typography>
                    <Typography variant="h6">
                    Universal Research and Accreditation excels in guiding businesses through the process of obtaining ISO 13485 certification, the international standard for quality management systems in the medical device industry. Our expertise ensures that your organization meets the stringent regulatory requirements necessary for manufacturing and distributing medical devices. Partnering with us guarantees that you uphold the highest quality and safety standards, enhancing your reputation in the healthcare sector.
                    </Typography>
                    <Typography variant="h5" sx={{mt:3}}>
                    Benefits of ISO 13485 Certification:
                    </Typography>
                    <Typography variant="h6" sx={{mt:3}}>
                        <ol>
                            <li><strong>Regulatory Compliance:</strong>  Ensure your medical devices meet global regulatory requirements, facilitating international market access.</li>
                            <li><strong>Quality Assurance:</strong> Demonstrate a commitment to producing safe and effective medical devices through a robust quality management system.
                            </li>
                            <li>
                            <strong>Enhanced Customer Trust:</strong> Build confidence with healthcare professionals and patients by adhering to recognized industry standards.
                            </li>
                            <li><strong>Operational Efficiency:</strong>Streamline processes to improve product quality, reduce waste, and enhance overall operational efficiency.</li>
                        </ol>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}