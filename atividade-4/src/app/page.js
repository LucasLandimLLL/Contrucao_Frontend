"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(response => {
        setUsers(response.data.users);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <Container>
      <h1>Lista de Usuários</h1>
      <Row>
        {users.map(user => (
          <Col key={user.id} md={4} className="mb-4">
            <Link href={`/${user.id}`} passHref>
              <Card as="a">
                <Card.Img variant="top" src={user.image} />
                <Card.Body>
                  <Card.Title>Nome: {user.firstName} {user.lastName}</Card.Title>
                  <Card.Text>Idade: {user.age}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserList;
