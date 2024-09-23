import React, { Fragment } from "react";
import "./index.scss";

const Card = () => {
  return (
    <Fragment>
      <div className="cardContainer">
        <div className="img">
          <img src="https://images5.alphacoders.com/561/thumb-1920-561118.jpg" alt="" />
        </div>
        <div className="description">
          <div className="title">Apartamento alvoredo</div>
          <div className="subtitle">Espanha</div>
          <div className="price">R$ 100.000,00</div>
          <div className="button"><button>Detalhes</button></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
