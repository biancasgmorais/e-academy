/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import api from '../../../services/api';

import { createDisciplinaRequest } from '../../../store/modules/disciplina/action';

import Menu from '../../../components/Header/Adm';
import { Container, Content } from './styles';

import voltar from '../../../assets/voltar.png';

const schema = Yup.object().shape({
  codigo: Yup.number().required('O código da disciplina é necessário!'),
  nome: Yup.string().required('O nome da disciplina é obrigatório!'),
  carga_horaria: Yup.number().required('A carga horária é obrigatório'),
  professor_ass: Yup.number().required('A matricula do professor é necessária'),
  horario: Yup.string().required('o horário da disciplina é necessária'),
});

export default function New() {
  const dispatch = useDispatch();
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    const loadDados = async () => {
      const response = await api.get('professors');

      setProfessors(response.data);
    };
    loadDados();
  }, []);

  const handleSubmit = (data, { resetForm }) => {
    dispatch(createDisciplinaRequest(data));
    resetForm();
  };

  return (
    <>
      <Menu />
      <Container>
        <Content>
          <h1>Cadastro de Disciplina</h1>
          <Form onSubmit={handleSubmit} schema={schema}>
            <h2>Código da Disciplina </h2>
            <Input name="codigo" type="number" />
            <h2>Nome</h2>
            <Input name="nome" />
            <h2>Carga Horária</h2>
            <Input name="carga_horaria" type="number" />
            <h2>Horario</h2>
            <Input name="horario" />
            <h2>Matricula Professor</h2>
            <Select
              name="professor_ass"
              options={professors.map((prof) => ({
                id: prof.matricula_prof,
                title: prof.name,
              }))}
            />
            <div className="botoes">
              <button type="submit">Cadastrar</button>
            </div>
          </Form>

          <div className="back">
            <Link to="/modules">
              <img src={voltar} alt="voltar" />
            </Link>
          </div>
        </Content>
      </Container>
    </>
  );
}

New.defaultProps = {
  location: PropTypes.shape({
    state: {},
  }),
};

New.propTypes = {
  location: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    state: PropTypes.object,
  }),
};
