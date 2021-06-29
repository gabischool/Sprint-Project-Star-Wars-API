import React from "react";
import {LInk} from "react-router-dom"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col } from 'reactstrap';


export default function MovieCard(props) {

    console.log("props", props)

    const { director,release_date,title, producer} = props.film

    return (

        <Col xs="6">
        <Card>
         <CardBody>
            <CardTitle tag="h5">{title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Direcor:{director}-
             Release Date: {release_date}</CardSubtitle>
            <CardText>{producer}</CardText>
         </CardBody>
        </Card>
      </Col>
    );
  

}