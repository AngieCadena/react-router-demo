import React from "react";
import { Link } from "react-router-dom";
import {Card} from "react-bootstrap";


const Profesor = ({Profesor}) => {
    return(
        <Card className="my-3 p-3 rounded">
            <Link to={`/Profesor/${Profesor._id}`}>
                <Card.Img src={`${Profesor.image}`} variant ="top"/>
            </Link>
            <Card.Text as= "h3">${Profesor.descripcion}</Card.Text>
        </Card>


  );
};

export default Profesor;