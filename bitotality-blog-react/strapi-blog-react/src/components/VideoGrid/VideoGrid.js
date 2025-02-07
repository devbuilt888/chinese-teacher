import React from "react";
import VideoCard from "./VideoCard";
import ytLogo from "../../images/ytLogo.png";

const VideoGrid = () => {
  const videoData = [
    {
      id: "1",
      title: "¿Qué es Bitcoin? - Explicación corta",
      thumbnail: "https://img.youtube.com/vi/IxTENeJ3jkM/default.jpg",
      url: "https://www.youtube.com/watch?v=IxTENeJ3jkM",
    },
    {
      id: "2",
      title: "¿Qué es Changelly? - Plataforma de intercambio de cripto",
      thumbnail: "https://img.youtube.com/vi/xgHQOTHV2Sk/default.jpg",
      url: "https://www.youtube.com/watch?v=xgHQOTHV2Sk",
    },
    {
      id: "3",
      title: "¿Qué es POW (Proof of work)? - Explicación corta 2023",
      thumbnail: "https://img.youtube.com/vi/U8YTQzFc2Ck/default.jpg",
      url: "https://www.youtube.com/watch?v=U8YTQzFc2Ck",
    },
    {
      id: "4",
      title:
        "¿Cómo acceder a la Web3 desde Metamask? (Utilizar navegador web Metamask) 2023",
      thumbnail: "https://img.youtube.com/vi/ZQq1noCKH9c/default.jpg",
      url: "https://www.youtube.com/watch?v=ZQq1noCKH9c",
    },
    {
      id: "5",
      title: "¿Cómo enviar y recibir BNB en Metamask? 2023",
      thumbnail: "https://img.youtube.com/vi/n43-LEC3tnI/default.jpg",
      url: "https://www.youtube.com/watch?v=n43-LEC3tnI",
    },
    {
      id: "6",
      title: "¿Qué es Staking? - Explicación corta 2023",
      thumbnail: "https://img.youtube.com/vi/psOO2IlLcdg/default.jpg",
      url: "https://www.youtube.com/watch?v=psOO2IlLcdg",
    },
    {
      id: "7",
      title: "¿Qué es USDT? - Explicación corta 2023",
      thumbnail: "https://img.youtube.com/vi/du_xyL3DTR8/default.jpg",
      url: "https://www.youtube.com/watch?v=du_xyL3DTR8",
    },
    {
      id: "8",
      title:
        "¿Cómo crear una segunda cartera en la misma cuenta (Metamask)? 2023",
      thumbnail: "https://img.youtube.com/vi/7kz_seu_aMI/default.jpg",
      url: "https://www.youtube.com/watch?v=7kz_seu_aMI",
    },
    {
      id: "9",
      title: "¿Cómo agregar la red Polygon a Metamask? 2023",
      thumbnail: "https://img.youtube.com/vi/INO1dNCN0aQ/default.jpg",
      url: "https://www.youtube.com/watch?v=INO1dNCN0aQ",
    },
    {
      id: "10",
      title: "¿Qué es un Bridge (Puente), en cripto?",
      thumbnail: "https://img.youtube.com/vi/qysS5O1DoQw/default.jpg",
      url: "https://www.youtube.com/watch?v=qysS5O1DoQw",
    },
    {
      id: "11",
      title:
        "Cómo cambiar Ethereum a USDT en la Binance Smart Chain(BEP20)? Utilizando Metamask y la app Changely",
      thumbnail: "https://img.youtube.com/vi/2lARYr2IJ2U/default.jpg",
      url: "https://www.youtube.com/watch?v=2lARYr2IJ2U",
    },
    {
        id: "12",
        title:
          "¿Cómo añadir USDC (USD Coin) a la red Ethereum, en Metamask? 2023",
        thumbnail: "https://img.youtube.com/vi/Xcox9ce7Q6A/default.jpg",
        url: "https://www.youtube.com/watch?v=Xcox9ce7Q6A",
      },
      {
        id: "13",
        title:
          "¿Qué es Metamask? - Explicación larga 2023",
        thumbnail: "https://img.youtube.com/vi/8WiEroMUavQ/default.jpg",
        url: "https://www.youtube.com/watch?v=8WiEroMUavQ",
      },
      {
        id: "14",
        title:
          "¿Qué es una Blockchain? - Explicación corta 2023",
        thumbnail: "https://img.youtube.com/vi/A_Dur2-dFJE/default.jpg",
        url: "https://www.youtube.com/watch?v=A_Dur2-dFJE",
      },
      {
        id: "15",
        title:
          "¿Qué es Ethereum? - Explicación corta 2023",
        thumbnail: "https://img.youtube.com/vi/46QHQGDEHa4/default.jpg",
        url: "https://www.youtube.com/watch?v=46QHQGDEHa4",
      },
      {
        id: "16",
        title:
          "¿Qué es una layer-1? - Explicación corta 2023",
        thumbnail: "https://img.youtube.com/vi/dHNfFRDKSDI/default.jpg",
        url: "https://www.youtube.com/watch?v=dHNfFRDKSDI",
      },
      {
        id: "17",
        title:
          "¿Qué es POS (Proof of stake)? - Explicación corta",
        thumbnail: "https://img.youtube.com/vi/WRKicoCADxk/default.jpg",
        url: "https://www.youtube.com/watch?v=WRKicoCADxk",
      },
      {
        id: "18",
        title:
          "¿Cómo agregar USDT (ERC20), a la red Ethereum, en Metamask? 2023",
        thumbnail: "https://img.youtube.com/vi/tubUptk6hQE/default.jpg",
        url: "https://www.youtube.com/watch?v=tubUptk6hQE",
      },
      {
        id: "19",
        title:
          "¿Cómo añadir USDC (USD Coin) a la red BSC, en metamask? 2023",
        thumbnail: "https://img.youtube.com/vi/DeaYrvCYUsk/default.jpg",
        url: "https://www.youtube.com/watch?v=DeaYrvCYUsk",
      },
      {
        id: "20",
        title:
          "¿Cómo crear una cuenta y comprar una suscripción de Nord Vpn? 2023",
        thumbnail: "https://img.youtube.com/vi/tjaKRuCcYjc/default.jpg",
        url: "https://www.youtube.com/watch?v=tjaKRuCcYjc",
      },
      {
        id: "21",
        title:
          "¿Cómo enviar y recibir Ether en Metamask? 2023",
        thumbnail: "https://img.youtube.com/vi/bnB8c3jcuCQ/default.jpg",
        url: "https://www.youtube.com/watch?v=bnB8c3jcuCQ",
      },
      {
        id: "22",
        title:
          "¿Cómo enviar y recibir BNB en Metamask? 2023",
        thumbnail: "https://img.youtube.com/vi/n43-LEC3tnI/default.jpg",
        url: "https://www.youtube.com/watch?v=n43-LEC3tnI",
      },
      {
        id: "23",
        title:
          "¿Cómo enviar y recibir USDT BEP20 en Metamask? 2023",
        thumbnail: "https://img.youtube.com/vi/sB-Tc4Dc6PE/default.jpg",
        url: "https://www.youtube.com/watch?v=sB-Tc4Dc6PE",
      },
      {
        id: "24",
        title:
          "¿Cómo acceder a la Web3 desde Metamask? (Utilizar navegador web Metamask) 2023",
        thumbnail: "https://img.youtube.com/vi/ZQq1noCKH9c/default.jpg",
        url: "https://www.youtube.com/watch?v=ZQq1noCKH9c",
      },
      {
        id: "25",
        title:
          "¿Cómo crear una segunda cartera en la misma cuenta (Metamask)? 2023",
        thumbnail: "https://img.youtube.com/vi/7kz_seu_aMI/default.jpg",
        url: "https://www.youtube.com/watch?v=7kz_seu_aMI",
      },
      {
        id: "26",
        title:
          "¿Cómo cambiar BNB a USDT (BEP20) en Metamask? 2023",
        thumbnail: "https://img.youtube.com/vi/pqqhbmJp_TQ/default.jpg",
        url: "https://www.youtube.com/watch?v=pqqhbmJp_TQ",
      },
      {
        id: "27",
        title:
          "¿Cómo incluir la BSC (BINANCE SMART CHAIN) en Metamask en un teléfono? 2023",
        thumbnail: "https://img.youtube.com/vi/Y8Yh6NKGbrY/default.jpg",
        url: "https://www.youtube.com/watch?v=Y8Yh6NKGbrY",
      },
      {
        id: "28",
        title:
          "¿Cómo comprar Ether/BNB desde Metamask utilizando Moon pay/Wyre (aplicable a otras criptomonedas)?",
        thumbnail: "https://img.youtube.com/vi/db1U9SDBtgA/default.jpg",
        url: "https://www.youtube.com/watch?v=db1U9SDBtgA",
      },
      {
        id: "29",
        title:
          "¿Cómo agregar USDT BEP20 en la cartera de BINANCE SMART CHAIN en Metamask? 2023",
        thumbnail: "https://img.youtube.com/vi/mnmpRUYffgE/default.jpg",
        url: "https://www.youtube.com/watch?v=mnmpRUYffgE",
      },
      {
        id: "30",
        title:
          "¿Cómo descargar y crear una cartera en Metamask en iphone? 2023",
        thumbnail: "https://img.youtube.com/vi/62nTN13ZCG4/default.jpg",
        url: "https://www.youtube.com/watch?v=62nTN13ZCG4",
      },
    // Add more video objects as needed
  ];

  return (
    <div className="video-grid">
      <img className="yt-logo" src={ytLogo} />

      <h1 className="video-grid-title">Videos en Español</h1>
      {videoData.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoGrid;
