import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
function App() {
  const images = [
    { id: '1', Image: 'https://www.revistahabitare.com.br/wp-content/uploads/2017/08/residencia-espanhola-00.jpg', desc: 'Descrição' },
    { id: '2', Image: 'https://images.unsplash.com/photo-1655405927886-fd386df23a4c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '3', Image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '4', Image: 'https://images.unsplash.com/photo-1588016291784-258be6d6f022?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '5', Image: 'https://images.unsplash.com/photo-1589629833710-00af2ddaf97a?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  return (
    <div className="App">
      <div className="inicio">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <img src={image.Image} className='slideImg' alt={`Slide ${image.id}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default App;
