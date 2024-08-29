import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Card22301(){
    return(
        <>
            <Grid container sx={{bgcolor:"white", p:6}}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3">
                        Overview
                    </Typography>
                    <Typography variant="h6">
                    Universal Research and Accreditation is dedicated to helping organizations achieve ISO 22301 certification, the international standard for business continuity management systems (BCMS). Our expert team guides you through the process of implementing effective continuity strategies, ensuring your business can withstand and recover from disruptive incidents. Partner with us to enhance your organization's resilience and safeguard your operations.
                    </Typography>
                    <Typography variant="h5" sx={{mt:3}}>
                    Benefits of ISO 22301 Certification:
                    </Typography>
                    <Typography variant="h6" sx={{mt:3}}>
                        <ol>
                            <li><strong>Operational Resilience</strong>Ensure your business can continue operating during and after disruptive events by implementing a robust BCMS.</li>
                            <li><strong>Risk Mitigation:</strong>   Identify potential threats and establish procedures to mitigate the impact of disruptions on your operations.
                            </li>
                            <li>
                            <strong>Customer Confidence:</strong> Demonstrate to clients and stakeholders your commitment to maintaining service continuity and reliability.
                            </li>
                            <li><strong>Regulatory Compliance: </strong>Meet legal and regulatory requirements for business continuity, enhancing your organization's credibility.
                            </li>
                        </ol>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}