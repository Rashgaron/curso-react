import React, { Fragment } from "react";
import {obtenerProductosAction} from '../../actions/productosActions'
import {useDispatch} from 'react-redux'

const Sidebar = () => {

  const dispatch = useDispatch();
  const handleClick = e =>{
    dispatch(obtenerProductosAction(e))
    console.log(e)
  }
  return (
    <Fragment>
      
      <h1>Nuestros Productos </h1>
      <ul>
          <li>
              <a href='#' onClick={()=>handleClick('ALIMENTACION|PASTAS DE AZUCAR')} >Fondant</a>
          </li>
          <li>
              <a href='#' onClick={()=>handleClick('ALIMENTACION|AROMAS Y CONCENTRADOS|LIQUIDOS')}>Colorantes</a>
          </li>
          <li>
              <a href='#' onClick={()=>handleClick('MOLDES')} >Moldes</a>
          </li>
      </ul>
    </Fragment>
  );
};

export default Sidebar;
