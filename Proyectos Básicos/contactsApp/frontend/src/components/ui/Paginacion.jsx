import React from 'react'
const Paginacion = ({ pagina, guardarPagina, totalPaginas }) => {
  const handleButtonClick = num => {
    let nuevaPagina = pagina + num
    if (nuevaPagina >= 0 && nuevaPagina <= totalPaginas) guardarPagina(nuevaPagina)
  }
  return (
    <div className='row'>
      <div className='col justify-content-between d-flex'>
        <button className='btn' value='<' onClick={() => handleButtonClick(-1)}>
          <i className='fas fa-angle-left'></i>
        </button>

        <p>{pagina}/{totalPaginas}</p>
        <button className='btn' value='<' onClick={() => handleButtonClick(1)}>
          <i className='fas fa-angle-right'></i>
        </button>
      </div>
    </div>
  )
}

export default Paginacion
