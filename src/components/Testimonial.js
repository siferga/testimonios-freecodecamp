import React from 'react';

function Testimonial() {
  return (
    <div className='container-testimonial'>
      <img 
      className='image-testimonial'
      src= {require('../images/testimonial-emma.png')}
      alt='Fotoemma'/>
      <div className='container-text-testimonial'>
        <p className='name-testimonial'>Emma Bostiar</p>
        <p className='profession-testimonial'>Ingeniera en Spotify</p>
        <p className='texto-testimonial'>"Siempre he tenido problemas para aprondre JavaScript. El realizar un curso de freeCodeCamp me ayudo a comprendrer et adquirir los conocimientos necesarios para mi trabajo como ingeniero de software en Spotify." </p>
      </div>    
    </div>
  
  );

}
export default Testimonial;