export const createDisciplinaRequest = (data) => {
  return {
    type: '@disciplina/CREATE_DISCIPLINA_REQUEST',
    payload: { data },
  };
};

export const updateDisciplinaRequest = (data) => {
  return {
    type: '@disciplina/UPDATE_DISCIPLINA_REQUEST',
    payload: { data },
  };
};
