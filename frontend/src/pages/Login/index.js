import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '../../store/modules/auth/action';

import logo from '../../assets/logo2.png';

const schema = Yup.object().shape({
  email: Yup.string().email().required('O email é obrigatório!'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <div id="linha">
        <img src={logo} alt="E-ACADEMY" />
      </div>
      <div className="linha1">
        <Link to="/loginalunos">Menu Aluno</Link>
        <Link to="/loginprofessor">Menu Professor</Link>
      </div>
      <div id="linha2" />
      <h2>Login Administrador</h2>
      <div id="linha3" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">{loading ? 'Carregando..' : 'Entrar'}</button>
      </Form>
    </>
  );
}
