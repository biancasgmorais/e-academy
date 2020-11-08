/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';

import { MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import Menu from '../../../components/Header/Professor';
import { Container } from './styles';

import voltar from '../../../assets/voltar.png';
import filterTable from './filterTable';
import searchFunction from '../../../components/searchFunction';

export default function ListUploads() {
  const [uploads, setUploads] = useState([]);
  const [disciplinas, setDisciplinas] = useState([]);
  useEffect(() => {
    const loadUploads = async () => {
      const response = await api.get('uploads');
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

  const handleDelete = async (upload) => {
    try {
      // eslint-disable-next-line no-alert
      if (window.confirm(`Confirma a exclusão do upload?`)) {
        await api.delete(`uploads/${upload.id}`);

        const newUpList = uploads.filter(
          (uploadParam) => uploadParam.id !== upload.id
        );

        setUploads(newUpList);

        toast.success(`Upload apagado com sucesso!`);
      }
    } catch (error) {
      toast.error(
        `Erro ao deletar upload, verifique os dados ou tente novamente`
      );
    }
  };

  return (
    <>
      <Menu />
      <Container>
        <h1>Uploads</h1>
        <div className="box">
          <select id="mySelector" onInput={filterTable}>
            <option>Escolha a disciplina</option>
            {disciplinas.map((disciplina) => (
              <option>{disciplina.nomeForm}</option>
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
              <th>Link</th>
              <th>Descrição</th>
              <th>Editar/Apagar</th>
            </tr>

            {uploads.map((upload) => (
              <tr key={upload.id}>
                <td>{upload.nomedisciplinaForm}</td>
                <td>{upload.linkForm}</td>
                <td>{upload.descricaoForm}</td>
                <td>
                  <Link
                    to={{
                      pathname: `/edituploads/${upload.id}`,
                      state: { uploadsLocated: upload },
                    }}
                  >
                    <MdModeEdit color="#191970" size={30} />
                  </Link>
                  <button type="button" onClick={() => handleDelete(upload)}>
                    <MdDeleteForever color="#191970" size={30} />
                  </button>
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
