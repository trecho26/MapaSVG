import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mapa interactivo de cobertura. Made with ❤ by 99minutos</title>
        <meta
          name="Description"
          content="Mapa interactivo de la cobertura nacional de 99 minutos en México. Author: Trecho26"
        />
        <meta
          name="keywords"
          content="mapa, mapa interactivo, cobertura, mapa de cobertura, mapa cobertura 99 minutos, 99 minutos, trecho26, mapa nacional de cobertura"
        />
        <meta
          name="google-site-verification"
          content="hz9audIU5xHEJjlEPLCxseiqJ3MyCj_yx704PJr0yCU"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
