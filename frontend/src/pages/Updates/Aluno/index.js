/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { updateProfileRequest } from '../../../store/modules/aluno/action';

import { signOut } from '../../../store/modules/authaluno/action';
import { Content } from './styles';

import Menu from '../../../components/Header/Aluno';

import api from '../../../services/api';
import voltar from '../../../assets/voltar.png';

const schema = Yup.object().shape({
  matricula_aluno: Yup.number().integer(),
  oldPassword: Yup.string().min(6),
  password: Yup.string()
    .min(6)
    .when('oldPassword', (oldPassword, field) =>
      oldPassword ? field.required() : field
    ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password ? field.required().oneOf([Yup.ref('password')]) : field
  ),
});

export default function Aluno() {
  const dispatch = useDispatch();
  const [aluno, setAluno] = useState([]);

  useEffect(() => {
    const loadDados = async () => {
      const response = await api.get('updatealuno');
      setAluno(response.data);
    };
    loadDados();
  }, []);

  const handleSubmit = (data) => {
    dispatch(updateProfileRequest(data));
    dispatch(signOut());
  };

  const handleDelete = async () => {
    try {
      // eslint-disable-next-line no-alert
      if (window.confirm(`Confirma a exclusão do seu perfil?`)) {
        await api.delete(`aluno/${aluno.id}`);

        toast.success(`Perfil apagado com sucesso!`);

        dispatch(signOut());
      }
    } catch (error) {
      toast.error(
        `Erro ao deletar perfil, verifique os dados ou tente novamente`
      );
    }
  };

  return (
    <>
      <Menu />
      <Content>
        <h1>Meus dados</h1>
        <h2>Dados atuais</h2>
        <h2>Nome: {aluno.name}</h2>
        <h2>Matricula: {aluno.matricula_aluno} </h2>

        <h1>Senha</h1>
        <Form onSubmit={handleSubmit} schema={schema}>
          <Input name="matricula_aluno" type="number" placeholder="Matricula" />
          <Input name="password" type="password" placeholder="Senha Nova" />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirme a Senha Nova"
          />
          <Input
            name="oldPassword"
            type="password"
            placeholder="Senha Antiga"
          />
          <div className="botoes">
            <button type="submit">Atualizar senha</button>
          </div>
        </Form>

        <div className="apagar">
          <button type="button" onClick={() => handleDelete()}>
            Apagar Conta{' '}
          </button>
        </div>
        <div className="back">
          <Link to="/modulesaluno">
            <img src={voltar} alt="voltar" />
          </Link>
        </div>
      </Content>
    </>
  );
}
