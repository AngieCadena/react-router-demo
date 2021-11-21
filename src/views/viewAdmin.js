import React from "react";
import {Row, Col} from "react-bootstrap";
import Profesores from "../Profesores";
import Profesor from "../components/Profesor";

const viewAdmin = () => {
    return (
        <>
        <h1> Profesores disponibles para evaluaCión</h1>
        <Row>
            {Profesores.map((profesor)=> (
                <Col key={profesor._id} sm={15} md={5} lg={3} xl={8}>
                <Profesor profesor={profesor}/>
                </Col>
            ))}
        </Row>
        </>
    )

};
export default viewAdmin;
