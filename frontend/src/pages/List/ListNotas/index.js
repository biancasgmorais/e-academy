/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';

import { MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';

import api from '../../../services/api';

import Menu from '../../../components/Header/Professor';
import { Container } from './styles';

import voltar from '../../../assets/voltar.png';
import filterTable from '../../../components/filterTable';
import searchFunction from '../../../components/searchFunction';

export default function ListNotas() {
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    const loadProf = async () => {
      const response = await api.get('disciplinasnota');
      const data = response.data.map((disciplina) => ({
        ...disciplina,
        disciplinaForm: disciplina.disciplina,
        nomealunoForm: disciplina.nomealuno,
        nota1Form: disciplina.nota1,
        nota2Form: disciplina.nota2,
        nota3Form: disciplina.nota3,
        recForm: disciplina.rec,
      }));

      setDisciplinas(data);
    };
    loadProf();
  }, []);

  return (
    <>
      <Menu />
      <Container>
        <h1>Notas</h1>
        <div className="box">
          {' '}
          <select id="mySelector" onInput={filterTable}>
            <option>Escolha a disciplina</option>
            {disciplinas.map((disciplina) => (
              <option>{disciplina.disciplinaForm}</option>
            ))}
          </select>
        </div>

        <div className="nv">
          <input id="myInput" placeholder="Busca" onChange={searchFunction} />
        </div>
        <div className="tabela">
          <table id="myTable">
            <tr className="header">
              <th>Disciplina</th>
              <th>Aluno</th>
              <th>Nota 1</th>
              <th>Nota 2</th>
              <th>Nota 3</th>
              <th>Recuperação</th>
              <th>Adicionar/Editar Notas</th>
              <th>Recuperação</th>
            </tr>

            {disciplinas.map((disciplina) => (
              <tr key={disciplina.id}>
                <td>{disciplina.disciplinaForm}</td>
                <td>{disciplina.nomealunoForm}</td>
                <td>{disciplina.nota1Form}</td>
                <td>{disciplina.nota2Form}</td>
                <td>{disciplina.nota3Form}</td>
                <td>{disciplina.recForm}</td>
                <td>
                  <Link
                    to={{
                      pathname: `/cadastrarnotas/${disciplina.id}`,
                      state: { disciplinasLocated: disciplina },
                    }}
                  >
                    <MdModeEdit color="#191970" size={30} />
                  </Link>
                </td>
                <td>
                  <Link
                    to={{
                      pathname: `/cadastrarrecuperacao/${disciplina.id}`,
                      state: { disciplinasLocated: disciplina },
                    }}
                  >
                    <MdModeEdit color="#191970" size={30} />
                  </Link>
                </td>
              </tr>
            ))}
          </table>
        </div>
        <div className="back">
          <Link to="/modulesprofessor">
            <img src={voltar} alt="voltar" />
          </Link>
        </div>
      </Container>
    </>
  );
}
