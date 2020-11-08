/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';

import { BsPlusSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import Menu from '../../../components/Header/Professor';
import api from '../../../services/api';

import searchFunction from '../../../components/searchFunction';

export default function MenuProfessor() {
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    const loadDados = async () => {
      const response = await api.get('disciplinasprof');
      const data = response.data.map((disciplina) => ({
        ...disciplina,
        nomeForm: disciplina.nome,
        carga_horariaForm: disciplina.carga_horaria,
        codigoForm: disciplina.codigo,
        horarioForm: disciplina.horario,
      }));

      setDisciplinas(data);
    };
    loadDados();
  }, []);

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
              <th>Código da Disciplina</th>
              <th>Nome</th>
              <th>Carga Horária</th>
              <th>Horário</th>
              <th>Uploads</th>
            </tr>

            {disciplinas.map((disciplina) => (
              <tr key={disciplina.id}>
                <td>{disciplina.codigoForm}</td>
                <td>{disciplina.nomeForm}</td>
                <td>{disciplina.carga_horariaForm}</td>
                <td>{disciplina.horarioForm}</td>
                <td>
                  <Link
                    to={{
                      pathname: `/uploads/${disciplina.id}`,
                      state: { disciplinasLocated: disciplina },
                    }}
                  >
                    <BsPlusSquare color="#191970" size={30} />
                  </Link>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </Container>
    </>
  );
}
