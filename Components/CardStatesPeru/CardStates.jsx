import React, { useState } from "react";
import Map from "../Map/Map";
import MexicoMap from "../MexicoMap/MexicoMap";
import PeruMap from "../PeruMap/PeruMap";
import styles from "./styles.module.css";
import Peru from "../Peru";

function CardStates() {
  const [selectedState, setselectedState] = useState({
    estado: "Seleccione un estado",
  });

  const dataObj = {
    Lima: {
      ciudades: [
        "Los Olivos",
        "Independencia",
        "Santa anita",
        "Salamanca",
        "San Borja",
        "Santiago de surco",
        "Chorrillos",
        "Barranco",
        "Cercado de lima",
        "Magdalena del mar",
        "San Miguel",
        "San Martin de Porres",
        "Callao",
        "Ate",
        "Miraflores",
        "San Isidro",
        "Surquillo",
        "La Molina",
        "La victoria",
        "Lince",
        "Breña",
        "Jesús Maria",
        "Pueblo libre",
        "San Luis",
      ],
    },
  };

  const selectState = (info) => {
    console.log(info);
    setselectedState({
      ...selectedState,
      estado: info.estado,
      ciudades: info.ciudades,
    });
  };

  return (
    <div className={styles.mapa}>
      <div className={styles.mapaHeader}>
        <h3>Nuestra cobertura</h3>
      </div>
      <div className={styles.mapaBody}>
        <div className={styles.infoMapa}>
          <h1>{selectedState.estado}</h1>
          {selectedState.ciudades && (
            <>
              <h3>Municipios con cobertura:</h3>
              <ul className={styles.citiesList}>
                {selectedState.ciudades.map((ciudad) => {
                  return (
                    <li className={styles.citiesItem} key={ciudad}>
                      {ciudad}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
        {/* <MexicoMap dataStates={dataObj} selectState={selectState} /> */}
        <PeruMap dataStates={dataObj} selectState={selectState} />
        {/* <Map dataStates={dataObj} selectState={selectState} svgFile={Peru} /> */}
      </div>
    </div>
  );
}

export default CardStates;
