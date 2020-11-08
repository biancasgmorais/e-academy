export function updateAcessAluno(matricula_aluno, name, email) {
  return {
    type: '@user/UPDATE_ACESS_ALUNO',
    payload: { matricula_aluno, name, email },
  };
}

export function updateAcessProfessor(name, email, matricula_prof) {
  return {
    type: '@user/UPDATE_ACESS_PROFESSOR',
    payload: { name, email, matricula_prof },
  };
}

export const updateProfileRequest = (data) => {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
};

export const updateProfileSuccess = (profile) => {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
};

export const updateProfileFailure = () => {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
};
