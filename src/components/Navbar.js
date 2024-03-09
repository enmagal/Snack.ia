import React from "react";

function Navbar(props) {
  return (
    <div>
      <p>Snack.ia</p>
      <a href="#">Nos clients</a>
      <a href="#">Fonctionnalités</a>
      <a href="#">Prix</a>
      <div>
        <button>Connexion</button>
        <button>Essai gratuit</button>
      </div>
    </div>
  );
}

export default Navbar;
