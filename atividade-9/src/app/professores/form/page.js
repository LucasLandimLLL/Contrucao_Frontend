"use client";

import Pagina from "@/components/Pagina";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import { v4 } from "uuid";
import * as Yup from "yup";

export default function ProfessorFormPage(props) {
  const router = useRouter();

  const cursos = JSON.parse(localStorage.getItem("cursos")) || [];

  const professores = JSON.parse(localStorage.getItem("professores")) || [];

  const id = props.searchParams.id;
  console.log(props.searchParams.id);
  const professorEditado = professores.find((item) => item.id == id);
  console.log(professorEditado);

  function salvar(dados) {
    if (professorEditado) {
      Object.assign(professorEditado, dados);
      localStorage.setItem("professores", JSON.stringify(professores));
    } else {
      dados.id = v4();
      professores.push(dados);
      localStorage.setItem("professores", JSON.stringify(professores));
    }

    alert("Professor criado com sucesso!");
    router.push("/professores");
  }

  const initialValues = {
    nome: "",
    dataNascimento: "",
    matricula: "",
    status: "",
    curso: "",
  };

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    dataNascimento: Yup.date().required("Campo obrigatório"),
    matricula: Yup.string().required("Campo obrigatório"),
    status: Yup.string().required("Campo obrigatório"),
    curso: Yup.string().required("Campo obrigatório"),
  });

  return (
    <Pagina titulo={"Cadastro de Professor"}>

      <Formik
        initialValues={professorEditado || initialValues}
        validationSchema={validationSchema}
        onSubmit={salvar}>
        {
          ({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <Row className="mb-2">
                  <Form.Group as={Col}>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control
                      name="nome"
                      type="text"
                      value={values.nome}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.nome && !errors.nome}
                      isInvalid={touched.nome && errors.nome}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.nome}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Data de Nascimento:</Form.Label>
                    <Form.Control
                      name="dataNascimento"
                      type="date"
                      value={values.dataNascimento}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.dataNascimento && !errors.dataNascimento}
                      isInvalid={
                        touched.dataNascimento && errors.dataNascimento
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.dataNascimento}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-2">
                  <Form.Group as={Col}>
                    <Form.Label>Matricula:</Form.Label>
                    <Form.Control
                      name="matricula"
                      type="text"
                      value={values.matricula}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.matricula && !errors.matricula}
                      isInvalid={touched.matricula && errors.matricula}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.matricula}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Status:</Form.Label>
                    <Form.Select
                      name="status"
                      value={values.status}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.status && !errors.status}
                      isInvalid={touched.status && errors.status}
                    >
                      <option value="">Selecione</option>
                      <option value="Ativo">Ativo</option>
                      <option value="Inativo">Inativo</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.status}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Cursos:</Form.Label>
                    <Form.Select
                      name="curso"
                      value={values.cursos}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.curso && !errors.curso}
                      isInvalid={touched.curso && errors.curso}
                    >
                      <option value="">Selecione</option>
                      {cursos.map((curso) => (
                        <option value={curso.nome}>{curso.nome}</option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.curso}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                
                <Form.Group className="text-end">
                  <Button className="me-2" href="/faculdades">
                    <FaArrowLeft /> Voltar
                  </Button>
                  <Button type="submit" variant="success">
                    <FaCheck /> Enviar
                  </Button>
                </Form.Group>
              </Form>
            );
          }
        }
      </Formik>
    </Pagina>
  );
}
