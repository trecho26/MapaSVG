import Head from "next/head";
import styles from "../styles/Home.module.css";
import "react-svg-map/lib/index.css";
import CardStatesMexico from "../Components/CardStatesMexico/CardStates";
import CardStatesPeru from "../Components/CardStatesPeru/CardStates";
import CardStatesChile from "../Components/CardStatesChile/CardStates";
import CardStatesColombia from "../Components/CardStatesColombia/CardStates";
import { CheckboxSVGMap, SVGMap } from "react-svg-map";
import mexico from "../Components/Mexico";
import { useState } from "react";

export default function Home() {
  const [country, setCountry] = useState("mexico");
  return (
    <div className={styles.container}>
      <Head>
        <title> Proyecto prueba de Mapa Interactivo y Gráficos </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.btnContainer}>
        <button onClick={() => setCountry("mexico")}> Mexico </button>
        <button onClick={() => setCountry("peru")}> Peru </button>
        <button onClick={() => setCountry("colombia")}> Colombia </button>
        <button onClick={() => setCountry("chile")}> Chile </button>
      </div>
      {country === "mexico" && <CardStatesMexico />}
      {country === "chile" && <CardStatesChile />}
      {country === "peru" && <CardStatesPeru />}
      {country === "colombia" && <CardStatesColombia />}
    </div>
  );
}
