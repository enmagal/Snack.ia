import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

function Landing(props) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center h-screen">
      <Navbar />
      <div className="flex-1 flex flex-col items-center pt-20">
        <h1 className="text-6xl font-bold">
          Boostez vos ventes <br /> avec{" "}
          <em className="text-green-500 not-italic">Snack.ia</em>
        </h1>
        <p className="w-2/3 my-10">
          Snack.ia propose une solution d'analyse de données alimentée par
          l'intelligence artificielle pour les restaurants. Obtenez des insights
          précis sur les ventes, les tendances de consommation et la
          rentabilité, afin d'optimiser vos performances et offrir une
          expérience culinaire exceptionnelle à vos clients
        </p>
        <div className="flex justify-around w-1/3">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow duration-300"
            on
            onClick={() => navigate("/connexion")}
          >
            👋 Commencer gratuitement
          </button>
          <button className="border-green-500 text-green-500 hover:border-green-700 font-bold hover:text-green-700 border-2 py-2 px-4 rounded  duration-300 shadow">
            🚩 Nos clients
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
