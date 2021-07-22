import React, { useState } from "react";
import Chile from "../Chile";
import Map from "../Map/Map";
import styles from "./styles.module.css";

function CardStates() {
  const [selectedState, setselectedState] = useState({
    estado: "Seleccione un estado",
  });

  const dataObj = {
    Santiago: {
      ciudades: ["Active"],
    },
    Lampa: {
      ciudades: ["Active"],
    },
    Buin: {
      ciudades: ["Active"],
    },
  };

  const dataObjNew = Chile.locations.map((location) => {
    return location.objKey;
  });

  console.log(dataObjNew);

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
        <Map dataStates={dataObj} selectState={selectState} svgFile={Chile} />
      </div>
    </div>
  );
}

export default CardStates;
