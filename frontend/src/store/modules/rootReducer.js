import { combineReducers } from 'redux';

import auth from './auth/reducer';
import authaluno from './authaluno/reducer';
import authprofessor from './authprofessor/reducer';
import user from './user/reducer';
import disciplina from './disciplina/reducer';
import prof from './prof/reducer';
import aluno from './aluno/reducer';
import disciplinaluno from './disciplinaluno/reducer';
import uploads from './uploads/reducer';

export default combineReducers({
  auth,
  authaluno,
  authprofessor,
  user,
  disciplina,
  prof,
  aluno,
  disciplinaluno,
  uploads,
});
