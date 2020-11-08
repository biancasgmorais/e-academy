/* eslint-disable react/button-has-type */
import React from 'react';
import { MdExitToApp } from 'react-icons/md';
import { RiMenu4Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../../../store/modules/authaluno/action';

import { Content } from '../styles';
import logo2 from '../../../assets/logo.png';

export default function Aluno() {
  const dispatch = useDispatch();
  const perfil = useSelector((state) => state.aluno.profile);

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
            <a href="/listdisciplinas">Cadastrar Disciplinas</a>
            <a href="/modulesaluno">Exibir disciplinas matriculadas</a>
            <a href="/listdownloads">Downloads</a>
            <a href="/updatesenhaaluno">Meu perfil</a>
            <button type="button" onClick={handleSignOut}>
              <MdExitToApp color="#4a0072" size={20} />
            </button>
          </div>
          <img src={logo2} alt="e-academy" />
        </div>
        <div className="usuario">
          <strong>Bem-vind@, Alun@ {perfil.name}</strong>
        </div>
      </Content>
    </>
  );
}
