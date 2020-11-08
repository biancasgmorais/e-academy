import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { updateProfileSuccess, updateProfileFailure } from './action';
import history from '../../../services/history';
import api from '../../../services/api';

export function* updateProf({ payload }) {
  try {
    const prof = payload.data;

    yield call(api.put, 'professors', prof);

    toast.success('Professor atualizado com sucesso!');
    history.push('/modulesprofessor');
  } catch (error) {
    toast.error('Erro ao atualizar professor, verifique os dados...');
  }
}

export function* updateProfile({ payload }) {
  try {
    const profile = payload.data;

    const response = yield call(api.put, 'professorsenha', profile);
    toast.success('Senha atualizada com sucesso.');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error(
      err.response.data.userMessage ||
        'Erro ao atualizar senha, verifique seus dados.'
    );
    yield put(updateProfileFailure());
  }
}

export function* forgotPass({ payload }) {
  try {
    const { email } = payload;

    yield call(api.post, 'mailprof', { email });

    toast.success(
      'Foi enviado uma mensagem com a nova senha para o email cadastrado!'
    );
    history.push('/loginprofessor');
  } catch (error) {
    toast.error('Erro ao enviar email, verifique os dados...');
  }
}

export default all([
  takeLatest('@prof/UPDATE_PROF_REQUEST', updateProf),
  takeLatest('@prof/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@prof/FORGOT_PASS_REQUEST', forgotPass),
]);
