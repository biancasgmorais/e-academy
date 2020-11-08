import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import authaluno from './authaluno/sagas';
import authprofessor from './authprofessor/sagas';
import user from './user/sagas';
import disciplina from './disciplina/sagas';
import prof from './prof/sagas';
import aluno from './aluno/sagas';
import disciplinaluno from './disciplinaluno/sagas';
import uploads from './uploads/sagas';

export default function* rootSaga() {
  return yield all([
    auth,
    authaluno,
    authprofessor,
    user,
    disciplina,
    prof,
    aluno,
    disciplinaluno,
    uploads,
  ]);
}
