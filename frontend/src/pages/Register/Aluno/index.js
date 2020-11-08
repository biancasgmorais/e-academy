import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { signUpRequest } from '../../../store/modules/authaluno/action';
import logo from '../../../assets/logo2.png';
import { Container, Navigation } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email().required('O email é obrigatório!'),
  password: Yup.string()
    .required('Senha de no minímo 6 caracteres, obrigatória!')
    .min(6),
});

export default function Aluno() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

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
        <h2>Cadastro Aluno</h2>
        <div id="linha3" />
        <Form schema={schema} onSubmit={handleSubmit}>
          <div className="divisoria">
            <Input name="name" placeholder="Nome Completo" />
            <Input name="email" type="email" placeholder="Email" />
            <Input name="password" type="password" placeholder="Senha" />
          </div>
          <button type="submit">Criar conta</button>
          <Link to="/loginalunos">Já tenho conta</Link>
        </Form>
      </Navigation>
    </Container>
  );
}
