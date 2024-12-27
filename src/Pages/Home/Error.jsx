import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-404-container">
      <h2 className="error-404-title"> 404</h2>
        <h2 className="error-404-title">Oups... 🙊 Page non trouvée !</h2>
      <p className="error-404-text">
      La page que vous recherchez n'existe pas.
      </p>
      <NavLink to="/" className="error-404-link">
      Aller à la page d'accueil
      </NavLink>
    </div>
  );
};

export default Error;
