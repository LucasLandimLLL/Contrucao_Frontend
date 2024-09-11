'use client'

import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import apiFilmes from '../apis/apifilmes'
import Pagina from '../components/Pagina'

export default function page() {

  const [filmes, setFilmes] = useState([]) 

  //fazer algo quando iniciar o componente
  useEffect(() => {
    //buscar os Filmes
    buscarFilmes()
  }, []) 

  async function buscarFilmes(){
    const resultado = await apiFilmes.get("/movie/popular?language=pt-BR")
    console.log(resultado.data.results)
    const filmesRecebidos = resultado.data.results
    setFilmes(filmesRecebidos)

  }

  return (
    <Pagina titulo="Filmes">
      <Row>
        {filmes.map(filmes => {
          return (
            <Col>
              <p>{filmes.original_title}</p>
            </Col>
          )})}
      </Row>

    </Pagina>
  )
}
