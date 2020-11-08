/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';

import { BsPlusSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import api from '../../../services/api';
import { createDisciplinaAlunoRequest } from '../../../store/modules/disciplinaluno/action';
import { Container } from './styles';
import Menu from '../../../components/Header/Aluno';
import voltar from '../../../assets/voltar.png';
import searchFunction from '../../../components/searchFunction';

export default function ListDisciplinas() {
  const dispatch = useDispatch();
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    const loadDados = async () => {
      const response = await api.get('disciplinas');

      setDisciplinas(response.data);
    };
    loadDados();
  }, []);

  const handleSubmit = (data) => {
    dispatch(createDisciplinaAlunoRequest(data));
  };

  return (
    <>
      <Menu />
      <Container>
        <h1>Disciplinas</h1>
        <div className="nv">
          <input id="myInput" placeholder="Busca" onChange={searchFunction} />
        </div>
        <div className="tabela">
          <table id="myTable">
            <tr className="header">
              <th>Nome</th>
              <th>Professor</th>
              <th>Carga Horária</th>
              <th>Horário</th>
              <th>Cadastrar</th>
            </tr>
            {disciplinas.map((disciplina) => (
              <tr key={disciplina.id}>
                <td>{disciplina.nome}</td>
                <td>{disciplina.nomeprof}</td>
                <td>{disciplina.carga_horaria}</td>
                <td>{disciplina.horario}</td>
                <td>
                  <Link
                    to={{
                      pathname: `/cadastrardisciplinaluno/${disciplina.id}`,
                      state: { disciplinasLocated: disciplina },
                    }}
                  >
                    <BsPlusSquare color="#4a0072" size={30} />
                  </Link>
                </td>
              </tr>
            ))}
          </table>
        </div>
        <div className="back">
          <Link to="/modulesaluno">
            <img src={voltar} alt="voltar" />
          </Link>
        </div>
      </Container>
    </>
  );
}
