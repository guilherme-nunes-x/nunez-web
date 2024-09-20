import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import './styles/index.css';
import FooterProject from './components/footerProject'; 
import NavbaProject from './components/navbarProject';

function App() {
  const images = [
    { id: '1', Image: 'https://www.revistahabitare.com.br/wp-content/uploads/2017/08/residencia-espanhola-00.jpg', title: 'Residência Espanhola', desc: "Uma residência espanhola que mistura tradição e modernidade com sofisticação e charme." },
    { id: '2', Image: 'https://images.unsplash.com/photo-1655405927886-fd386df23a4c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'A Cidade ao Anoitecer', desc: 'Aprecie a beleza de uma cidade iluminada ao entardecer, com suas luzes e arquitetura marcantes.' },
    { id: '3', Image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'A Nova Arquitetura', desc: 'Uma estrutura moderna com linhas limpas e formas ousadas, redefinindo o conceito de espaço.' },
    { id: '4', Image: 'https://images.unsplash.com/photo-1588016291784-258be6d6f022?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'A Simplicidade', desc: 'Um espaço minimalista que combina simplicidade e elegância para criar um lar acolhedor.' },
    { id: '5', Image: 'https://images.unsplash.com/photo-1589629833710-00af2ddaf97a?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Uma Sinfonia Natural', desc: 'Um cenário natural sereno onde o verde e o azul se encontram, proporcionando um escape tranquilo' },
  ];

  return (
    <div className="App">
      <NavbaProject />
      <div className="inicio">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className='slide-content'>
                <img src={image.Image} className='slideImg' alt={`Slide ${image.id}`} />
                <div className='slide-text'>
                  <h2 className='slide-title'>{image.title}</h2>
                  {image.desc && <p className="slide-paragraph">{image.desc}</p>}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <FooterProject /> 
    </div>
  );
}

export default App;
