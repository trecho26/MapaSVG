import React, { useState } from "react";
import MexicoMap from "../MexicoMap/MexicoMap";
import styles from "./styles.module.css";

function CardStates() {
  const [selectedState, setselectedState] = useState({
    estado: "Seleccione un estado",
  });

  const dataObj = {
    Aguascalientes: {
      ciudades: [],
    },
    BajaCalifornia: {
      ciudades: [],
    },
    BajaCaliforniaSur: {
      ciudades: [],
    },
    Campeche: {
      ciudades: [],
    },
    Chiapas: {
      ciudades: [],
    },
    Chihuahua: {
      ciudades: [],
    },
    Coahuila: {
      ciudades: [],
    },
    Colima: {
      ciudades: [],
    },
    Durango: {
      ciudades: [],
    },
    Guanajuato: {
      ciudades: ["Celaya"],
    },
    Guerrero: {
      ciudades: [],
    },
    Hidalgo: {
      ciudades: ["Pachuca de Soto", "Mineral de la reforma"],
    },
    Jalisco: {
      ciudades: [
        "Guadalajara",
        "San Pedro Tlaquepaque",
        "Tlajomulco de Zúñiga",
        "Tonalá",
        "Zapopan",
      ],
    },
    CiudadDeMexico: {
      ciudades: [
        "Álvaro Obregón",
        "Azcapotzalco",
        "Benito Juárez",
        "Coyoacán",
        "Cuajimalpa de Morelos",
        "Cuauhtémoc",
        "Gustavo A. Madero",
        "Iztacalco",
        "Iztapalapa",
        "La Magdalena Contreras",
        "Miguel Hidalgo",
      ],
    },
    Mexico: {
      ciudades: [
        "Atizapán de Zaragoza",
        "Cuautitlán",
        "Cuautitlán Izcalli",
        "Ecatepec de Morelos",
        "Huixquilucan",
        "Metepec",
        "Naucalpan de Juárez",
        "Nezahualcóyotl",
        "Tlalnepantla de Baz",
        "Toluca",
        "Tultitlán",
      ],
    },
    Michoacan: {
      ciudades: [],
    },
    Morelos: {
      ciudades: ["Cuautla", "Cuernavaca", "Jiutepec", "Tepoztlán"],
    },
    Nayarit: {
      ciudades: [],
    },
    NuevoLeon: {
      ciudades: [
        "Monterrey",
        "San Nicolás de los Garza",
        "San Pedro Garza García",
        "Santa Catarina",
      ],
    },
    Oaxaca: {
      ciudades: [],
    },
    Puebla: {
      ciudades: [
        "Coronango",
        "Cuautlancingo",
        "Puebla",
        "San Andrés Cholula",
        "San Pedro Cholula",
      ],
    },
    Queretaro: {
      ciudades: [
        "Corregidora",
        "El Marqués",
        "Puebla",
        "Querétaro",
        "San juan del rio",
      ],
    },
    QuintanaRoo: {
      ciudades: [],
    },
    SanLuisPotosi: {
      ciudades: [],
    },
    Sinaloa: {
      ciudades: ["Culiacán"],
    },
    Sonora: {
      ciudades: [],
    },
    Tabasco: {
      ciudades: [],
    },
    Tamaulipas: {
      ciudades: [],
    },
    Tlaxcala: {
      ciudades: [],
    },
    Veracruz: {
      ciudades: [
        "Alvarado",
        "Boca del Rio",
        "Cordoba",
        "Fortin",
        "Orizaba",
        "Veracruz",
      ],
    },
    Yucatan: {
      ciudades: [],
    },
    Zacatecas: {
      ciudades: [],
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
        <MexicoMap dataStates={dataObj} selectState={selectState} />
      </div>
    </div>
  );
}

export default CardStates;
