import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Cemark(){
    return(
        <>
            <Grid container sx={{bgcolor:"white", p:6}}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3">
                        Overview
                    </Typography>
                    <Typography variant="h6">
                    At Universal Research and Accreditation, we specialize in facilitating CE Mark certification, a mandatory conformity mark for products sold within the European Economic Area (EEA). Our expert team ensures that your products meet stringent European safety, health, and environmental protection standards. By partnering with us, you can confidently enter and compete in the European market, demonstrating compliance and commitment to quality and safety.
                    </Typography>
                    <Typography variant="h5" sx={{mt:3}}>
                    Benefits of ISO CEMARK Certification:
                    </Typography>
                    <Typography variant="h6" sx={{mt:3}}>
                        <ol>
                            <li><strong>Market Access</strong>  Implementing ISO 14001 helps reduce your environmental impact, promoting sustainable business practices.</li>
                            <li><strong>Regulatory Compliance:</strong> Streamline processes to reduce waste and enhance overall efficiency.
                            </li>
                            <li>
                            <strong>Reduced Liability:</strong> Streamline processes to reduce waste and resource consumption, leading to cost savings.
                            </li>
                            <li><strong>Consumer Confidence:</strong> Enhances customer trust by showing that your products meet high safety, health, and environmental standards.</li>
                            <li><strong>Competitive Advantage:</strong> Boosts your product's credibility and competitiveness in the global marketplace  to recognized European standards.</li>
                        </ol>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}