import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import { v4 as uuidv4 } from 'uuid';
import { FaSave, FaTimes } from 'react-icons/fa';

const validationSchema = Yup.object().shape({
  tipo: Yup.string().required('Campo obrigatório'),
  finalidade: Yup.string().required('Campo obrigatório'),
  valor: Yup.number().required('Campo obrigatório'),
  area: Yup.number().required('Campo obrigatório'),
  quartos: Yup.number().required('Campo obrigatório'),
  banheiros: Yup.number().required('Campo obrigatório'),
  vagasGaragem: Yup.number().required('Campo obrigatório'),
  cep: Yup.string().required('Campo obrigatório'),
  logradouro: Yup.string().required('Campo obrigatório'),
  bairro: Yup.string().required('Campo obrigatório'),
  cidade: Yup.string().required('Campo obrigatório'),
  estado: Yup.string().required('Campo obrigatório'),
  nomeProprietario: Yup.string().required('Campo obrigatório'),
  cpfProprietario: Yup.string().required('Campo obrigatório'),
  telefoneProprietario: Yup.string().required('Campo obrigatório'),
  emailProprietario: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
});

const FormularioImovel = () => {
  const initialValues = {
    tipo: '',
    finalidade: '',
    valor: '',
    area: '',
    quartos: '',
    banheiros: '',
    vagasGaragem: '',
    descricao: '',
    cep: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    estado: '',
    complemento: '',
    nomeProprietario: '',
    cpfProprietario: '',
    telefoneProprietario: '',
    emailProprietario: '',
  };

  const handleSubmit = (values) => {
    const novoImovel = { id: uuidv4(), ...values };
    console.log('Imóvel cadastrado:', novoImovel);
    alert('Imóvel cadastrado com sucesso!');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form className="container mt-4">
          <h3 className="text-center">Dados do Imóvel</h3>

          <div className="row">
            <div className="col-md-6">
              <label>Tipo:</label>

              <Field as="select" name="tipo" className="form-control">
                <option value="">Selecione</option>
                <option value="Casa">Casa</option>
                <option value="Apartamento">Apartamento</option>
                <option value="Lote">Lote</option>
                <option value="Fazenda">Fazenda</option>
              </Field>
              <ErrorMessage name="tipo" component="div" className="text-danger" />
            </div>
            <div className="col-md-6">
              
              <label>Finalidade:</label>

              <Field as="select" name="finalidade" className="form-control">

                <option value="">Selecione</option>
                <option value="Aluguel">Aluguel</option>
                <option value="Venda">Venda</option>
                
              </Field>
              <ErrorMessage name="finalidade" component="div" className="text-danger" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <label>Valor:</label>
              <Field name="valor" type="text" className="form-control" />
              <ErrorMessage name="valor" component="div" className="text-danger" />
            </div>
            <div className="col-md-6">
              <label>metros quadrados (m²):</label>
              <Field name="area" type="text" className="form-control" />
              <ErrorMessage name="area" component="div" className="text-danger" />
            </div>
          </div>

          <div className="row">

            <div className="col-md-4  ">
              <label>Quartos:</label>
              <Field name="quartos" type="text" className="form-control" />
              <ErrorMessage name="quartos" component="div" className="text-danger" />
            </div>

            <div className="col-md-2">
              <label>Vagas de Garagem:</label>
              <Field name="vagasGaragem" type="text" className="form-control" />
              <ErrorMessage name="vagasGaragem" component="div" className="text-danger" />
            </div>

            <div className="col-md-2">
              <label>Banheiros:</label>
              <Field name="banheiros" type="text" className="form-control" />
              <ErrorMessage name="banheiros" component="div" className="text-danger" />
            </div>

          </div>

          <div className="row">
            <div className="col-12">
              <label>Descrição:</label>
              <Field as="textarea" name="descricao" className="form-control" />
            </div>
          </div>

          <h3 className="text-center mt-4">Endereço</h3>

          <div className="row">
            <div className="col-md-4">
              
              <label>CEP:</label>
              <Field name="cep">
                {({ field }) => (
                  <InputMask {...field} mask="99999-999" className="form-control" />
                )}
              </Field>
              <ErrorMessage name="cep" component="div" className="text-danger" />
            </div>

            <div className="col-md-4">
              <label>Bairro:</label>
              <Field name="bairro" type="text" className="form-control" />
              <ErrorMessage name="bairro" component="div" className="text-danger" />
            </div>

            <div className="col-md-4">
              <label>Logradouro:</label>
              <Field name="logradouro" type="text" className="form-control" />
              <ErrorMessage name="logradouro" component="div" className="text-danger" />
            </div>

          </div>

          <div className="row">

          <div className="col-md-4">
              <label>Estado:</label>
              <Field name="estado" type="text" className="form-control" />
              <ErrorMessage name="estado" component="div" className="text-danger" />
            </div>

            <div className="col-md-4">
              <label>Cidade:</label>
              <Field name="cidade" type="text" className="form-control" />
              <ErrorMessage name="cidade" component="div" className="text-danger" />
            </div>

            <div className="col-md-4">
              <label>Complemento:</label>
              <Field name="complemento" type="text" className="form-control" />
            </div>
          </div>

          <h3 className="text-center mt-4">Proprietário</h3>

          <div className="row">
          <div className="col-md-6">
              <label>CPF do Proprietário:</label>
              <Field name="cpfProprietario">
                {({ field }) => (
                  <InputMask {...field} mask="999.999.999-99" className="form-control" />
                )}
              </Field>
              <ErrorMessage name="cpfProprietario" component="div" className="text-danger" />
            </div>

            <div className="col-md-6">
              <label>Nome do Proprietário:</label>
              <Field name="nomeProprietario" type="text" className="form-control" />
              <ErrorMessage name="nomeProprietario" component="div" className="text-danger" />
            </div>

          </div>
          <div className="row">
            <div className="col-md-6">
              <label>E-mail do Proprietário:</label>
              <Field name="emailProprietario" type="email" className="form-control" />
              <ErrorMessage name="emailProprietario" component="div" className="text-danger" />
            </div>

            <div className="col-md-6">
              <label>Telefone do Proprietário:</label>
              <Field name="telefoneProprietario">
                {({ field }) => (
                  <InputMask {...field} mask="(99) 99999-9999" className="form-control" />
                )}
              </Field>
              <ErrorMessage name="telefoneProprietario" component="div" className="text-danger" />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col text-center">
              <button type="submit" className="btn btn-success mr-2">
                <FaSave /> Salvar
              </button>
              
              <button type="reset" className="btn btn-danger">
                <FaTimes /> Limpar
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormularioImovel;
