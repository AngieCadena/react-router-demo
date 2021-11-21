// src/profesor.js

import React from "react";
import { Link, useParams } from "react-router-dom";
import {Card, Form, Container} from "react-bootstrap";

const Profesor = ({ data }) => {
  const { profesorId } = useParams();
  const profesor = data.find((p) => p.id === Number(profesorId));
  let profesorData;

  if (profesor) {
    profesorData = (
      <div>
       
        
        {/* <img src={"https://static.diariofemenino.com/media/13501/c/cartas-de-agradecimiento-a-un-profesor-o-profesora-gracias-por-todo-lg.jpg"} alt="imagenprofesor"/>
         */}
        <Container>
         <h3 className="h3-heading text-primary">
           {profesor.nombre} </h3>
        <p>{profesor.descripcion}</p>

          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Nombre del estudiante</Form.Label>
            <Form.Control type="text" placeholder="Nombre del estudiante" />
            </Form.Group>
  
          </Form>
        </Container>
      </div>
    );
  } else {
    profesorData = <h2> Lo sentimos, el profesor (a) que busca no existe </h2>;
  }

  return (
    <div>
      <div>{profesorData}</div>
    </div>
  );
};

export default Profesor;
