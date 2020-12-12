/* eslint-disable react/button-has-type */
import React from 'react';
import { MdExitToApp } from 'react-icons/md';
import { RiMenu4Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';

import { signOut } from '../../../store/modules/authprofessor/action';

import { Content } from '../styles';
import logo2 from '../../../assets/logo.png';

export default function Professor() {
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
            <a href="/modulesprofessor">Disciplinas</a>
            <a href="/listnotas">Notas</a>
            <a href="/listuploads">Uploads</a>
            <a href="/updatesenhaprof">Meu perfil</a>

            <button type="button" onClick={handleSignOut}>
              <MdExitToApp color="#4a0072" size={20} />
            </button>
          </div>
          <img src={logo2} alt="e-academy" />
        </div>
      </Content>
    </>
  );
}
