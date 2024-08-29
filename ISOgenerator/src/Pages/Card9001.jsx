import { Grid, Typography } from "@mui/material";
import React from "react";
import Footer from "./Footer";

export default function Card9001(){
    
    return(
        <>
           <Grid container sx={{bgcolor:"white", p:6}}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3">
                        Overview
                    </Typography>
                    <Typography variant="h6">
                    At Universal Research and Accreditation, we specialize in guiding businesses towards excellence through ISO 9001 certification. Our expertise in quality management systems ensures that your organization meets the highest standards of quality and efficiency. With our comprehensive support and streamlined processes, achieving ISO 9001 certification becomes a seamless and rewarding experience. Trust us to help you enhance customer satisfaction, improve operational efficiency, and drive continuous improvement in your business.
                    </Typography>
                    <Typography variant="h5" sx={{mt:4}}>
                    Benefits of ISO 9001 Certification:
                    </Typography>
                    <Typography variant="h6" sx={{mt:3}}>
                        <ol>
                            <li><strong>Improved Quality Control:</strong> Ensure consistent quality in products and services, boosting customer satisfaction and trust.</li>
                            <li><strong>Operational Efficiency:</strong> Streamline processes to reduce waste and enhance overall efficiency.
                            </li>
                            <li>
                            <strong>Competitive Advantage:</strong> Stand out from competitors by demonstrating a commitment to quality and excellence.
                            </li>
                            <li><strong>Enhanced Customer Satisfaction:</strong> Meet and exceed customer expectations through a focus on continuous improvement.</li>
                            <li><strong>Global Recognition:</strong> Gain international credibility and reputation with a widely respected certification.</li>
                        </ol>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}