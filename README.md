# Github list users

Esse projeto tem como objetivo buscar e listar os usuários do github, mostrando detalhes do usuário e armazenando em cachê os usuários já listados anteriormente.

Nele também consta a realização de testes unitários e testes E2E, com a finalidade de manter a qualidade do código e do produto final.

## Tecnologias utilizadas

    - Angular 13
    - Jasmine
    - Cypress

## Dependências do projeto

Para rodar o projeto, é necessário ter 2 tecnologias instalada na máquina executora. As técnologias são:

    - Node
    - Angular CLI

Para a instalação do `node` basta entrar no site `https://nodejs.org/en/` e realizar o download e o passo a passo de instalação comum.

Já para a instalação do `Angular CLI` é necessário ter o `NPM`, que já é instalado automaticamente junto com o node. Depois da instalação do `node`, basta abrir um prompt de comando e rodar o comando: `npm install -g @angular/cli`, e o `Angular CLI` será instalado globalmente em sua máquina. Para mais detalhes basta entrar no link: `https://angular.io/cli`.

## Rodando o projeto

Para rodar o projeto, basta rodar o comando `npm start` ou `ng serve`. Logo após o término do build, navegue no link `http://localhost:4200/` para ver o projeto no navegador.

## Testes

- Jasmine: Para rodar os testes unitários com jasmine, basta rodar o comando `npm test` ou `ng test`. Logo após o término do build, será aberto automaticamente um navegador na rota `http://localhost:9876/` para ver os resultados dos testes. Além disso, os resultados também serão apresentados no prompt de comando.

- Cypress: Para rodar os testes E2E com cypress, é necessário que o projeto esteja rodando em paralelo, então, antes de rodar o comando do cypress, inicio o projeto. Logo após iniciar o projeto, basta rodar o comando `npm cypress:open` ou `npm cypress:run`. 
- - Comando `run`: Esse comando vai executar os testes em background e irá exibir o resultado no prompt de comando.
- - Comando `open`: Será aberto automaticamente um navegador na rota `http://localhost:4200/__/#/tests/__all` com todos os arquivos de testes. Depois basta clicar no arquivo que deseja testar que o cypress irá iniciar os testes automaticamente e te trará os resultados.

## Observações 

 - Sobre a arquitetura: Eu desenvolvi uma arquitetura escalável visando suportar grandes projetos e manter um padrão fácil e estruturado, podendo criar projetos de todos os níveis, mantendo a qualidade de código e performance.

 - Sobre os componentes: Eu decidi não utilizar nenhum componente de biblioteca externa (com exceção do tooltip -- ngx-bootstrap) para poder assim mostrar melhor o uso dos componentes, a qualidade de código e a forma que escrevo os mesmos.
 
 - Sobre o estilo da página: Eu decidi utilizar apenas meu scss, para assim mostrar a forma que codifico e estilizo as páginas, com a finalidade de interpretação da minha forma de trabalho com css