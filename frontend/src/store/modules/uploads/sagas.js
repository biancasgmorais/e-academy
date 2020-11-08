import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

export function* createUploads({ payload }) {
  try {
    const uploads = payload.data;

    yield call(api.post, 'uploads', uploads);

    toast.success('Upload cadastrado com sucesso!');
  } catch (error) {
    toast.error('Erro ao cadastrar upload, verifique os dados...');
  }
}

export function* updateUploads({ payload }) {
  try {
    const uploads = payload.data;

    yield call(api.put, 'uploads', uploads);

    toast.success('Upload atualizado com sucesso!');
    history.push('/listuploads');
  } catch (error) {
    toast.error('Erro ao atualizar upload, verifique os dados...');
  }
}

export default all([
  takeLatest('@uploads/CREATE_UPLOADS_REQUEST', createUploads),
  takeLatest('@uploads/UPDATE_UPLOADS_REQUEST', updateUploads),
]);
