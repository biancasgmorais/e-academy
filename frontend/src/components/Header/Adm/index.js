/* eslint-disable react/button-has-type */
import React from 'react';
import { MdExitToApp } from 'react-icons/md';
import { RiMenu4Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { signOut } from '../../../store/modules/auth/action';
import { Content } from '../styles';
import logo2 from '../../../assets/logo.png';

export default function Adm() {
  const dispatch = useDispatch();
  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <>
      <Content>
        <div className="dropdown">
          <button className="dropbtn">
            <RiMenu4Line color="#ffff" size={15} />
          </button>
          <div className="dropdown-content">
            <a href="/modules">Gerenciar Disciplinas</a>
            <a href="/listprofessors">Professores</a>
            <a href="/listalunos">Alunos</a>
            <a href="/listdisciplinasalunos">Alunos e Disciplinas</a>
            <button type="button" onClick={handleSignOut}>
              <MdExitToApp color="#4a0072" size={20} />
            </button>
          </div>
          <img src={logo2} alt="e-academy" />
        </div>
        <div className="usuario">
          <strong>Bem-vind@, Administrador</strong>
        </div>
      </Content>
    </>
  );
}
