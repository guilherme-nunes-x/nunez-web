import React, { Fragment } from "react";
import "./index.scss";

const Banner = () => {
  return (
    <Fragment>
      <div className="background">
        <div className="banner"></div>
        <div className="text">
          <div className="title">Projeto Nuñez</div>
          <div className="subtitle">Um projeto desenvolvido pelo tecnico</div>
          <div className="button">Saiba mais</div>
        </div>
      </div>
    </Fragment>
  );
};
export default Banner;
