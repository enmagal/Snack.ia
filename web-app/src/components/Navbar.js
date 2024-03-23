import React from "react";

function Navbar(props) {
  return (
    <div className="w-screen flex justify-between items-center pt-6 pb-6">
      <div className="flex justify-between w-1/3 pl-6 items-center">
        <p className="text-2xl font-bold">Snack.ia</p>
        <a className="text-gray-400 hover:text-gray-700" href="#">
          Nos clients
        </a>
        <a className="text-gray-400 hover:text-gray-700" href="#">
          Fonctionnalités
        </a>
        <a className="text-gray-400 hover:text-gray-700" href="#">
          Prix
        </a>
      </div>
      <div>
        <button className="hover:text-green-500">Connexion</button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-6">
          Essai gratuit
        </button>
      </div>
    </div>
  );
}

export default Navbar;
