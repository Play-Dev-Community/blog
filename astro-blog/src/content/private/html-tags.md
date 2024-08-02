---
author: Gabriel Moodlight
pubDatetime: 2024-07-21T20:00:00.000Z
modDatetime: 2024-07-21T20:00:00.000Z
title: HTML - TAGs
slug: html-tags
featured: false
draft: false
tags:
 - html
 - tags
 - basico
 - web
 - frontend
description: Entenda sobre as Tags em HTML
students: [
  "1225110944523223082",
  "368226888793063435"
]
---

HTML, ou HyperText Markup Language, é a linguagem utilizada para descrever a apresentação de um documento HTML.

## O que são Tags?

As tags de conteúdo são marcas que definem o conteúdo de um documento. Elas podem envolver textos, imagens e os elementos que aparecem no documento. Tecnicamente, elas são usadas para determinar o tipo de conteúdo que será exibido na página.

[Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

[W3Schools Documentation](https://www.w3schools.com/html/default.asp)

<!-- <details>

<summary> A estrutura básica de uma regra CSS é composta por um seletor e um bloco de declarações. </summary>

```css
/* Seletor */
p {
  /* Bloco de declarações */
  color: blue; /* Propriedade e valor */
  font-size: 16px; /* Propriedade e valor */
}
```
</details> -->

---

## Atributos
Uma tag pode ter atributos que servem como informações adicionais, como seu nome, sua classe ou sua origem, entre diversas outras.

`<img *name*="Portfolio" *class*="image" src="./portfolio.jpg"/>`

Os atributos nos abrem inúmeras possibilidades com HTML, uma vez que facilita a interação total com esse elemento através de outros recursos, como o CSS ou JS.

[W3Schools - Attributes](https://www.w3schools.com/html/html_attributes.asp)
<!-- 
<details>

<summary>Existem diversos tipos de seletores, cada um com sua própria forma de especificar quais elementos são afetados pelas regras CSS.</summary>

```css
* {} // Todos os elementos

p {
  color: blue;
}

.my-class {
  font-size: 20px;
}

#my-id {
  background-color: yellow;
}

input[type="text"] {
  border: 1px solid black;
}
```
</details> -->

---

#### Skeleton Tags

| Tag          | Descrição                      |
|--------------|--------------------------------|
| `<!DOCTYPE>` | Tipo do documento              |
| `<html>`     | Abertura do documento HTML     |
| `<head>`     | Cabeçalho do documento         |
| `<title>`    | Título do documento            |
| `<link>`     | Link para recursos externos    |
| `<meta>`     | Metadados do documento         |
| `<style>`    | Estilos CSS                    |
| `<body>`     | Corpo do documento             |
| `<header>`   | Cabeçalho da página            |
| `<nav>`      | Navegação da página            |
| `<section>`  | Seção de conteúdo              |
| `<footer>`   | Rodapé da página               |
| `<script>`   | Script de programação          |

[W3Schools - Skeleton](https://www.w3schools.com/w3css/w3css_web_html.asp)

#### Content Tags

| Tag               | Descrição              |
|-------------------|------------------------|
| `<p>`             | Parágrafo              |
| `<h1> ... <h6>`   | Títulos                |
| `<img>`           | Imagem                 |
| `<form>`          | Formulário             |
| `<button>`        | Botão                  |
| `<input>`         | Entrada de dados       |
| `<ul>, <ol> e <li>` | Listas               |
| `<table>`         | Tabela                 |

[W3Schools - Content](https://www.w3schools.com/html/html_elements.asp)

#### Text Formatting Tags

| Tag               | Descrição              |
|-------------------|------------------------|
| `<a>`             | Hyperlink              |
| `<b>` ou `<strong>` | Negrito/Destaque    |
| `<i>` ou `<em>`   | Itálico                |
| `<mark>`          | Marcação               |
| `<ins>`           | Inserido               |
| `<del>`           | Deletado               |
| `<sup>`           | Sobrescrito            |
| `<sub>`           | Subscrito              |
| `<small>`         | Texto pequeno          |

[W3Schools - Text Formatting](https://www.w3schools.com/html/html_formatting.asp)

#### Other Tags

| Tag    | Descrição                |
|--------|--------------------------|
| `<div>`| Divisão ou container genérico     |
| `<span>`| Container em linha      |
| `<hr>` | Linha horizontal         |

[W3Schools - Other Tags](https://www.w3schools.com/html/html_blocks.asp)