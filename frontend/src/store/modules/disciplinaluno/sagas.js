import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../services/history';
import api from '../../../services/api';

export function* createDisciplinaAluno({ payload }) {
  try {
    const disciplinaluno = payload.data;

    yield call(api.post, 'disciplinasal', disciplinaluno);

    toast.success('Disciplina cadastrada com sucesso!');
  } catch (error) {
    toast.error('Erro ao cadastrar disciplina, verifique os dados...');
  }
}

export function* updateDisciplinaAluno({ payload }) {
  try {
    const nota = payload.data;

    yield call(api.put, 'disciplinasnota', nota);

    toast.success('Notas atualizadas com sucesso!');
    history.push('/cadastrarnotas');
  } catch (error) {
    toast.error('Erro ao atualizar notas, verifique os dados...');
  }
}

export default all([
  takeLatest(
    '@disciplinaluno/CREATE_DISCIPLINALUNO_REQUEST',
    createDisciplinaAluno
  ),
  takeLatest(
    '@disciplinaluno/UPDATE_DISCIPLINALUNO_REQUEST',
    updateDisciplinaAluno
  ),
]);
