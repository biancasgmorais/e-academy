export const updateAlunoRequest = (data) => {
  return {
    type: '@aluno/UPDATE_ALUNO_REQUEST',
    payload: { data },
  };
};

export const updateProfileRequest = (data) => {
  return {
    type: '@aluno/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
};

export const updateProfileSuccess = (profile) => {
  return {
    type: '@aluno/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
};

export const updateProfileFailure = () => {
  return {
    type: '@aluno/UPDATE_PROFILE_FAILURE',
  };
};

export function forgotPass(email) {
  return {
    type: '@aluno/FORGOT_PASS_REQUEST',
    payload: { email },
  };
}
