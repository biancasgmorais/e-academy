import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'sigacademy',
      storage,
      whitelist: [
        'auth',
        'authaluno',
        'authprofessor',
        'user',
        'prof',
        'aluno',
      ],
    },
    reducers
  );
  return persistedReducer;
};
