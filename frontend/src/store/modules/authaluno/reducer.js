import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signedal: false,
  loading: false,
};

export default function aluno(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@authaluno/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@authaluno/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signedal = true;
        draft.loading = false;
        break;
      }
      case '@authaluno/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@authaluno/SIGN_OUT': {
        draft.token = null;
        draft.signedal = false;
        break;
      }
      default:
    }
  });
}
