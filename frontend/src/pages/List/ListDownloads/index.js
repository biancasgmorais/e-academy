/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import api from '../../../services/api';

import Menu from '../../../components/Header/Aluno';
import { Container } from './styles';

import voltar from '../../../assets/voltar.png';
import filterTable from './filterTable';
import searchFunction from '../../../components/searchFunction';

export default function ListDownloads() {
  const [uploads, setUploads] = useState([]);
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    const loadUploads = async () => {
      const response = await api.get('uploadsal');
      const data = response.data.map((upload) => ({
        ...upload,
        linkForm: upload.link,
        descricaoForm: upload.descricao,
        codigodisciplinaForm: upload.codigodisciplina,
        nomedisciplinaForm: upload.nomedisciplina,
      }));

      setUploads(data);
    };
    loadUploads();
  }, []);

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
        <h1>Downloads</h1>
        <div className="box">
          <select id="mySelector" onInput={filterTable}>
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
              <th>Código da Disciplina</th>
              <th>Link</th>
              <th>Descrição</th>
            </tr>

            {uploads.map((upload) => (
              <tr key={upload.id}>
                <td>{upload.nomedisciplinaForm}</td>
                <td>{upload.codigodisciplinaForm}</td>
                <td>{upload.linkForm}</td>
                <td>{upload.descricaoForm}</td>
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
