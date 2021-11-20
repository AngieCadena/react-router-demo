// src/profesor.js

import React from "react";
import { useParams } from "react-router-dom";

const Profesor = ({ data }) => {
  const { profesorId } = useParams();
  const profesor = data.find((p) => p.id === Number(profesorId));
  let profesorData;

  if (profesor) {
    profesorData = (
      <div>
        <h3> {profesor.name} </h3>
        <p>{profesor.description}</p>
        <hr />
        <h4>{profesor.status}</h4>
      </div>
    );
  } else {
    profesorData = <h2> Sorry. profesor doesn't exist </h2>;
  }

  return (
    <div>
      <div>{profesorData}</div>
    </div>
  );
};

export default Profesor;
