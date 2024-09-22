import "../styles/footer/footer.css";
function FooterProject() {
  return (
    <>
      <div className="footer">
        <div className="footer-group">
          <h2>Serviços</h2>
          <ul>
            <li> Consultoria imobiliária </li>
            <li>avaliação de imóveis</li>
            <li>gestão de propriedades.</li>
          </ul>
        </div>
        <div className="footer-group">
          <h2>Políticas de Privacidade</h2>
          <p>
            Comprometemo-nos a proteger a sua privacidade
            <br /> e garantir a segurança dos seus dados.
          </p>
        </div>
        <div className="footer-group">
          <h2>Termos de Uso</h2>
          <p>
            Os serviços oferecidos estão sujeitos aos
            <br /> nossos termos e condições.
            <br />
            Consulte-nos para mais detalhes.
          </p>
        </div>
        <div className="footer-group">
          <h2>Desenvolvedores</h2>
          <ul>
            <li>Guilherme Nunes Silva</li>
            <li>Carlos Daniel Pereira</li>
            <li>Carlos Andre Santos</li>
          </ul>
        </div>
        <div className="footer-group">
          <h2>Contatos</h2>
          <p>Email: contato@nunezimobiliaria.com</p>
          <p>Telefone: (11) 98765-4321</p>
        </div>
        <div className="footer-group">
          <h2>Redes Sociais:</h2>
          <p>
            <a href="#">Facebook</a>
          </p>
          <p>
            <a href="#">Instagram</a>
          </p>
        </div>
      </div>
    </>
  );
}
export default FooterProject;
