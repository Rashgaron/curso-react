import React from 'react'

const Footer = ({fecha}) => {
    return ( 
        <footer>
            <p>Todos los derechos reservados</p>
            <p>El año actual es: {fecha}</p>
        </footer>
     );
};
 
export default Footer;