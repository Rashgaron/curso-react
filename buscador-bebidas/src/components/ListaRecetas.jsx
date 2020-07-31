import React,{useContext,Fragment} from 'react';
import {RecetasContext} from '../context/RecetasContext'
import Receta from './Receta'
const ListaRecetas = () => {

    // extraer las recetas
    const {recetas} = useContext(RecetasContext)
    return (<Fragment>
<div className='row mt-5'>
    {recetas.map(receta=>(
        <Receta key={receta.idDrink} info={receta}></Receta>
    ))}
</div>
    </Fragment>
         );
}
 
export default ListaRecetas;