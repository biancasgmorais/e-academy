import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import AlunoController from './app/controllers/AlunoController';
import ProfessorController from './app/controllers/ProfessorController';
import DisciplinaController from './app/controllers/DisciplinaController';
import DisciplinaProfessorController from './app/controllers/DisciplinaProfessorController';
import DisciplinaAlunoController from './app/controllers/DisciplinaAlunoController';
import DisciplinaNotaController from './app/controllers/DisciplinaNotaController';
import UploadsController from './app/controllers/UploadsController';
import MailController from './app/controllers/MailController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/alunos', AlunoController.store);
routes.put('/alunos', AlunoController.update);

routes.post('/professors', ProfessorController.store);
routes.put('/professors', ProfessorController.update);

routes.post('/mail', MailController.lostpass);
routes.post('/mailprof', MailController.lostpassProf);
routes.post('/mailal', MailController.lostpassAl);

routes.post('/sessions', SessionController.store);
routes.post('/sessionsprof', SessionController.storeProf);
routes.post('/sessionsaluno', SessionController.storeAluno);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.get('/users', UserController.index);

routes.put('/usersal', UserController.updateAluno);
routes.put('/usersprof', UserController.updateProf);

routes.get('/professors', ProfessorController.index);
routes.delete('/professors/:profId', ProfessorController.delete);
routes.put('/professorsenha', ProfessorController.updatesenha);

routes.get('/alunos', AlunoController.index);
routes.delete('/alunos/:alunoId', AlunoController.delete);
routes.put('/alunosenha', AlunoController.updatesenha);

routes.post('/disciplinas', DisciplinaController.store);
routes.put('/disciplinas', DisciplinaController.update);
routes.get('/disciplinas', DisciplinaController.index);
routes.delete('/disciplinas/:disciplinaId', DisciplinaController.delete);

routes.get('/disciplinasprof', DisciplinaProfessorController.index);

routes.post('/disciplinasal', DisciplinaAlunoController.store);
routes.get('/disciplinasal', DisciplinaAlunoController.index);
routes.delete(
  '/disciplinasal/:disciplinalId',
  DisciplinaAlunoController.delete
);

routes.get('/todosdisciplinasal', DisciplinaAlunoController.index2);

routes.put('/disciplinasnota', DisciplinaNotaController.update);
routes.get('/disciplinasnota', DisciplinaNotaController.index);

routes.get('/updatealuno', AlunoController.index2);
routes.get('/updateprof', ProfessorController.index2);

routes.post('/uploads', UploadsController.store);
routes.put('/uploads', UploadsController.update);
routes.get('/uploads', UploadsController.index);
routes.delete('/uploads/:uploadsId', UploadsController.delete);

routes.get('/uploadsal', UploadsController.index2);

export default routes;
