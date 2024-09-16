"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, CardImg } from 'react-bootstrap';

const UserDetails = ({ params }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/users/${params.id}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, [params.id]);

  if (!user) return <div>Loading...</div>;

  return (
    <Container>
      <h1>{user.firstName} {user.lastName}</h1>
      <Row>
        <Col md={3}>
          <CardImg src={user.image} />
        </Col>
        <Col md={9}>
          <p><b>Primeiro nome:</b> {user.firstName}</p>
          <p><b>Último Nome:</b> {user.lastName}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Telefone:</b> {user.phone}</p>
          <p><b>genero:</b> {user.gender}</p>
          <p><b>Idade:</b> {user.age}</p>
          <p><b>Data de Aniversario:</b> {user.birthDate}</p>
          <p><b>universidade:</b> {user.university}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetails;
