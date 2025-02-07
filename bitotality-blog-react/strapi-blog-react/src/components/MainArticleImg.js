import React from "react";
import jumboImg from "../images/blockchain.png";
const MainArticleImg = () => {
  return (
    <div
      className="main-jumbo-img"
      style={{ background: `url(${jumboImg}) no-repeat`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}
    ></div>
  );
};

export default MainArticleImg;
