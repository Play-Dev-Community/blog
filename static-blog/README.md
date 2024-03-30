# Blog Nativo - Play Dev

## Stack Utilizada

A primeira versão deste blog foi construída utilizando as seguintes tecnologias:

-   HTML
-   CSS
-   JavaScript
-   Banco de dados em formato JSON
-   Biblioteca "marked" para conversão de Markdown em HTML

## Estrutura do Projeto

O código-fonte do blog está localizado na pasta 'static-blog' deste repositório.

## Como Rodar o Projeto

### Passo 1: Instalação do Node.js e npm

Baixe e instale o Node.js e o npm em sua máquina seguindo as instruções abaixo:

-   Windows e macOS: Acesse o site oficial do [Node.js](https://nodejs.org/en/download) e siga as instruções de instalação padrão.
-   Linux (Ubuntu/Debian): Abra o terminal e execute os seguintes comandos:
    
    bashCopy code
    
    `sudo apt update
    sudo apt install nodejs npm` 
    
-   Linux (Fedora): Abra o terminal e execute os seguintes comandos:
    
    bashCopy code
    
    `sudo dnf update
    sudo dnf install nodejs npm` 
    

Após a instalação, verifique se tudo ocorreu bem executando os comandos:

bashCopy code

`node -v
npm -v` 

### Passo 2: Instalação das Bibliotecas

Instale as bibliotecas necessárias globalmente com os seguintes comandos:

bashCopy code

`npm install -g http-server
npm install -g json-server` 

### Passo 3: Rodando o Projeto

1.  Abra o terminal e navegue até a raiz do projeto.
2.  Inicie o servidor HTTP com o comando:

bashCopy code

`http-server` 

3.  Abra um novo terminal, navegue até a pasta 'data' dentro da pasta 'static-blog', e inicie o servidor JSON com o comando:

bashCopy code

`cd static-blog/data
json-server --watch db.json` 

Após seguir esses passos, você terá:

- Servidor rodando em http://localhost:8080
- Banco de Dados rodando em http://localhost:3000

. Divirta-se explorando o blog e contribuindo com novos conteúdos! 🚀✨