export const createDisciplinaAlunoRequest = (data) => {
  return {
    type: '@disciplinaluno/CREATE_DISCIPLINALUNO_REQUEST',
    payload: { data },
  };
};

export const updateDisciplinaAlunoRequest = (data) => {
  return {
    type: '@disciplinaluno/UPDATE_DISCIPLINALUNO_REQUEST',
    payload: { data },
  };
};
