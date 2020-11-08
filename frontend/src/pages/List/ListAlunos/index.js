/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';

import { FaUnlock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import api from '../../../services/api';

import { updateAcessAluno } from '../../../store/modules/user/action';
import Menu from '../../../components/Header/Adm';
import { Container } from './styles';
import voltar from '../../../assets/voltar.png';
import searchFunction from '../../../components/searchFunction';

export default function ListAlunos() {
  const dispatch = useDispatch();
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    const loadDados = async () => {
      const response = await api.get('alunos');

      setAlunos(response.data);
    };
    loadDados();
  }, []);

  // function handleSubmit1({ matricula_aluno, name, email }) {
  // dispatch(updateAcessAluno(matricula_aluno, name, email));
  // }

  const handleSubmit = async (al) => {
    const matricula_aluno = Math.floor(Math.random() * 9000000) + 1000000;
    dispatch(updateAcessAluno(matricula_aluno, al.name, al.email));
  };

  return (
    <>
      <Menu />
      <Container>
        <h1>Alunos</h1>

        <div className="nv">
          <input id="myInput" placeholder="Busca" onChange={searchFunction} />
        </div>
        <div className="tabela">
          <table id="myTable">
            <tr className="header">
              <th>Nome</th>
              <th>Matricula</th>
              <th>Email</th>
              <th>Acesso</th>
              <th>Liberar</th>
            </tr>

            {alunos.map((al) => (
              <tr key={al.id}>
                <td>{al.name}</td>
                <td>{al.matricula_aluno}</td>
                <td>{al.email}</td>
                <td>{al.provider}</td>
                <td>
                  <button type="button" onClick={() => handleSubmit(al)}>
                    <FaUnlock color="#4a0072" size={30} />
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
        <div className="back">
          <Link to="/modules">
            <img src={voltar} alt="voltar" />
          </Link>
        </div>
      </Container>
    </>
  );
}
