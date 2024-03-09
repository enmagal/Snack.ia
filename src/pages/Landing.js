import React from "react";
import Navbar from "../components/Navbar";

function Landing(props) {
  return (
    <div>
      <Navbar />
      <h1>
        Boostez vos ventes <br /> avec <em>Snack.ia</em>
      </h1>
      <p>
        Snack.ia propose une solution d'analyse de données alimentée par
        l'intelligence artificielle pour les restaurants. Obtenez des insights
        précis sur les ventes, les tendances de consommation et la rentabilité,
        afin d'optimiser vos performances et offrir une expérience culinaire
        exceptionnelle à vos clients
      </p>
      <div>
        <button>👋 Commencer gratuitement</button>
        <button>🚩 Nos clients</button>
      </div>
    </div>
  );
}

export default Landing;
