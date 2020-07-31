import React from 'react';
const Receta = ({info}) => {
    return ( <div className='col-md-4 mb-3'>
        <div className='card'>
<h2 className='card-header'>{info.strDrink}</h2> 
<img className='card-img-top' src={info.strDrinkThumb} alt={`Imagen de ${info.strDrink}`}></img>
       <div className='card-body'>
           <<<<
               
               
               
               
               
       </div>
        </div>
    </div>);
}
 
export default Receta;