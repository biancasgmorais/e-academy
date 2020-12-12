export const updateProfileRequest = (data) => {
  return {
    type: '@prof/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
};

export function updateProfileSuccess(profile) {
  return {
    type: '@prof/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@prof/UPDATE_PROFILE_FAILURE',
  };
}

export function forgotPass(email) {
  return {
    type: '@prof/FORGOT_PASS_REQUEST',
    payload: { email },
  };
}
