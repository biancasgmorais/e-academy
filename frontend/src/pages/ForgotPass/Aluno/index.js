import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { forgotPass } from '../../../store/modules/aluno/action';
import logo from '../../../assets/logo2.png';
import { Container, Navigation } from './styles';

const schema = Yup.object().shape({
  email: Yup.string().email().required('O email é obrigatório!'),
});

export default function Aluno() {
  const dispatch = useDispatch();

  function handleSubmit({ email }) {
    dispatch(forgotPass(email));
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
        <h2>Esqueceu a senha - Aluno</h2>
        <div id="linha3" />
        <Form schema={schema} onSubmit={handleSubmit}>
          <div className="divisoria">
            <Input name="email" type="email" placeholder="Email" />
          </div>
          <button type="submit">Recuperar</button>
          <Link to="/loginalunos">Já tenho conta</Link>
        </Form>
      </Navigation>
    </Container>
  );
}
