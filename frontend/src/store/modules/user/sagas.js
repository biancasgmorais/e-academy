import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../services/history';
import api from '../../../services/api';

import { updateProfileSuccess, updateProfileFailure } from './action';

export function* updateProfile({ payload }) {
  try {
    const { email, ...rest } = payload.data;

    const profile = {
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao atualizar perfil, confira seus dados');
    yield put(updateProfileFailure());
  }
}

export function* updateAcessAluno({ payload }) {
  try {
    const { matricula_aluno, name, email } = payload;

    yield call(api.put, 'usersal', {
      matricula_aluno,
      name,
      email,
    });

    toast.success('Aluno liberado com sucesso!');
    history.push('/listalunos');
  } catch (error) {
    toast.error('Erro ao liberar aluno, verifique os dados...');
  }
}

export function* updateAcessProfessor({ payload }) {
  try {
    const { name, email, matricula_prof } = payload;

    yield call(api.put, 'usersprof', {
      name,
      email,
      matricula_prof,
    });

    toast.success('Professor liberado com sucesso!');
    history.push('/listprofessors');
  } catch (error) {
    toast.error('Erro ao liberar professor, verifique os dados...');
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/UPDATE_ACESS_ALUNO', updateAcessAluno),
  takeLatest('@user/UPDATE_ACESS_PROFESSOR', updateAcessProfessor),
]);
