# e-academy
Projeto de sistema Web para a disciplina Programação Web

# Linguagens Utilizadas
* React.js(frontend)
* Node.js (backend)

# Resumo do Sistema
Esse sistema foi desenvolvido para ser um sistema academico online, onde alunos e professores tem acessos a funcionalidades, juntamente com o administrador do sistema (já vem previamente inserido no banco).
As funcionalidades são:

##Alunos:
* podem se cadastrar em disciplinas;
* Visualizar arquivos inseridos nas disciplinas;
* Atualizar seu perfil e sua senha;
* Visualizar suas notas por disciplina;
* Recuperar sua senha por e-mail;
* Excluir seu perfil;

##Professores:
* Inserir arquivos nas disciplinas;
* Atualizar seu perfil e sua senha;
* Recuperar sua senha por email;
* Atualizar as notas de cada aluno por disciplina;
* Excluir seu perfil;

##Administrador:
* Liberar o acesso de usuários ao sistema: professores e alunos; (Ao liberar o acesso é enviado uma mensagem ao email do usuário o notificando da liberação)
* Cadastrar professores nas disciplinas;
* Visualizar dados de todos os usuários cadastrados no sistema;

# Descrição
* Usa JWT para autenticação
* bcrypt para encriptação de senhas
* A validação de dados é feita por protocolo Yup

# Rodando o projeto
* É necessário ter o postgres
* É necessário ter o Node.js instalado
* O gerenciador de pacotes Yarn deve estar instalado e habilitado
## Backend
* Para a instação dos pacotes necessários, usar o comando: yarn
* Renomear o arquivo .env.example para .env e preencher as váriaveis de desenvolvimento, com as suas credenciais.
* Com o código do backend aberto na IDE de sua escolha, usar o comando: yarn sequelize db:migrate, para inserir as tabelas no banco de dados.
* Para rodar o código do backend em modo desenvolvedor, usar o comando: yarn dev 
## Frontend
* Para a instação dos pacotes necessários, usar o comando: yarn
* Para rodar o código do frontend em modo desenvolvedor, usar o comando: yarn start
