import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import LoginAlunos from '../pages/LoginAlunos';
import LoginProfessor from '../pages/LoginProfessor';
import RegisterAluno from '../pages/Register/Aluno';
import RegisterProf from '../pages/Register/Professor';
import ModulesAluno from '../pages/Modules/MenuAluno';
import ModulesProfessor from '../pages/Modules/MenuProfessor';
import Modules from '../pages/Modules/MenuAdm';
import ListDisciplinasAlunos from '../pages/List/ListDisciplinasAlunos';
import ListAlunos from '../pages/List/ListAlunos';
import ListProfessors from '../pages/List/ListProfessors';
import NewDisciplina from '../pages/Disciplinas/New';
import EditDisciplina from '../pages/Disciplinas/Edit';
import CadastrarNotas from '../pages/Disciplinas/CadastrarNotas';
import ListDisciplinas from '../pages/List/ListDisciplinas';
import ListNotas from '../pages/List/ListNotas';
import UpdateAluno from '../pages/Updates/Aluno';
import UpdateProf from '../pages/Updates/Professor';
import CadastrarDisciplinaAluno from '../pages/Disciplinas/CadastrarDisciplinaAluno';
import Uploads from '../pages/Uploads';
import EditUploads from '../pages/Uploads/Edit';
import ListUploads from '../pages/List/ListUploads';
import ListDownloads from '../pages/List/ListDownloads';
import CadastrarRecuperacao from '../pages/Disciplinas/CadastrarNotas/CadastrarRecuperacao';
import EsqueceuSenhaAluno from '../pages/ForgotPass/Aluno';
import EsqueceuSenhaProfessor from '../pages/ForgotPass/Professor';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/loginalunos" exact component={LoginAlunos} />
      <Route path="/loginprofessor" exact component={LoginProfessor} />
      <Route path="/esqueceusenhaal" component={EsqueceuSenhaAluno} />
      <Route path="/esqueceusenhaprof" component={EsqueceuSenhaProfessor} />
      <Route path="/modules" component={Modules} isPrivate />
      <Route path="/editdisciplina" component={EditDisciplina} isPrivate />
      <Route
        path="/cadastrardisciplinaluno"
        component={CadastrarDisciplinaAluno}
        isPrivate
      />
      <Route path="/modulesaluno" component={ModulesAluno} isPrivate />
      <Route path="/modulesprofessor" component={ModulesProfessor} isPrivate />
      <Route
        path="/listdisciplinasalunos"
        component={ListDisciplinasAlunos}
        isPrivate
      />

      <Route path="/listalunos" component={ListAlunos} isPrivate />
      <Route path="/listprofessors" component={ListProfessors} isPrivate />
      <Route path="/newdisciplinas" component={NewDisciplina} isPrivate />

      <Route
        path="/editdisciplina/:disciplinaId"
        component={EditDisciplina}
        isPrivate
      />

      <Route path="/cadastrarnotas" component={CadastrarNotas} isPrivate />
      <Route
        path="/cadastrarnotas/:disciplinaId"
        component={CadastrarNotas}
        isPrivate
      />

      <Route
        path="/cadastrardisciplinaluno/:disciplinaId"
        component={CadastrarDisciplinaAluno}
        isPrivate
      />
      <Route path="/listdisciplinas" component={ListDisciplinas} isPrivate />
      <Route path="/listnotas" component={ListNotas} isPrivate />
      <Route path="/listuploads" component={ListUploads} isPrivate />
      <Route path="/listdownloads" component={ListDownloads} isPrivate />

      <Route path="/edituploads" component={EditUploads} isPrivate />
      <Route path="/edituploads/:uploadId" component={EditUploads} isPrivate />

      <Route
        path="/cadastrarrecuperacao"
        component={CadastrarRecuperacao}
        isPrivate
      />
      <Route
        path="/cadastrarrecuperacao/:disciplinaId"
        component={CadastrarRecuperacao}
        isPrivate
      />
      <Route path="/updatesenhaaluno" component={UpdateAluno} isPrivate />
      <Route path="/updatesenhaprof" component={UpdateProf} isPrivate />
      <Route path="/uploads" component={Uploads} isPrivate />
      <Route path="/registeraluno" component={RegisterAluno} />
      <Route path="/registerprof" component={RegisterProf} />
    </Switch>
  );
}
