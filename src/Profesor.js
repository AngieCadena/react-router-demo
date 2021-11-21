// src/profesor.js

import React from "react";
import { Link, useParams } from "react-router-dom";
import {Card, Form, Container,  Button} from "react-bootstrap";

const Profesor = ({ data }) => {
  const { profesorId } = useParams();
  const profesor = data.find((p) => p.id === Number(profesorId));
  let profesorData;

  if (profesor) {
    profesorData = (
      <div>
       
        <Container>
         <h3 className="h3-heading text-primary">
           {profesor.nombre} </h3>
        <p>{profesor.descripcion}</p>
        <img src={"{profesor.nombre}"} alt="imagenprofesor"/>

          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Nombre del estudiante</Form.Label>
            <Form.Control type="text" placeholder="Nombre del estudiante" />
            </Form.Group>
            <Form.Label>Para las preguntas que se encuentran a continuacion, por favor califique de 1 a 5, teniendo en cuenta que 1 es totalmente en desacuerdo y 5 es totalmente de acuerdo.</Form.Label>
            <Form.Label>1. El profesor conoce y maneja los temas tratados en clase.</Form.Label>
            {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-5">
            <Form.Check
            inline
            label="--1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            />
            <Form.Check
             inline
             label="--2"
             name="group1"
             type={type}
             id={`inline-${type}-2`}
             />
            <Form.Check
             inline
             label="--3"
             type={type}
             id={`inline-${type}-3`}
             />
             <Form.Check
             inline
             label="--4"
             type={type}
             id={`inline-${type}-4`}
             />
             <Form.Check
             inline
             label="--5"
             type={type}
             id={`inline-${type}-5`}
             />
             </div>
  ))}
  <Form.Label>2. El profesor usa recursos diferentes para dar las explicaciones, tales como videos, presentaciones, actividades, etc..</Form.Label>
            {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-5">
            <Form.Check
            inline
            label="--1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            />
            <Form.Check
             inline
             label="--2"
             name="group1"
             type={type}
             id={`inline-${type}-2`}
             />
            <Form.Check
             inline
             label="--3"
             type={type}
             id={`inline-${type}-3`}
             />
             <Form.Check
             inline
             label="--4"
             type={type}
             id={`inline-${type}-4`}
             />
             <Form.Check
             inline
             label="--5"
             type={type}
             id={`inline-${type}-5`}
             />
    </div>
  ))}
  <Form.Label>3. El profesor genera espacios de debate en los que los estudiantes pueden expresarse libremente</Form.Label>
            {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-5">
            <Form.Check
            inline
            label="--1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            />
            <Form.Check
             inline
             label="--2"
             name="group1"
             type={type}
             id={`inline-${type}-2`}
             />
            <Form.Check
             inline
             label="--3"
             type={type}
             id={`inline-${type}-3`}
             />
             <Form.Check
             inline
             label="--4"
             type={type}
             id={`inline-${type}-4`}
             />
             <Form.Check
             inline
             label="--5"
             type={type}
             id={`inline-${type}-5`}
             />
    </div>
  ))}
   <Button type="submit">Enviar respuestas</Button>
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
