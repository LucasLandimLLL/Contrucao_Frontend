"use client";

import Pagina from "@/components/Pagina";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FaPen, FaPlusCircle, FaTrash } from "react-icons/fa";

export default function FaculdadesPage() {
  const [faculdades, setFaculdades] = useState([]);


  useEffect(() => {
    const faculdadesLocalStorage =
      JSON.parse(localStorage.getItem("faculdades")) || [];
    setFaculdades(faculdadesLocalStorage);
    console.log(faculdadesLocalStorage);
  }, []);

  function excluir(faculdade) {
    if (
      window.confirm(`Deseja realmente excluir a faculdade ${faculdade.nome}?`)
    ) {
      const novaLista = faculdades.filter((item) => item.id !== faculdade.id);
      localStorage.setItem("faculdades", JSON.stringify(novaLista));
      setFaculdades(novaLista);
      alert("Faculdade excluída com sucesso!");
    }
  }

  return (
    <Pagina titulo={"Lista de Faculdades"}>
      <div className="text-end mb-2">
        <Button href="/faculdades/form">
          <FaPlusCircle /> Novo
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Endereço</th>
            <th>País</th>
            <th>Estado</th>
            <th>Cidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {faculdades.map((faculdade) => {
            return (
              <tr>
                <td>{faculdade.nome}</td>
                <td>{faculdade.endereco}</td>
                <td>{faculdade.pais}</td>
                <td>{faculdade.estado}</td>
                <td>{faculdade.cidade}</td>
                <td className="text-center">
                  <Button
                    className="me-2"
                    href={`/faculdades/form?id=${faculdade.id}`}
                  >
                    <FaPen />
                  </Button>
                  <Button variant="danger" onClick={() => excluir(faculdade)}>
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Pagina>
  );
}
