import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { Button, Container, Grid, Typography, Box, CircularProgress } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Footer from "./Footer";
import axios from 'axios';

export default function GetCertificate() {
    const [isoNo, setIsoNo] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');
    const [dateOfIssue, setDateOfIssue] = useState('');
    const [dateOfExpiry, setDateOfExpiry] = useState('');
    const [nameOfCertificate, setNameOfCertificate] = useState('');
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleVerifyClick = async () => {
        if (!isoNo.trim()) {
            setError('Please enter a certificate number.');
            setVerified(false);
            return;
        }

        setLoading(true);
        setError('');
        try {
            const response = await axios.get('http://localhost:8081/verify', {
                params: { certificateNo: isoNo }
            });

            if (response.data.verified) {
                setCompanyName(response.data.companyName);
                setCompanyAddress(response.data.companyAddress);
                setDateOfIssue(response.data.dateOfIssue);
                setDateOfExpiry(response.data.dateOfExpiry);
                setNameOfCertificate(response.data.nameOfCertificate);
                setVerified(true);
            } else {
                setVerified(false);
                setError('Certificate not found.');
            }
        } catch (error) {
            setVerified(false);
            setError('An error occurred while verifying the certificate.');
        } finally {
            setLoading(false);
            setIsoNo(''); // Clear the input field
        }
    };

    return (
        <>
            <div style={{ minHeight: '100vh', backgroundImage: 'url(/img/main.jpeg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12} sx={{ mt: 4, textAlign: "center" }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 'bold',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                                    mb: 3,
                                    mt: 3,
                                    fontSize: { xs: '1.5rem', md: '2.3rem' },
                                    letterSpacing: '0.05em',
                                }}
                            >
                                VERIFY CERTIFICATE
                            </Typography>
                            <Typography variant="h5">
                                To verify the certificate, please enter the certificate number.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Paper
                                component="form"
                                sx={{
                                    p: '2px 4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: '92%',
                                    borderRadius: '4px',
                                }}
                            >
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Enter ISO Certificate No."
                                    inputProps={{ 'aria-label': 'Enter ISO Certificate No.' }}
                                    value={isoNo}
                                    onChange={(e) => setIsoNo(e.target.value)}
                                />
                                <IconButton type="button" sx={{ p: '14px' }} aria-label="search" onClick={handleVerifyClick}>
                                    <SearchIcon />
                                </IconButton>
                                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            </Paper>
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <Button variant="contained" className="verifyBtn" sx={{ mt: 1.5 }} onClick={handleVerifyClick}>Verify</Button>
                        </Grid>

                        {loading && (
                            <Grid item xs={12} md={12} sx={{ mt: 4, textAlign: 'center' }}>
                                <CircularProgress />
                                <Typography variant="body1">Loading...</Typography>
                            </Grid>
                        )}

                        {verified && (
                            <Grid item xs={12} md={12} sx={{ mt: 4 }}>
                                <Box sx={{ p: 2, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '4px' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Certificate Verified!</Typography>
                                    <Typography variant="body1"><strong>Company Name:</strong> {companyName}</Typography>
                                    <Typography variant="body1"><strong>Address:</strong> {companyAddress}</Typography>
                                    <Typography variant="body1"><strong>Name of Certificate:</strong> {nameOfCertificate}</Typography>
                                    <Typography variant="body1"><strong>Date of Issue:</strong> {dateOfIssue}</Typography>
                                    <Typography variant="body1"><strong>Date of Expiry:</strong> {dateOfExpiry}</Typography>
                                    
                                </Box>
                            </Grid>
                        )}
                        {error && (
                            <Grid item xs={12} md={12} sx={{ mt: 4 }}>
                                <Box sx={{ p: 2, backgroundColor: 'rgba(255, 0, 0, 0.1)', borderRadius: '4px' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red' }}>Error</Typography>
                                    <Typography variant="body1">{error}</Typography>
                                </Box>
                            </Grid>
                        )}
                    </Grid>
                </Container>
            </div>
            <Footer />
        </>
    );
}
