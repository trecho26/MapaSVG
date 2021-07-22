import React, { useState } from "react";
import styles from "./styles.module.css";
import ColombiaMap from "../ColombiaMap/ColombiaMap";

function CardStates() {
  const [selectedState, setselectedState] = useState({
    estado: "Seleccione un estado",
  });

  const dataObj = {
    Bogota: {
      ciudades: ["Bogotá"],
    },
    Cundinamarca: {
      ciudades: ["Soacha", "Chía"],
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

        <ColombiaMap dataStates={dataObj} selectState={selectState} />
      </div>
    </div>
  );
}

export default CardStates;
