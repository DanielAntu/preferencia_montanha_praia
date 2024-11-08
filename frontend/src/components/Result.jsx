import React from "react";
import montanha from "../assets/montanha.jpg";
import praia from "../assets/praia.jpg";

import "./Result.css";

const Result = ({ preference, setIsData }) => {
    return (
        <div className="result">
            <p>Aqui Esta sua melhor opção para as férias!</p>
            <img
                src={preference === "Montanha" ? montanha : praia}
                alt={preference}
            />
            <p className="result-text">{preference}</p>
            <button onClick={() => setIsData(false)}>Voltar</button>
        </div>
    );
};

export default Result;
