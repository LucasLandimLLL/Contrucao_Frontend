'use client'
import React, { useEffect, useState } from 'react'
import apiFilmes from "@/app/apis/apifilmes";
import Pagina from "../../components/Pagina";
import { CardImg, Row, Col } from 'react-bootstrap';

export default function page(props) {
    console.log(props.params.id)
 
    const [filme, setfilme] = useState({})

    useEffect (() => {
    buscarFilmes()
  }, [])

    async function buscarFilmes(){
        const resultado = await apiFilmes.get("/movie/" + props.params.id + "?language=pt-BR")
        const filmeRecebido = resultado.data
        console.log(resultado.data)
        setfilme(filmeRecebido)
    }
return (
    
    <Pagina titulo={filme.title}>
        {filme.id && (
        <Row>
        
        {/*imagem do filme*/}
        <Col md={3}>
            <CardImg src={"https://image.tmdb.org/t/p/w500/" + filme.poster_path}></CardImg>
        </Col>

        {/*Detalhes do filme*/}
        <Col md={9}>
            <p><b>data de lançamento:</b> {filme.release_date}</p>
            <p><b>duração:</b> {filme.runtime}</p>
            <p><b>orçamento:</b> {filme.revenue}</p>
            <p><b>Nota:</b> {filme.vote_average}</p>
            <p><b>sinopse:</b> {filme.overview}</p>
            <p><b>Genero:</b></p>
            <ul>
                {filme.genres.map(item => {
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
