import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Card27001(){
    return(
        <>
            <Grid container sx={{bgcolor:"white", p:6}}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3">
                        Overview
                    </Typography>
                    <Typography variant="h6">
                    Universal Research and Accreditation specializes in assisting organizations in achieving ISO 27001 certification, the international standard for information security management systems (ISMS). Our experienced team guides you through the comprehensive process of securing your information assets, ensuring your business meets the highest standards of data protection and security. With our support, you can safeguard your sensitive information and gain a competitive edge in the marketplace.
                    </Typography>
                    <Typography variant="h5" sx={{mt:3}}>
                    Benefits of ISO 27001 Certification:
                    </Typography>
                    <Typography variant="h6" sx={{mt:3}}>
                        <ol>
                            <li><strong>Enhanced Data Security:</strong>  Protect sensitive information through a structured ISMS, minimizing risks of data breaches and cyber threats.</li>
                            <li><strong>Regulatory Compliance:</strong>  Meet legal and regulatory requirements for information security, ensuring compliance with global standards.
                            </li>
                            <li>
                            <strong>Customer Trust:</strong> Build confidence with clients and stakeholders by demonstrating a commitment to safeguarding their data.
                            </li>
                            <li><strong>Risk Management: </strong>Identify, assess, and mitigate information security risks effectively, reducing potential vulnerabilities.</li>
                        </ol>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}