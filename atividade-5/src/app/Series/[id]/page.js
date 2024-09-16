'use client'

import Pagina from "@/app/components/Pagina"
import apiSeries from "../../../../apis/apiSeries"
import { useEffect, useState } from "react"
import { CardImg, Col, Row } from "react-bootstrap"

export default function page(props) {

    const [serie, setSerie] = useState([])

    useEffect(() => {
        buscarSerie()
    }, [])

    async function buscarSerie(){
        const resultado = await apiSeries.get('/tv/' + props.params.id + '?language=pt-BR')
        const serieRecebida = resultado.data
        console.log(resultado.data)
        setSerie(serieRecebida)
    }

  return (
    <Pagina titulo={serie.name}>
        {serie.id && (
            <Row>
                <Col md={3}>
                    <CardImg src={"https://image.tmdb.org/t/p/w500/" + serie.poster_path}/>
                </Col>
                <Col md={9}>
                    <p><b>Titulo: </b>{serie.name}</p>
                    <p><b>Lançamento: </b>{serie.first_air_date}</p>
                    <p><b>Nota: </b>{serie.vote_average}</p>
                    <p><b>Temporadas: </b>{serie.number_of_seasons
                    }</p>
                    <p><b>Episódios: </b>{serie.number_of_episodes}</p>
                    <p><b>Sinopse: </b>{serie.overview}</p>
                    <p><b>Generos: </b></p>
                    <ul>
                        {serie.genres.map(item => {
                            return (
                                <li>{item.name}</li>
                            )
                        })}
                    </ul>
                </Col>
            </Row>
        )}
    </Pagina>
  )
}
