---
author: Gabriel Moodlight
pubDatetime: 2024-04-23T00:50:00.000Z
modDatetime: 2024-04-23T00:50:00.000Z
title: DOM
slug: dom
featured: false
draft: false
tags:
  - web
  - dom
  - javascript
description: Entenda o essencial sobre DOM!
---

## Data Object Model - O que é?

O DOM, ou Modelo de Objeto de Documento, é uma representação hierárquica em forma de árvore de um documento HTML.Pense nele como uma estrutura organizada que o navegador cria a partir do seu código HTML.

Cada elemento HTML, como `<h1>`, `<p>`, `<div>`, etc., é representado como um nó na árvore do DOM. Isso permite que você acesse e manipule os elementos da página usando JavaScript.

Por exemplo, se você deseja alterar o texto de um parágrafo em sua página, você pode usar JavaScript para encontrar o nó correspondente no DOM e atualizar seu conteúdo.

![Exemplo do DOM](../../../public/assets/dom.jpg)

A manipulação do DOM envolve a capacidade de adicionar, remover ou modificar elementos HTML e seus atributos usando JavaScript. Isso permite que você crie páginas dinâmicas que respondem a ações do usuário ou a alterações nos dados.

Por exemplo, você pode adicionar novos elementos à página em resposta a um clique de botão, ou alterar a cor de fundo de um elemento quando o usuário passa o mouse sobre ele.

Você também poderia fazer uma ação com base na classe adicionada no código acima e gerar uma cadeia de eventos e ações.

## Eventos

Eventos são ações que ocorrem em uma página web, como cliques de mouse, pressionamentos de teclas, movimentos do mouse, entre outros. Com JavaScript, você pode "ouvir" esses eventos e responder a eles de diferentes maneiras. Por exemplo, você pode fazer com que um botão execute uma função quando for clicado, ou alterar o estilo de um elemento quando o mouse passa sobre ele.

Entender como lidar com eventos é crucial para tornar suas páginas web interativas e responsivas aos usuários.

## Exemplos de Manipulação do DOM

Adicionando um novo elemento:
```javascript
// Criar um novo elemento <p>
var newElement = document.createElement('p');

// Definir o texto do novo elemento
newElement.textContent = 'Este é um novo parágrafo adicionado ao corpo do documento.';

// Adicionar o novo elemento ao corpo do documento
document.body.appendChild(newElement);
```

Alterando o texto de um element já existente:
```javascript
// Função para alterar o texto do elemento
function changeText() {
    var targetElement = document.getElementById('target');
    targetElement.textContent = 'Novo Texto';
}
```
Removendo um elemento:
```javascript
// Função para remover o elemento
function removeElement() {
    var targetElement = document.getElementById('target');
    targetElement.remove();
}
```

# [Event Loop](/posts/event-loop)