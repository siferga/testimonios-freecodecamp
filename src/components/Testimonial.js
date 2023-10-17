import React from 'react';
import '../style/Testimonial.css';

function Testimonial(props) {
  return (
    <div className='container-testimonial'>
      <img 
      className='image-testimonial'
      src= {require(`../images/testimonial-${props}.png`)}
      alt='Fotoemma'/>
      <div className='container-text-testimonial'>
        <p className='name-testimonial'> <strong>{props.name}</strong>  en {props.country}</p>
        <p className='profesion-testimonial'><strong> {props.profesion}</strong>  en {props.company}</p>
        <p className='texto-testimonial'> "{props.testimonial}" </p>
      </div>    
    </div>
  
  );

}
export default Testimonial;