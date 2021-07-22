import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Colombia from "../Colombia";

const Tooltip = ({ info }) => {
  return (
    <div
      id="tooltip"
      style={{
        display: "none",
        position: "absolute",
        background: "#e1e1e1",
        width: "fit-content",
        height: "50px",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        borderRadius: "10px",
      }}
    >
      <span>{info}</span>
    </div>
  );
};

function ColombiaMap({ dataStates, selectState }) {
  const [data, setData] = useState({});
  const [dataTooltip, setDataTooltip] = useState("");
  const svgEl = useRef(null);

  useEffect(() => {
    setData(dataStates);
    const svgPaths = svgEl.current.children;
    Array.from(svgPaths).forEach((path) => {
      path.addEventListener("mouseenter", cargarInfoToolTip);
      path.addEventListener("mousemove", mostrarToolTip);
      path.addEventListener("mouseleave", ocultarToolTip);
    });
  }, []);

  const handleSelectState = (e) => {
    if (data[e.target.id]?.ciudades.length > 0) {
      const svgPaths = svgEl.current.children;
      Array.from(svgPaths).forEach((path) => {
        path.style.opacity = "1";
        path.style.stroke = "#fff";
        if (path.ariaLabel !== e.target.ariaLabel) {
          path.style.opacity = "0.3";
        } else {
          path.style.stroke = "#000";
        }
      });
      const infoState = {
        estado: e.target.ariaLabel,
        ciudades: data[e.target.id].ciudades,
      };
      selectState(infoState);
    }
  };

  const mostrarToolTip = (e) => {
    document.getElementById("tooltip").style.display = "flex";
    document.getElementById("tooltip").style.top = `${e.clientY - 60}px`;
    document.getElementById("tooltip").style.left = `${e.clientX}px`;
  };

  const ocultarToolTip = (e) => {
    document.getElementById("tooltip").style.display = "none";
  };

  const cargarInfoToolTip = (e) => {
    setDataTooltip(e.target.ariaLabel);
  };

  const getColor = (estado) => {
    let cssStyle = "";
    if (estado?.ciudades.length > 0) {
      cssStyle = "medium";
    } else {
      cssStyle = "normal";
    }

    return cssStyle;
  };

  return (
    <>
      <Tooltip info={dataTooltip} />
      <svg
        role="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1195"
        width="1150"
        height="725"
        className={styles.svg}
        ref={svgEl}
      >
        {Colombia.locations.map((estado) => {
          return (
            <path
              onClick={handleSelectState}
              key={estado.id}
              d={estado.path}
              aria-label={estado.name}
              id={estado.objKey ? estado.objKey : estado.name}
              className={`${
                styles[
                  getColor(data[estado.objKey ? estado.objKey : estado.name])
                ]
              } ${styles.state}`}
            ></path>
          );
        })}
      </svg>
    </>
  );
}

export default ColombiaMap;
