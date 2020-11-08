/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';

import { useDispatch } from 'react-redux';

import { updateUploadsRequest } from '../../../store/modules/uploads/action';

import Menu from '../../../components/Header/Professor';
import { Container, Content } from './styles';

import voltar from '../../../assets/voltar.png';

const schema = Yup.object().shape({
  id: Yup.number()
    .transform((value) => (!value ? undefined : value))
    .integer(),
  codigodisciplina: Yup.number().required(),
  link: Yup.string().required(),
  descricao: Yup.string().required(),
});

export default function Edit({ location }) {
  const dispatch = useDispatch();

  const { uploadsLocated } = location.state || {};
  const [upload] = useState(uploadsLocated);

  const handleSubmit = (data) => {
    data = {
      ...data,
      id: upload.id,
    };
    dispatch(updateUploadsRequest(data));
  };

  return (
    <>
      <Menu />
      <Container>
        <Content>
          <h1>Edição de Upload</h1>
          <Form
            initialData={upload}
            onSubmit={handleSubmit}
            schema={schema}
            autoComplete="off"
          >
            <h2>Código da Disciplina</h2>
            <Input name="codigodisciplina" type="number" />
            <h2>Link</h2>
            <Input name="link" type="ulr" />
            <h2>Descrição</h2>
            <Input type="text" name="descricao" />
            <div className="botoes">
              <button type="submit">Editar</button>
            </div>
          </Form>

          <div className="back">
            <Link to="/listuploads">
              <img src={voltar} alt="voltar" />
            </Link>
          </div>
        </Content>
      </Container>
    </>
  );
}

Edit.defaultProps = {
  location: PropTypes.shape({
    state: {},
  }),
};

Edit.propTypes = {
  location: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    state: PropTypes.object,
  }),
};
