/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { updateDisciplinaAlunoRequest } from '../../../../store/modules/disciplinaluno/action';

import Menu from '../../../../components/Header/Professor';
import { Container, Content } from './styles';

import voltar from '../../../../assets/voltar.png';

const schema = Yup.object().shape({
  id: Yup.number()
    .transform((value) => (!value ? undefined : value))
    .integer(),
  codigodisc: Yup.number()
    .transform((value) => (!value ? undefined : value))
    .required('O código da disciplina é obrigatório'),
  aluno: Yup.number()
    .transform((value) => (!value ? undefined : value))
    .required('A matricula do aluno é obrigatória!'),
  nota1: Yup.number()
    .transform((value) => (!value ? undefined : value))
    .required('A nota da 1ª unidade é obrigatória!'),
  nota2: Yup.number()
    .transform((value) => (!value ? undefined : value))
    .required('A nota da 2ª unidade é obrigatória!'),
  nota3: Yup.number()
    .transform((value) => (!value ? undefined : value))
    .required('A nota da 3ª unidade é obrigatória!'),
  rec: Yup.number(),
});

export default function CadastrarRecuperacao({ location }) {
  const dispatch = useDispatch();

  const { disciplinasLocated } = location.state || {};
  const [notas] = useState(disciplinasLocated);

  const handleSubmit = (data) => {
    data = {
      ...data,
      id: notas.id,
    };

    dispatch(updateDisciplinaAlunoRequest(data));
  };

  return (
    <>
      <Menu />
      <Container>
        <Content>
          <h1>Cadastro de notas</h1>
          <Form
            initialData={notas}
            onSubmit={handleSubmit}
            schema={schema}
            autoComplete="on"
          >
            <h2>Código da Disciplina</h2>
            <Input name="codigodisc" type="number" />
            <h2>Aluno</h2>
            <Input name="aluno" type="number" />
            <h2>Nota 1ª Unidade</h2>
            <Input type="number" min="1" step="0.01" name="nota1" />
            <h2>Nota 2ª Unidade</h2>
            <Input type="number" min="1" step="0.01" name="nota2" />
            <h2>Nota 3ª Unidade</h2>
            <Input type="number" min="1" step="0.01" name="nota3" />
            <h2>Recuperação</h2>
            <Input type="number" min="0" step="0.01" name="rec" />
            <div className="botoes">
              <button type="submit">Editar</button>
            </div>
          </Form>

          <div className="back">
            <Link to="/listnotas">
              <img src={voltar} alt="voltar" />
            </Link>
          </div>
        </Content>
      </Container>
    </>
  );
}

CadastrarRecuperacao.defaultProps = {
  location: PropTypes.shape({
    state: {},
  }),
};

CadastrarRecuperacao.propTypes = {
  location: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    state: PropTypes.object,
  }),
};
