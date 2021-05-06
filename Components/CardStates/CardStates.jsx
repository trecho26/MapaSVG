import React, { useState } from "react";
import MexicoMap from "../MexicoMap/MexicoMap";
import styles from "./styles.module.css";

function CardStates() {
  const [selectedState, setselectedState] = useState({
    estado: "Seleccione un estado",
  });
  const dataObj = {
    Aguascalientes: 0,
    BajaCalifornia: 0,
    BajaCaliforniaSur: 0,
    Campeche: 0,
    Chiapas: 0,
    Chihuahua: 0,
    Coahuila: 0,
    Colima: 0,
    Durango: 0,
    Guanajuato: 0,
    Guerrero: 0,
    Hidalgo: 0,
    Jalisco: 0,
    CiudadDeMexico: 0,
    Mexico: 0,
    Michoacan: 0,
    Morelos: 0,
    Nayarit: 0,
    NuevoLeon: 0,
    Oaxaca: 0,
    Puebla: 0,
    Queretaro: 0,
    QuintanaRoo: 0,
    SanLuisPotosi: 0,
    Sinaloa: 0,
    Sonora: 0,
    Tabasco: 0,
    Tamaulipas: 0,
    Tlaxcala: 0,
    Veracruz: 0,
    Yucatan: 0,
    Zacatecas: 0,
  };
  const selectState = (info) => {
    setselectedState({
      ...selectedState,
      estado: info.estado,
      pedidos: info.pedidos,
    });
  };
  return (
    <div className={styles.mapa}>
      <div className={styles.mapaHeader}>
        <h3>Estados a donde más envias</h3>
      </div>
      <div className={styles.mapaBody}>
        <div className={styles.infoMapa}>
          <h1>{selectedState.estado}</h1>
          <h3>
            Pedidos: <span>{selectedState.pedidos}</span>
          </h3>
        </div>
        <MexicoMap dataStates={dataObj} selectState={selectState} />
      </div>
    </div>
  );
}

export default CardStates;
