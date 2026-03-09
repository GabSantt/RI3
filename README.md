Repositório de resolução do RI3 , atividade proposta pelo prof° Gerson na aula de Técnicas de Programção I.
O exercício aqui presente utiliza-se das aplicações em JavaScript, explorando os conceitos de Programção Orientada a Objetos.
Em todos foram colocados comentários de Easter Eggs :)

*Pré-Requisitos*
Para inicializar o projeto, é necessário o uso de Node.js instalado na máquina.

1. Instalar o Node.js (Windows)

winget install OpenJS.NodeJS.LTS

2. Instalar o módulo do Node
Necessário para o funcionamento do módulo readline no TypeScript (não obrigatório se a pasta node_modules já estiver no repositório).(Usado nos RI 5 e RI 6)

npm install -D @types/node

- Como inicializar os projetos Para Projetos JavaScript (RI1 ao RI4) Para executar diretamente pelo terminal, use o comando node seguido do nome do arquivo:

node nomeDoArquivo.js

(Exemplo: node RI1.js)

Para Projetos TypeScript (RI5 e RI6) Primeiro é necessário compilar o código para JavaScript e depois executá-lo:

tsc nomeDoArquivo.ts
node nomeDoArquivo.js


Descrição do Exercício:
Continuação do RI2, criando a empresa ficticia que contém/pode conter múltiplos Clientes e Telefones, porém com apenas um Endereço cadastrado.


