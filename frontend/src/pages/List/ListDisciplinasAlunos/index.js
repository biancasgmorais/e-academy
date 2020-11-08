/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import api from '../../../services/api';

import Menu from '../../../components/Header/Adm';
import { Container } from './styles';
import voltar from '../../../assets/voltar.png';
import searchFunction from '../../../components/searchFunction';

export default function ListDisciplinasAlunos() {
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    const loadDados = async () => {
      const response = await api.get('todosdisciplinasal');

      setDisciplinas(response.data);
    };
    loadDados();
  }, []);

  return (
    <>
      <Menu />
      <Container>
        <div id="linha" />
        <h1>Disciplinas e Alunos</h1>
        <div id="linha" />
        <div className="nv">
          <input id="myInput" placeholder="Busca" onChange={searchFunction} />
        </div>
        <div className="tabela">
          <table id="myTable">
            <tr className="header">
              <th>Código da Disciplina</th>
              <th>Disciplina</th>
              <th>Matricula Professor</th>
              <th>Professor</th>
              <th>Aluno</th>
              <th>Nota 1</th>
              <th>Nota 2</th>
              <th>Nota 3</th>
              <th>Recuperação</th>
            </tr>

            {disciplinas.map((disciplina) => (
              <tr key={disciplina.id}>
                <td>{disciplina.codigodisc}</td>
                <td>{disciplina.disciplina}</td>
                <td>{disciplina.professor}</td>
                <td>{disciplina.nomeprofessor}</td>
                <td>{disciplina.nomealuno}</td>
                <td>{disciplina.nota1}</td>
                <td>{disciplina.nota2}</td>
                <td>{disciplina.nota3}</td>
                <td>{disciplina.rec}</td>
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
