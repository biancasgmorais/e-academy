import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

export function* createDisciplina({ payload }) {
  try {
    const disciplina = payload.data;

    yield call(api.post, 'disciplinas', disciplina);

    toast.success('Disciplina cadastrada com sucesso!');
  } catch (error) {
    toast.error('Erro ao cadastrar disciplina, verifique os dados...');
  }
}

export function* updateDisciplina({ payload }) {
  try {
    const disciplina = payload.data;

    yield call(api.put, 'disciplinas', disciplina);

    toast.success('Disciplina atualizada com sucesso!');
    history.push('/modules');
  } catch (error) {
    toast.error('Erro ao atualizar disciplina, verifique os dados...');
  }
}

export default all([
  takeLatest('@disciplina/CREATE_DISCIPLINA_REQUEST', createDisciplina),
  takeLatest('@disciplina/UPDATE_DISCIPLINA_REQUEST', updateDisciplina),
]);
