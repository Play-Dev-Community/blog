---
author: Gabriel Moodlight
pubDatetime: 2024-07-17T23:00:00.000Z
modDatetime: 2024-07-18T13:00:00.000Z
title: CSS - Conceitos Basicos
slug: css-conceitos-basicos
featured: false
draft: false
tags:
 - css
 - basico
 - web
 - frontend
description: Entenda os conceitos básicos de CSS
students: [
  "1225110944523223082",
  "368226888793063435"
]
---

CSS, ou Cascading Style Sheets, é a linguagem utilizada para descrever a apresentação de um documento HTML.

## Estrutura do CSS

<details>

<summary> A estrutura básica de uma regra CSS é composta por um seletor e um bloco de declarações. </summary>

```css
/* Seletor */
p {
  /* Bloco de declarações */
  color: blue; /* Propriedade e valor */
  font-size: 16px; /* Propriedade e valor */
}
```
</details>

---

## Seletores
Os seletores CSS são usados para "selecionar" os elementos HTML que você deseja estilizar. 

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

</details>

---

## Cascata

A "cascata" no CSS refere-se à forma como as regras são aplicadas aos elementos HTML.

<details>

<summary>Quando múltiplas regras se aplicam ao mesmo elemento, a cascata determina qual estilo será aplicado.</summary>

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    p { color: red; } /* 2ª prioridade */
  </style>
  <link rel="stylesheet" href="styles.css"> <!-- 3ª prioridade -->
</head>
<body>
  <p style="color: blue;">Texto azul</p> <!-- 1ª prioridade -->
</body>
</html>
```

</details>

#### Ordem de Precedência:

1º - Estilos inline (dentro do próprio elemento HTML)

2º - Estilos no cabeçalho do documento ( \<style\> )

3º - Estilos em arquivos CSS externos ( \<link\> )

---

## Especificidade

<details>

<summary>
  A especificidade é um método pelo qual os navegadores decidem quais regras CSS são mais relevantes para um elemento e, portanto, quais regras aplicar.
</summary>

```css
/* 1 ponto */
p {
  color: red;
}

/* 10 pontos */
.class {
  color: blue;
}

/* 100 pontos */
#id {
  color: green;
}
```

</details>

#### Cálculo da Especificidade:

Estilos inline: _1000 pontos_

IDs: _100 pontos_

Classes, pseudo-classes e atributos: _10 pontos_

Elementos e pseudo-elementos: _1 ponto_

---

## Herança

A herança no CSS permite que as propriedades de um elemento pai sejam passadas para seus elementos filhos.

<details>

<summary>
Nem todas as propriedades são herdáveis, mas muitas relacionadas ao texto e fonte são.
</summary>

```html
<style>
  body {
    color: black; /* Herdado */
    font-family: Arial; /* Herdado */
  }

  p {
    margin: 20px;
  }
</style>

<body>
  <p>Este texto será preto e em Arial.</p>
</body>
```

</details>

---

## Box Model

O modelo de caixa do CSS descreve o layout de elementos HTML.

<details>

<summary>
Cada elemento é representado como uma caixa retangular, que consiste em margens, bordas, preenchimentos e o conteúdo real.
</summary>

```css
div {
  width: 300px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
}
```

</details>

#### Componentes do Box Model:

Content: A área de conteúdo onde o texto e as imagens aparecem.

Padding: Espaço entre o conteúdo e a borda.

Border: A borda ao redor do preenchimento (padding) e conteúdo.

Margin: Espaço fora da borda, separando o elemento dos outros.