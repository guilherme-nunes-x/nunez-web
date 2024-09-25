import React, { Fragment } from "react";
import "./index.scss";
import TopBanner from "../../components/TopBanner";

const Imobi = () => {
  return (
    <Fragment>
      <TopBanner />
      <div className="Main">
        <div className="Left">
          <div className="Thumb">
            <img src="https://wallpaperaccess.com/full/2526988.jpg" alt="" />
          </div>
          <div className="Description">
            <h2>Apartamento alvoredo</h2>
            <p>
              Lorem ipsum ornare semper hendrerit ullamcorper conubia mollis
              eros, a consequat netus venenatis tempus hac arcu nostra ultrices,
              cubilia maecenas porta purus aliquam nunc tristique.
              Lorem ipsum ornare semper hendrerit ullamcorper conubia mollis
              eros, a consequat netus venenatis tempus hac arcu nostra ultrices,
              cubilia maecenas porta purus aliquam nunc tristique.
            </p>
          </div>
        </div>
        <div className="Right">
          <div className="Profile">
            <div className="ProfileTop">
              <div className="ProfileImg">
                <img
                  src="https://th.bing.com/th/id/OIP.ED1s_EBJoe_u_H3hPAAEVwHaHa?rs=1&pid=ImgDetMain"
                  alt=""
                />
              </div>
              <div className="ProfileDescription">
                <h2>Nelson Samuel da Mota</h2>
                <p>Descrição do usuário</p>
              </div>
            </div>
            <div className="ProfileContacts">
              <h2>Informações de contato</h2>
              <p>(66) 98899-6699</p>
              <p>nelson_samuel_damota@unicamp.br</p>
            </div>
            <div className="ProfileContactsForm">
              <h2>Fale conosco</h2>
              <form>
                <input
                  type="text"
                  placeholder="Nome"
                  name="nome"
                  required
                ></input>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  required
                ></input>
                <textarea placeholder="Mensagem" name="msg" required></textarea>
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Imobi;
