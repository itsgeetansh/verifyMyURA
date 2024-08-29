import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Footer from "./Footer";

export default function About() {
    const aboutStyle = {
        minHeight: '100vh',
        backgroundImage: 'url(/img/main.jpeg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <>
            <div style={aboutStyle}>
                <Container>
                    <Grid container>
                        <Grid item xs={12} md={12} sx={{ textAlign: "center", backgroundColor: "white", mt: { xs: 2, md: 4 }, p: { xs: 2, md: 7 } }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    fontSize: { xs: '1.5rem', md: '2rem' },
                                    '&:after': {
                                        content: '""',
                                        position: 'absolute',
                                        width: { xs: '50%', md: 'inherit' },
                                        height: '2px',
                                        bottom: '-5px',
                                        left: { xs: '25%', md: 'inherit' },
                                        backgroundColor: 'currentColor',
                                    },
                                }}
                            >
                                ABOUT US
                            </Typography>
                            <Typography variant="h6" sx={{ textAlign: { xs: "left", md: "left" }, mt: { xs: 2, md: 4 }, fontSize: { xs: '1rem', md: '1.3rem' } }}>
                                Welcome to <strong>Universal Research and Accreditation</strong>, a premier global independent certification and auditing organization. We specialize in providing top-tier ISO certification services, ensuring your business meets international standards with ease and efficiency.

                                At Universal Research and Accreditation, our mission is to deliver assurance and inspire confidence in our clients by offering standards-based solutions tailored to their needs. Our comprehensive range of services includes Management System Certification, Compliance Auditing, Inspections, Product Certification, and Professional Training programs.

                                With a commitment to excellence and a team of seasoned experts, we empower businesses worldwide to achieve and maintain the highest standards of quality, safety, and sustainability. Trust Universal Research and Accreditation to be your partner in navigating the complexities of global compliance and certification.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12} sx={{ textAlign: "center", backgroundColor: "white", mt: { xs: 2, md: 4 }, p: { xs: 2, md: 7 } }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    fontSize: { xs: '1.5rem', md: '2rem' },
                                    '&:after': {
                                        content: '""',
                                        position: 'absolute',
                                        width: { xs: '50%', md: 'inherit' },
                                        height: '2px',
                                        bottom: '-5px',
                                        left: { xs: '25%', md: 'inherit' },
                                        backgroundColor: 'currentColor',
                                    },
                                }}
                            >
                                WHY WORK WITH US
                            </Typography>
                            <Typography variant="h6" sx={{ textAlign: { xs: "left", md: "left" }, mt: { xs: 2, md: 4 }, fontSize: { xs: '1rem', md: '1.3rem' } }}>
                                At Universal Research and Accreditation, we are committed to providing unparalleled ISO certification services that help your business achieve excellence. Here’s why you should choose us:
                            </Typography>
                            <Typography variant="body1" sx={{ textAlign: { xs: "left", md: "left" }, mt: { xs: 2, md: 3 }, fontSize: { xs: '0.875rem', md: '1.3rem' } }}>
                                <ol>
                                    <li><strong>Expertise and Experience: </strong>With years of experience in the field, our team of certified auditors and industry experts brings extensive knowledge and insight to ensure your certification process is smooth and efficient.</li>
                                    <li><strong>Global Recognition: </strong>From the initial consultation to the final certification, we provide continuous support and guidance to help you navigate the complexities of the certification process.</li>
                                    <li><strong>Integrity and Transparency:</strong>We uphold the highest standards of integrity and transparency in all our dealings. You can trust us to deliver honest, unbiased, and accurate assessments.</li>
                                    <li><strong>Customer-Centric Approach:</strong>Your satisfaction is our priority. We strive to build long-term relationships with our clients by offering exceptional service and ensuring your certification goals are met efficiently.</li>
                                </ol>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Footer/>
            </div>
        </>
    );
}
