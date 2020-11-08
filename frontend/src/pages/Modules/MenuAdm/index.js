/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';

import Menu from '../../../components/Header/Adm';

import { Container } from './styles';

import searchFunction from '../../../components/searchFunction';

export default function MenuAdm() {
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    const loadDados = async () => {
      const response = await api.get('disciplinas');

      setDisciplinas(response.data);
    };
    loadDados();
  }, []);

  const handleDelete = async (disciplina) => {
    try {
      // eslint-disable-next-line no-alert
      if (window.confirm(`Confirma a exclusão da disciplina?`)) {
        await api.delete(`disciplinas/${disciplina.id}`);

        const newDiscList = disciplinas.filter(
          (disciplinaParam) => disciplinaParam.id !== disciplina.id
        );

        setDisciplinas(newDiscList);

        toast.success(`Disciplina apagada com sucesso!`);
      }
    } catch (error) {
      toast.error(
        `Erro ao deletar disciplina, verifique os dados ou tente novamente`
      );
    }
  };

  const handleNewDisc = () => {
    history.push('/newdisciplinas');
  };

  return (
    <>
      <Menu />
      <Container>
        <h1>Disciplinas</h1>
        <div className="nv">
          <input id="myInput" placeholder="Busca" onChange={searchFunction} />
          <button type="button" onClick={handleNewDisc}>
            Cadastrar nova Disciplina
          </button>
        </div>
        <div className="tabela">
          <table id="myTable">
            <tr className="header">
              <th>Nome</th>
              <th>Professor</th>
              <th>Matricula Professor</th>
              <th>Carga Horária</th>
              <th>Horário</th>
              <th>Editar/Apagar</th>
            </tr>

            {disciplinas.map((disciplina) => (
              <tr key={disciplina.id}>
                <td>{disciplina.nome}</td>
                <td>{disciplina.nomeprof}</td>
                <td>{disciplina.professor_ass}</td>
                <td>{disciplina.carga_horaria}</td>
                <td>{disciplina.horario}</td>
                <td>
                  <Link
                    to={{
                      pathname: `/editdisciplina/${disciplina.id}`,
                      state: { disciplinasLocated: disciplina },
                    }}
                  >
                    <MdModeEdit color="#191970" size={30} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(disciplina)}
                  >
                    <MdDeleteForever color="#191970" size={30} />
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </Container>
    </>
  );
}
