import React, { Fragment } from 'react';
import './Header.css'

function Header({titulo}) {
return(
    <Fragment>
        <h1 className='titulo'>{titulo}</h1>

    </Fragment>



);
}


export default Header;