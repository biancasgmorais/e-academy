/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';

import {
  updateProfileRequest,
  updateProfRequest,
} from '../../../store/modules/prof/action';
import { signOut } from '../../../store/modules/authprofessor/action';

import Menu from '../../../components/Header/Professor';

import { Content } from './styles';

import api from '../../../services/api';

import voltar from '../../../assets/voltar.png';

const schema = Yup.object().shape({
  matricula_prof: Yup.number().integer(),
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

const schema2 = Yup.object().shape({
  email: Yup.string().email().required('O email é requerido'),
  name: Yup.string().required('Nome é obrigatório'),
  formacao: Yup.string().required('Formação é obrigatório'),
  escolaridade: Yup.string().required(
    'Campo obrigatório: Graduação / Mestrado / Doutorado'
  ),
});

export default function Professor() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.prof.profile);
  const [professors, setProfessor] = useState([]);

  useEffect(() => {
    const loadDados = async () => {
      const response = await api.get('updateprof');
      setProfessor(response.data);
    };
    loadDados();
  }, []);

  const handleSubmit = (data) => {
    dispatch(updateProfileRequest(data));
  };

  const handleSubmit2 = (data) => {
    dispatch(updateProfRequest(data));
  };

  const options2 = [
    { id: 'Graduação', title: 'Graduação' },
    { id: 'Mestrado', title: 'Mestrado' },
    { id: 'Doutorado', title: 'Doutorado' },
  ];

  const handleDelete = async () => {
    try {
      // eslint-disable-next-line no-alert
      if (window.confirm(`Confirma a exclusão do seu perfil?`)) {
        await api.delete(`professors/${professors.id}`);

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

        <Form onSubmit={handleSubmit2} schema={schema2} autoComplete="off">
          <Input name="email" type="email" placeholder="email" />
          <Input name="name" placeholder="Nome Completo" />
          <Input name="formacao" placeholder="Formação" />
          <Select
            name="escolaridade"
            options={options2}
            placeholder="Escolaridade"
          />
          <div className="botoes">
            <button type="submit">Atualizar dados</button>
          </div>
        </Form>

        <h1>Senha</h1>
        <Form initialData={profile} onSubmit={handleSubmit} schema={schema}>
          <Input name="matricula_prof" type="number" placeholder="Matricula" />
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
          <Link to="/modulesprofessor">
            <img src={voltar} alt="voltar" />
          </Link>
        </div>
      </Content>
    </>
  );
}
