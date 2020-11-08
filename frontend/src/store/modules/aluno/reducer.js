import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function aluno(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@authaluno/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.aluno;
        break;
      }
      case '@aluno/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@authaluno/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}
