export function signInRequest(email, password) {
  return {
    type: '@authprofessor/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSucess(token, prof) {
  return {
    type: '@authprofessor/SIGN_IN_SUCCESS',
    payload: { token, prof },
  };
}

export function signUpRequest(name, email, formacao, escolaridade, password) {
  return {
    type: '@authprofessor/SIGN_UP_REQUEST',
    payload: {
      name,
      email,
      formacao,
      escolaridade,
      password,
    },
  };
}
export function signFailure() {
  return { type: '@authprofessor/SIGN_FAILURE' };
}

export function signOut() {
  return {
    type: '@authprofessor/SIGN_OUT',
  };
}
