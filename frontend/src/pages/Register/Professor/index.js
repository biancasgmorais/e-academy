import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { signUpRequest } from '../../../store/modules/authprofessor/action';
import logo from '../../../assets/logo2.png';
import { Container, Navigation } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email().required('O email é obrigatório!'),
  formacao: Yup.string().required('Formação é obrigatório'),
  escolaridade: Yup.string().required(
    'Campo obrigatório: Graduação / Mestrado / Doutorado'
  ),
  password: Yup.string()
    .required('Senha de no minímo 6 caracteres, obrigatória!')
    .min(6),
});

export default function Professor() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, formacao, escolaridade, password }) {
    dispatch(signUpRequest(name, email, formacao, escolaridade, password));
  }

  const options2 = [
    { id: 'Graduação', title: 'Graduação' },
    { id: 'Mestrado', title: 'Mestrado' },
    { id: 'Doutorado', title: 'Doutorado' },
  ];

  return (
    <Container>
      <Navigation>
        <div id="linha">
          <img src={logo} alt="E-ACADEMY" />
        </div>
        <div className="linha1">
          <Link to="/loginalunos">Menu Aluno</Link>
          <Link to="/loginprofessor">Menu Professor</Link>
        </div>
        <div id="linha2" />
        <h2>Cadastro Professor</h2>
        <div id="linha3" />
        <Form schema={schema} onSubmit={handleSubmit} autoComplete="off">
          <Input name="name" placeholder="Nome Completo" />
          <Input name="email" type="email" placeholder="Email" />
          <Input name="formacao" placeholder="Formação" />
          <Select
            name="escolaridade"
            options={options2}
            placeholder="Escolaridade"
          />
          <Input name="password" type="password" placeholder="Senha" />
          <button type="submit">Criar conta</button>
          <Link to="/loginprofessor">Já tenho conta</Link>
        </Form>
      </Navigation>
    </Container>
  );
}
