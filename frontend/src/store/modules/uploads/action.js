export const createUploadsRequest = (data) => {
  return {
    type: '@uploads/CREATE_UPLOADS_REQUEST',
    payload: { data },
  };
};

export const updateUploadsRequest = (data) => {
  return {
    type: '@uploads/UPDATE_UPLOADS_REQUEST',
    payload: { data },
  };
};
