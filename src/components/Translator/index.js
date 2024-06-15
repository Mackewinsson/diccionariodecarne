import React, { useState } from "react";
import { meatCuts } from "../../db/db";

export const Translator = () => {
  const [fromCountry, setFromCountry] = useState("");
  const [toCountry, setToCountry] = useState("");
  const [meatCut, setMeatCut] = useState("");
  const [translatedCut, setTranslatedCut] = useState("");

  function translateMeatCut(fromCountry, toCountry, meatCut) {
    const fromCountryCuts = meatCuts[fromCountry];
    if (!fromCountryCuts) {
      return `País de origen "${fromCountry}" no encontrado.`;
    }

    const cutTranslation = fromCountryCuts[meatCut];
    if (!cutTranslation) {
      return `Corte "${meatCut}" no encontrado en "${fromCountry}".`;
    }

    const toCountryCuts = meatCuts[toCountry];
    if (!toCountryCuts) {
      return `País de destino "${toCountry}" no encontrado.`;
    }

    const translatedCut = toCountryCuts[cutTranslation];

    if (!translatedCut) {
      return `Traducción para el corte "${meatCut}" de "${fromCountry}" a "${toCountry}" no encontrada.`;
    }

    return translatedCut;
  }

  const handleTranslate = () => {
    const translation = translateMeatCut(fromCountry, toCountry, meatCut);
    setTranslatedCut(translation);
  };

  const handleFromCountryChange = (selectedCountry) => {
    setFromCountry(selectedCountry);
    setMeatCut("");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="flex flex-col items-center">
        <label htmlFor="fromCountry">1. Elije un país</label>
        <select
          id="fromCountry"
          className="menu bg-base-200 rounded-box w-full max-w-xs mt-4"
          value={fromCountry}
          onChange={(e) => handleFromCountryChange(e.target.value)}
        >
          <option value="">Selecciona un país</option>
          {Object.keys(meatCuts).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      {fromCountry && (
        <div className="flex flex-col items-center mt-4">
          <label htmlFor="meatCut">2. Nombre del corte</label>
          <select
            id="meatCut"
            className="menu bg-base-200 rounded-box w-full max-w-xs mt-4"
            value={meatCut}
            onChange={(e) => setMeatCut(e.target.value)}
          >
            <option value="">Selecciona un corte</option>
            {Object.keys(meatCuts[fromCountry]).map((cut) => (
              <option key={cut} value={cut}>
                {cut}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="flex flex-col items-center mt-4">
        <label htmlFor="toCountry">3. Elije país a traducir</label>
        <select
          id="toCountry"
          className="menu bg-base-200 rounded-box w-full max-w-xs mt-4"
          value={toCountry}
          onChange={(e) => setToCountry(e.target.value)}
        >
          <option value="">Selecciona un país</option>
          {Object.keys(meatCuts).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      {translatedCut && (
        <div className="chat chat-start mt-4">
          <div className="chat-bubble chat-bubble-accent">
            Traducción: {translatedCut}
          </div>
        </div>
      )}
      <button className="btn mt-4" onClick={handleTranslate}>
        Traducir
      </button>
    </main>
  );
};
