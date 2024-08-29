import React from "react";
import { useParams } from "react-router";
import Card9001 from "./Card9001";
import { Container, Grid } from "@mui/material";
import Card14001 from "./Card14001";
import Cemark from "./Cemark";
import Card13485 from "./Card13485";
import Card27001 from "./Card27001";
import Card22301 from "./Card22301";
import Card20000 from "./Card20000";
import Card50001 from "./Card50001";
import Card22000 from "./Card22000";
import HCard from "./HCard";
import Card45001 from "./Card45001";

export default function CardDeatils(){

    const {title} = useParams()

    // console.log({title},"QUALITY MANAGEMENT SYSTEM")

    const cardDetails = {
        // "ISO 9001 Certification": { description: <Card9001/>,  image: "/path/to/image2.jpg" },
        "ISO 9001 Certification": { description: <Card9001/> },
        "ISO 14001 Certification": { description: <Card14001/> },
        "CEMARK Certification" : {description: <Cemark/>},
        "ISO 13485 Certification" : {description: <Card13485/>},
        "ISO 27001 Certification" : { description: <Card27001/>},
        "ISO 50001 Certification":{description: <Card50001/>},
        "ISO 22301 Certification" : {description:<Card22301/>},
        "ISO 200000 Certification" : {description: <Card20000/>},
        "ISO 22000 Certification" : {description: <Card22000/>},
        "HACCP Certification" : { description: <HCard/>},
        "ISO 45001 Certification" : {description: <Card45001/>},
        

      };
    
      const details = cardDetails[title];
    
      if (!details) {
        return <div>Card not found</div>;
      }
    return( 
        <>
        {/* <div>
      <img src={details.image} alt={title} style={{ width: '100%' }} />
      <h1>{title}</h1>
      <p>{details.description}</p>
    </div> */}
    <Container>
        <Grid container >
            <Grid item xs={12} md={12} sx={{mt:7}}>
      {/* <img src={details.image} alt={title} style={{ width: '100%' }} /> */}
      <h1>{title}</h1>
      <p>{details.description}</p>
            </Grid>
        </Grid>
    </Container>
        </>
    )
}