import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Card20000(){
    return(
        <>
            <Grid container sx={{bgcolor:"white", p:6}}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3">
                        Overview
                    </Typography>
                    <Typography variant="h6">
                    Universal Research and Accreditation specializes in guiding organizations through the process of achieving ISO 20000 certification, the international standard for IT service management (ITSM). Our experienced team ensures that your IT services align with best practices, delivering reliable and efficient solutions. With our expertise, you can enhance your IT service delivery and achieve operational excellence.
                    </Typography>
                    <Typography variant="h5" sx={{mt:3}}>
                    Benefits of ISO 20000 Certification:
                    </Typography>
                    <Typography variant="h6" sx={{mt:3}}>
                        <ol>
                            <li><strong>Improved IT Service Quality:</strong>Enhance the quality and reliability of your IT services by adhering to internationally recognized best practices.</li>
                            <li><strong>Customer Satisfaction:</strong>Boost customer satisfaction through consistent and efficient IT service delivery, meeting or exceeding their expectations.
                            </li>
                            <li>
                            <strong>Operational Efficiency: </strong> Streamline IT processes and reduce downtime, resulting in more efficient and cost-effective operations.
                            </li>
                            <li><strong>Risk Management:</strong> Identify and mitigate IT-related risks, ensuring business continuity and minimizing service disruptions.
                            </li>
                            <li><strong>Competitive Advantage:</strong> Demonstrate your commitment to high standards in IT service management, gaining a competitive edge in the market.
                            </li>
                        </ol>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}