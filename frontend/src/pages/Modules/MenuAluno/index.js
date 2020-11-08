/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import api from '../../../services/api';

import { Container } from './styles';
import Menu from '../../../components/Header/Aluno';

import searchFunction from '../../../components/searchFunction';

export default function MenuAluno() {
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    const loadDados = async () => {
      const response = await api.get('disciplinasal');
      const data = response.data.map((disc) => ({
        ...disc,
        codigodiscForm: disc.codigodisc,
        disciplinaForm: disc.disciplina,
        nomeprofessorForm: disc.nomeprofessor,
        horariodiscForm: disc.horariodisc,
        nota1Form: disc.nota1,
        nota2Form: disc.nota2,
        nota3Form: disc.nota3,
        recForm: disc.rec,
      }));

      setDisciplinas(data);
    };
    loadDados();
  }, []);

  return (
    <>
      <Menu />
      <Container>
        <h1>Disciplinas Matriculadas</h1>
        <div className="nv">
          <input id="myInput" placeholder="Busca" onChange={searchFunction} />
        </div>
        <div className="tabela">
          <table id="myTable">
            <tr className="header">
              <th>Código da Disciplina</th>
              <th>Disciplina</th>
              <th>Horário</th>
              <th>Professor</th>
              <th>Nota 1</th>
              <th>Nota 2</th>
              <th>Nota 3</th>
              <th>Recuperação</th>
            </tr>

            {disciplinas.map((disc) => (
              <tr key={disc.id}>
                <td>{disc.codigodiscForm}</td>
                <td>{disc.disciplinaForm}</td>
                <td>{disc.horariodiscForm}</td>
                <td>{disc.nomeprofessorForm}</td>
                <td>{disc.nota1Form}</td>
                <td>{disc.nota2Form}</td>
                <td>{disc.nota3Form}</td>
                <td>{disc.recForm}</td>
              </tr>
            ))}
          </table>
        </div>
      </Container>
    </>
  );
}
