import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function prof(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@authprofessor/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.prof;
        break;
      }
      case '@prof/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@authprofessor/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}
