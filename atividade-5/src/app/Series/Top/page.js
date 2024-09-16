"use client"

import { useEffect, useState } from "react"
import apiSeries from "../../../../apis/apiSeries"
import Pagina from "@/app/components/Pagina"
import { Button, Card, Col, Row } from "react-bootstrap"

export default function page() {

  const [series, setSeries] = useState([])

  useEffect(() => {
    buscarSeries()
  }, [])

  async function buscarSeries() {
    const resultado = await apiSeries.get('/tv/top_rated?language=pt-BR')
    const seriesRecebidas = resultado.data.results
    console.log(seriesRecebidas)
    setSeries(seriesRecebidas)
  }

  return (
    <Pagina titulo='Series Populares'>
      <Row md={4}>
        {series.map(series => {
          return (
            <Col className='py-2'>
              <Card style={{ height: '100%'}}>
                <Card.Img src={"https://image.tmdb.org/t/p/w500/" + series.poster_path}/>
                <Card.Body>
                  <Card.Title>{series.name}</Card.Title>
                  <p><b>Nota: </b>{series.vote_average}⭐</p>
                </Card.Body>
                <Card.Footer className="text-end">
                  <Button href={'/Series/' + series.id}>Detalhes</Button>
                </Card.Footer>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Pagina>
  )
}
