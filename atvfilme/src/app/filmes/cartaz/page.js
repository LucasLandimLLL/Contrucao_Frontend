'use client'

import React, { useEffect, useState } from 'react'
import { Button, Card,CardFooter,Col, Row } from 'react-bootstrap'
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
      <Row md={4}>
        {filmes.map(filmes => {
          return (
          <Col className='py-2'>

            <Card style={{height: '100%'}}>

              <Card.Img src={"https://image.tmdb.org/t/p/w500/" + filmes.poster_path }/>
                <Card.Body>
                  <Card.Title>{filmes.original_title}</Card.Title>
                  <p><b>nota :</b> {filmes.vote_average} ⭐</p>
                  </Card.Body>
                  <CardFooter className='text-end'>
                    <Button href={'/filmes/' + filmes.id}>Detalhes</Button>
                  </CardFooter>
            </Card>
          </Col>
          )})}
      </Row>

    </Pagina>
  )
}
