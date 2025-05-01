# e-academy

**e-academy** é um sistema web desenvolvido para a disciplina de **Programação Web**, com o objetivo de fornecer um ambiente acadêmico online para **alunos**, **professores** e **administradores**. O sistema foi desenvolvido utilizando **React.js** no frontend e **Node.js** no backend, com **PostgreSQL** para armazenamento de dados.

## Linguagens Utilizadas

- **Frontend**: React.js
- **Backend**: Node.js

## Resumo do Sistema

O **e-academy** é um sistema de gerenciamento acadêmico online com funcionalidades para diferentes tipos de usuários:

### **Alunos**:
- Cadastro em disciplinas.
- Visualização de arquivos inseridos nas disciplinas.
- Atualização de perfil e senha.
- Visualização de notas por disciplina.
- Recuperação de senha por e-mail.
- Exclusão de perfil.

### **Professores**:
- Inserção de arquivos nas disciplinas.
- Atualização de perfil e senha.
- Recuperação de senha por e-mail.
- Atualização das notas dos alunos por disciplina.
- Exclusão de perfil.

### **Administrador**:
- Liberação de acesso a usuários (professores e alunos), com envio de notificação por e-mail.
- Cadastro de professores nas disciplinas.
- Visualização de dados de todos os usuários cadastrados no sistema.

## Descrição

- **Autenticação**: Utiliza **JWT** para autenticação de usuários.
- **Segurança**: Senhas são criptografadas utilizando **bcrypt**.
- **Validação de Dados**: A validação dos dados é realizada com o protocolo **Yup**.

## Rodando o Projeto

### **Pré-requisitos**
- **PostgreSQL** instalado e configurado.
- **Node.js** instalado.
- **Yarn** como gerenciador de pacotes.

### **Backend**

1. Instale as dependências necessárias:
   ```bash
   yarn
   ```

2. Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis de ambiente com suas credenciais de desenvolvimento.

3. Com o código do backend aberto na sua IDE, execute o seguinte comando para inserir as tabelas no banco de dados:
   ```bash
   yarn sequelize db:migrate
   ```

4. Para rodar o backend em modo desenvolvedor, use o comando:
   ```bash
   yarn dev
   ```

### **Frontend**

1. Instale as dependências necessárias:
   ```bash
   yarn
   ```

2. Para rodar o frontend em modo desenvolvedor, use o comando:
   ```bash
   yarn start
   ```
