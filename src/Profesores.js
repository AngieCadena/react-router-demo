// src/Products.js

import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Profesor from "./Profesor";

const Profesores = ({ match }) => {
  const profesorData = [
    {
      id: 1,
      name: "NIKE Liteforce Blue Sneakers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status: "Available",
    },
    {
      id: 2,
      name: "Stylised Flip Flops and Slippers",
      description:
        "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
      status: "Out of Stock",
    },
    {
      id: 3,
      name: "ADIDAS Adispree Running Shoes",
      description:
        "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
      status: "Available",
    },
    {
      id: 4,
      name: "ADIDAS Mid Sneakers",
      description:
        "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
      status: "Out of Stock",
    },
  ];

  const { url } = useRouteMatch();

  /* Create an array of `<li>` items for each product */
  const linkList = profesorData.map((profesor) => {
    return (
      <li key={profesor.id}>
        <Link to={`${url}/${profesor.id}`}>{profesor.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <div>
        <div>
          <h3>Profesores</h3>
          <ul>{linkList}</ul>
        </div>
      </div>

      <Route path={`${url}/:profesorId`}>
        <Profesor data={profesorData} />
      </Route>
      <Route exact path={url}>
        <p>Please select a profesor.</p>
      </Route>
    </div>
  );
};
export default Profesores;
