import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Card50001(){
    return(
        <>
            <Grid container sx={{bgcolor:"white", p:6}}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3">
                        Overview
                    </Typography>
                    <Typography variant="h6">
                    Universal Research and Accreditation is committed to assisting organizations in achieving ISO 50001 certification, the international standard for energy management systems (EnMS). Our expert team guides you through implementing effective energy management practices, helping you optimize energy use and reduce costs. With our support, you can enhance energy efficiency and demonstrate your commitment to sustainability.
                    </Typography>
                    <Typography variant="h5" sx={{mt:3}}>
                    Benefits of ISO 20000 Certification:
                    </Typography>
                    <Typography variant="h6" sx={{mt:3}}>
                        <ol>
                            <li><strong>Enhanced Energy Efficiency:</strong>Optimize energy use and reduce energy consumption through effective energy management practices.</li>
                            <li><strong>Cost Savings:</strong> Lower energy bills and operational costs by implementing energy-saving measures and improving energy performance.
                            </li>
                            <li>
                            <strong>Environmental Impact:</strong> Minimize your environmental footprint and contribute to sustainability efforts by reducing greenhouse gas emissions.
                            </li>
                            <li><strong>Regulatory Compliance:</strong> Meet legal and regulatory requirements related to energy management, enhancing your organization's credibility.
                            </li>
                        </ol>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}