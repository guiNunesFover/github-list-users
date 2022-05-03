# Github list users

Esse projeto tem como objetivo buscar e listar os usuários do github, mostrando detalhes do usuário e armazendo em cachê os usuários já listados anteriormente.

Nele também consta a realização de testes unitários e testes E2E, com a finalidade de manter a qualidade do código e do produto final.

## Tecnologias utilizadas

    - Angular 13
    - Jasmine
    - Cypress

## Dependências do projeto

Para rodar o projeto, é necessário 2 tecnologias instalada na máquina executora. As técnologias são:

    - Node
    - Angular CLI

Para a instalação do `node` basta entrar no site `https://nodejs.org/en/` e realizaro o download e o passo a passo de isntalação comum. 

Já para a instalação do `Angular CLI` é necessário ter o `NPM`, que já é instalado automaticamente junto com o node. Depois da instalação do `node`, basta abrir um prompt de comando e rodar o comando: `npm install -g @angular/cli`, e o `Angular CLI` será instalado globalmente em sua máquina. Para mais detalhes basta entrar no link: `https://angular.io/cli`.

## Rodando o projeto

Para rodar o projeto, basta rodar o comando `npm start` ou `ng serve`. Logo após o término do build, navegue no link `http://localhost:4200/` para ver o projeto no navegador.

## Rodando os testes

Para rodar os testes, basta rodar o comando `npm test` ou `ng test`. Logo após o término do build, será aberto automaticamente um navegador na rota `http://localhost:9876/` para ver os resultados dos testes. Além disso, os resultados também serão apresentados no prompt de comando.


## Observações 

 - Sobre a arquitetura: Eu desenvolvi uma arquitetura escalável visando suportar grandes projetos e manter um padrão fácil e estruturado, assim podendo criar projetos de todos os níveis mantendo a qualidade de código e performance.
 
 - Sobre os componentes: Eu decidi não utilizar nenhum component de biblioteca externa (com exceção do tooltip -- ngx-bootstrap) para poder assim mostrar melhor o uso dos componentes, a qualidade de código e a forma que escrevo os mesmo.
 
 - Sobre o estilo da página: Eu decidi utilizar apenas meu scss, para assim mostrar a forma que eu codifico e estilizo as páginas, com a finalidade de interpretação da minha forma de trabalho com css