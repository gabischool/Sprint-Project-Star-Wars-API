import React from "react";

import { Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Col } from 'reactstrap';



export default function CharacterCard(props) {

    console.log("props", props )

    const { birth_year,gender,height, name} = props.person

    return (

      <Col xs="12">
        <Card className="people">
         <CardBody>
            <CardTitle tag="h5">{name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">gender:{gender}-
             birth_year: {birth_year}</CardSubtitle>
            <CardText>{height}</CardText>
         </CardBody>
        </Card>
    
       </Col>
    );
  

}