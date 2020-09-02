import React from 'react';
import {useSelector} from 'react-redux'
import ListaCartas from '../cartas/ListaCartas'

const MisCartas = () => {

const misCartas = useSelector(state=>state.carta.cartasGuardadas)
console.log(misCartas)
    return ( <ListaCartas seccion='MisCartas'></ListaCartas> );
}
 
export default MisCartas;