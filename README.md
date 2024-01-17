# Projeto Agenda

## Visão Geral

O projeto Agenda é uma aplicação web para gerenciamento de contatos, onde os usuários podem criar uma conta, fazer login, salvar, visualizar e editar contatos. A aplicação utiliza tecnologias como HTML, CSS e JavaScript para o frontend, enquanto o backend é desenvolvido em Node.js com o framework Express. Os dados dos usuários e contatos são armazenados no banco de dados MongoDB. A senha dos usuários é devidamente encriptografada antes de ser salva no banco de dados.

## Requisitos do Sistema

Para rodar o projeto localmente, você precisará das seguintes dependências:

- Node.js (versão recomendada: 14.x ou superior)
- MongoDB (serviço local ou remoto)

## Configuração do Ambiente

1. Clone o repositório do projeto:

   ```bash
   git clone https://github.com/seu-usuario/projeto_agenda.git
   cd projeto_agenda


## Instale as dependências:

npm install

## Estrutura do Projeto

* frontend: Contém os arquivos HTML, CSS e JavaScript relacionados à interface do usuário.
* public: Armazena recursos estáticos acessíveis diretamente pelo navegador (por exemplo, imagens, folhas de estilo).
* server.js: Arquivo principal do servidor backend.
* models: Contém os modelos do Mongoose para representar dados no MongoDB.
* routes: Define as rotas da aplicação.
( views: Contém os arquivos de modelo EJS para renderização das páginas.

## Funcionalidades

1. Registro de Usuário
Método: POST
Parâmetros:
 * `email`: Endereço de e-mail
 * `senha`: Senha escolhida pelo usuário
* A senha é encriptografada utilizando a biblioteca bcrypt antes de ser armazenada no banco de dados.

2. Login de Usuário
 * Método: POST
* Parâmetros:
`email`: Endereço de e-mail
`senha`: Senha
* Validação da senha utilizando a senha armazenada no banco de dados.

3. Salvar Contato
* Método: POST
* Parâmetros:
 * `nome`: Nome do contato
 * `email`: Endereço de e-mail do contato
 * `telefone`: Número de telefone do contato
*Salva o contato associado ao usuário autenticado no banco de dados.

4. Visualizar Contatos
 * Método: GET
 * Exibe a lista de contatos salvos pelo usuário autenticado.

5. Editar Contato
 * Método: GET
 * Permite ao usuário editar um contato existente com base no ID.
6. Logout
 * Método: GET
 * Encerra a sessão do usuário e redireciona para a página de login.

## Comandos NPM
 * npm start: Inicia o servidor usando Nodemon, ignorando os diretórios public e frontend.
 * npm run dev: Inicia o processo de webpack para desenvolvimento.

## Dependências do Projeto
### Dependências de Produção
 * bcryptjs: Para encriptação de senhas.
 * bootstrap: Framework CSS para estilização.
 * connect-flash: Para exibir mensagens flash.
 * connect-mongo: Sessões armazenadas no MongoDB.
 * core-js: Biblioteca para suportar recursos ECMAScript.
 * css-loader: Carrega arquivos CSS no webpack.
 * csurf: Proteção contra CSRF.
 * dotenv: Carrega variáveis de ambiente de um arquivo .env.
 * ejs: Motor de modelo para renderização de páginas.
 * express: Framework web para Node.js.
 * express-session: Gerenciamento de sessão.
 * helmet: Middleware para segurança HTTP.
 * mongoose: Modelagem de objetos MongoDB.
 * regenerator-runtime: Suporte para recursos async/await.
 * style-loader: Adiciona estilos ao DOM usando tags <style>.
 * validator: Biblioteca para validação de dados.
 * Dependências de Desenvolvimento
 * @babel/cli: CLI para Babel.
 * @babel/core: Núcleo do Babel.
 * @babel/preset-env: Conjunto de presets para o Babel.
 * babel-loader: Carrega arquivos JavaScript usando Babel e webpack.
 * nodemon: Monitora alterações nos arquivos e reinicia o servidor automaticamente.
 * webpack: Empacotador de módulos.
 * webpack-cli: Interface de linha de comando do webpack.
   
# Conclusão
O projeto Agenda fornece uma solução completa para o gerenciamento de contatos, com autenticação segura, armazenamento de dados no MongoDB e uma interface amigável para os usuários. Certifique-se de seguir as instruções de configuração e explore as funcionalidades da aplicação.

Espero que este guia seja útil para o desenvolvimento, teste e implementação do projeto Agenda. Se surgirem dúvidas, consulte a documentação das bibliotecas utilizadas e aprimore conforme necessário. Boa codificação!

### Sugestões e Melhorias

Este projeto está em constante evolução, e aceito sugestões para melhorias. Caso tenha ideias, correções ou novos recursos que gostaria de sugerir, sinta-se à vontade para abrir uma [issue]((https://github.com/Samuelbattisti/Agenda/issues) ou enviar um [pull request](https://github.com/Samuelbattisti/Agenda.git). Sua contribuição é valiosa para o crescimento contínuo deste projeto.

Espero que desfrute utilizando o projeto Agenda e estamos ansiosos para receber suas sugestões!

Boa codificação!
