"use client";

import Pagina from "@/components/Pagina";
import { useState } from "react";
import { Button, Container, Form, Modal, Row } from "react-bootstrap";

const taxaConversao = {
  dolar: 0.2,
  euro: 0.18,
  bitcoin: 0.000003,
};

function CambistaPage() {
  const [showModal, setShowModal] = useState(false);
  const [moeda, setMoeda] = useState("");
  const [real, setReal] = useState(0);
  const [resultado, setResultado] = useState(0);

  function converter() {
    const valorConvertido = real * taxaConversao[moeda];
    setResultado(
      valorConvertido.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
    );
    setShowModal(true);
  }

  function limpar() {
    setReal(0.0);
    setMoeda("");
    setResultado(0);
  }

  return (
    <Pagina titulo="Conversor de Moedas">
      <Container className="py-2 text-center w-25">

      </Container>
      <Form>
        <Row md={2}>
          <Container>
            <Form.Group className="mb-3">
              <Form.Label>Real</Form.Label>
              <Form.Control
                type="number"
                name="real"
                value={real}
                onChange={(e) => setReal(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Escolha a moeda:</Form.Label>
              <Form.Select
                name="moeda"
                value={moeda}
                onChange={(e) => setMoeda(e.target.value)}
              >
                <option disabled value="">
                  Selecione
                </option>
                <option value="dolar">Dólar</option>
                <option value="euro">Euro</option>
                <option value="bitcoin">Bitcoin</option>
              </Form.Select>
            </Form.Group>
          </Container>
        </Row>
        <Form.Group className="mb-3 text-center">
          <Button variant="success" onClick={converter}>
            Converter
          </Button>
          <Button variant="secondary" className="ms-2" onClick={limpar}>
            Limpar
          </Button>
        </Form.Group>
      </Form>


      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Resultado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Conversão: ({resultado})</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </Pagina>
  );
}

export default CambistaPage;
