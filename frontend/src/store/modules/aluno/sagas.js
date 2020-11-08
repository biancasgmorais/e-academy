import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { updateProfileSuccess, updateProfileFailure } from './action';
import history from '../../../services/history';
import api from '../../../services/api';

export function* updateAluno({ payload }) {
  try {
    const aluno = payload.data;

    yield call(api.put, 'alunos', aluno);

    toast.success('Aluno atualizado com sucesso!');
    history.push('/modulesaluno');
  } catch (error) {
    toast.error('Erro ao atualizar aluno, verifique os dados...');
  }
}

export function* updateProfile({ payload }) {
  try {
    const profile = payload.data;

    const response = yield call(api.put, 'alunosenha', profile);
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

    yield call(api.post, 'mailal', { email });

    toast.success(
      'Foi enviado uma mensagem com a nova senha para o email cadastrado!'
    );
    history.push('/loginalunos');
  } catch (error) {
    toast.error('Erro ao enviar email, verifique os dados...');
  }
}

export default all([
  takeLatest('@aluno/UPDATE_ALUNO_REQUEST', updateAluno),
  takeLatest('@aluno/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@aluno/FORGOT_PASS_REQUEST', forgotPass),
]);
