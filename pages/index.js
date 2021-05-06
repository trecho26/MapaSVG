import Head from "next/head";
import styles from "../styles/Home.module.css";
import "react-svg-map/lib/index.css";
import CardStates from "../Components/CardStates/CardStates";
import { CheckboxSVGMap, SVGMap } from "react-svg-map";
import mexico from "../Components/Mexico";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Proyecto prueba de Mapa Interactivo y Gráficos </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CardStates />

      {/* <div className="mapa2">
        <CheckboxSVGMap map={mexico} onChange={console.log} />
      </div> */}
    </div>
  );
}
