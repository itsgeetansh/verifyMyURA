import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Card45001(){
    return(
        <>
            <Grid container sx={{bgcolor:"white", p:6}}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3">
                        Overview
                    </Typography>
                    <Typography variant="h6">
                    Universal Research and Accreditation is dedicated to assisting organizations in achieving OHSAS/ISO 45001 certification, the international standard for occupational health and safety management systems (OHSMS). Our team of experts will guide you in establishing effective health and safety practices, ensuring a safer work environment and compliance with global standards. Partner with us to enhance your occupational health and safety management and protect your workforce.
                    </Typography>
                    <Typography variant="h5" sx={{mt:3}}>
                    Benefits of OHSAS/ISO 45001 Certification:
</Typography>
                    <Typography variant="h6" sx={{mt:3}}>
                        <ol>
                            <li><strong>Improved Safety:</strong> Reduce workplace accidents and illnesses through the implementation of a structured health and safety management system.</li>
                            <li><strong>Regulatory Compliance:</strong> Meet and exceed legal and regulatory requirements for occupational health and safety, minimizing the risk of penalties.
                            </li>
                            <li>
                            <strong>Enhanced Employee Well-being:</strong>  Foster a safer and healthier work environment, leading to increased employee satisfaction and morale.
                            </li>
                            <li><strong>Risk Management:</strong>Identify, assess, and mitigate health and safety risks effectively, reducing potential hazards and improving overall workplace safety.
                            </li>
                        </ol>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}