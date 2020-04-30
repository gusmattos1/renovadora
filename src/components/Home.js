import React from "react";

import Logo from "../assets/Logo.png";
import WhatsIcon from "../assets/icon-whatsapp.png";
import CarImage from "../assets/car1.png";

const Header = () => (
  <div
    style={{
      width: "90%",
      height: "218px",
      backgroundColor: "#373737",
      display: "flex",
      padding: "0 5%",
    }}
  >
    <div style={{ width: "20%" }}>
      <img src={Logo} alt="logo" style={{ margin: 10 }} />
    </div>
    <div
      style={{
        color: "white",
        fontSize: 27,
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <div>Atendimento via WhatsApp</div>
      <div style={{ marginTop: 10, display: "flex", alignItems: "center" }}>
        Clique Aqui
        <img
          src={WhatsIcon}
          alt="whatsapp icon"
          style={{ width: 31, height: 31, marginLeft: 10 }}
        />
      </div>
      <br />
    </div>
  </div>
);

const Body = () => (
  <div
    style={{
      backgroundImage: `url(${CarImage})`,
      maxWidth: 1080,
      width: "100%",
      height: 325,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      margin: "auto",
      display: "flex",
      alignItems: "center",
      marginTop: 64,
    }}
  >
    <div style={{ fontSize: "36px", color: "white", marginLeft: "5%", width: 430 }}>
      Serviço rápido, profissional e de confiança
    </div>
  </div>
);

const Home = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Header />
      <Body />
    </div>
  );
};

export default Home;
