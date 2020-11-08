/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';

import { FaUnlock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import api from '../../../services/api';

import { updateAcessProfessor } from '../../../store/modules/user/action';

import Menu from '../../../components/Header/Adm';
import { Container } from './styles';
import voltar from '../../../assets/voltar.png';
import searchFunction from '../../../components/searchFunction';

export default function ListProfessors() {
  const dispatch = useDispatch();
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    const loadDados = async () => {
      const response = await api.get('professors');

      setProfessors(response.data);
    };
    loadDados();
  }, []);

  const handleSubmit = async (prof) => {
    const matricula_prof = Math.floor(Math.random() * 9000000) + 1000000;
    dispatch(updateAcessProfessor(prof.name, prof.email, matricula_prof));
  };

  return (
    <>
      <Menu />
      <Container>
        <div id="linha" />
        <h1>Professores</h1>
        <div id="linha" />
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

            {professors.map((prof) => (
              <tr key={prof.id}>
                <td>{prof.name}</td>
                <td>{prof.matricula_prof}</td>
                <td>{prof.email}</td>
                <td>{prof.provider}</td>
                <td>
                  <button type="button" onClick={() => handleSubmit(prof)}>
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
