import React, { Fragment } from "react";
import "./index.scss";
import Card from "../../components/Card";
const Home = () => {
    let Cards = [];
    for (let i = 0; i < 4; i++) {
      Cards.push(<Card />);
    }
    return (
    <Fragment>
      <div className="productsHeader">
        <span className="title">Compre novas propriedades</span>
      </div>
      <div className="productsCards">
        {Cards}
      </div>
    </Fragment>
  );
};

export default Home;
