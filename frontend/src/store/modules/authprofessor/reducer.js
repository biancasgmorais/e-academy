import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signedprof: false,
  loading: false,
};

export default function professor(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@authprofessor/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@authprofessor/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signedprof = true;
        draft.loading = false;
        break;
      }
      case '@authprofessor/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@authprofessor/SIGN_OUT': {
        draft.token = null;
        draft.signedprof = false;
        break;
      }
      default:
    }
  });
}
