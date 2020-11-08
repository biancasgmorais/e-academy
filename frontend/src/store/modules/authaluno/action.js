export function signInRequest(email, password) {
  return {
    type: '@authaluno/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSucess(token, aluno) {
  return {
    type: '@authaluno/SIGN_IN_SUCCESS',
    payload: { token, aluno },
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: '@authaluno/SIGN_UP_REQUEST',
    payload: {
      name,
      email,
      password,
    },
  };
}
export function signFailure() {
  return { type: '@authaluno/SIGN_FAILURE' };
}

export function signOut() {
  return {
    type: '@authaluno/SIGN_OUT',
  };
}
