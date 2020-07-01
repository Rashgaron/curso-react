import React, { Fragment } from 'react'
import styled from '@emotion/styled'

const Caja = styled.div`
  background-color: red;
  border-radius: 10px;
  text-align: center;
`

const Box = ({ mensaje }) => {
  return (
    <Fragment>
      <div className='row justify-content-center'>
        <Caja className='col col-4 '>
          <p>{mensaje}</p>
        </Caja>
      </div>
    </Fragment>
  )
}

export default Box
