---
author: Gabriel Moodlight
pubDatetime: 2024-07-22T20:00:00.000Z
modDatetime: 2024-07-22T20:00:00.000Z
title: CSS - Font Face
slug: css-font-face
featured: false
draft: false
tags:
 - css
 - basico
 - web
 - frontend
description: Saiba como trabalhar com fontes customizadas com CSS
students: [
  "1225110944523223082",
  "368226888793063435"
]
---

Muitas vezes queremos padronizar as fontes que queremos usar na nossa aplicação web para que haja consistência na nossa aplicação e cada parte do nosso código não fique com uma fonte diferente.

Para isso, podemos utilizar de uma regra CSS chamada `@font-face`.

A regra `@font-face` do CSS permite que você utilize fontes personalizadas em seu site, ao invés de depender apenas das fontes padrão disponíveis nos navegadores dos usuários.

## Estrutura Básica do `@font-face`

A declaração básica da regra inclui pelo menos duas propriedades: `font-family` e `src`.

```css
@font-face {
  font-family: 'NomeDaFonte';
  src: url('caminho/para/a/fonte.woff2') format('woff2');
}
```
- *font-family*: Nome que você dá à fonte, que será usado posteriormente no CSS.
- *src*: Caminho para o arquivo de fonte e o formato da fonte.

#### Formatos de Fontes
Existem vários formatos de fontes que você pode usar com @font-face:

- `WOFF (Web Open Font Format)`: Amplamente suportado pelos navegadores modernos.
- `WOFF2`: Uma versão aprimorada do WOFF, com melhor compressão.
- `TTF (TrueType Font)`: Suportado por todos os navegadores modernos.
- `EOT (Embedded OpenType)`: Usado principalmente pelo Internet Explorer.
- `SVG (Scalable Vector Graphics)`: Usado em navegadores móveis mais antigos.

#### Exemplo Completo
Aqui está um exemplo mais completo de uma declaração @font-face que inclui diferentes formatos para maior compatibilidade:

```css
@font-face {
    font-family: 'OpenSans';
    src: url('fonts/OpenSans-Regular.woff2') format('woff2'),
         url('fonts/OpenSans-Regular.woff') format('woff'),
         url('fonts/OpenSans-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
```
- *font-weight*: Peso da fonte, que definirá a espessura da fonte.
- *font-style*: Estilo da fonte, como *italico*, **negrito**, etc.
- *font-display*: Visualização da fonte, como ela se comportará para o usuário.

#### Utilizando a Fonte no CSS
Após declarar a fonte com @font-face, você pode utilizá-la no seu CSS:

```css
body {
    font-family: 'OpenSans', Arial, sans-serif;
}
```