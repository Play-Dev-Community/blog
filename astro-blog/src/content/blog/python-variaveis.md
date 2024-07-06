---
author: Paula
pubDatetime: 2024-05-23T00:50:00.000Z
modDatetime: 2024-05-23T00:50:00.000Z
title: Python
slug: python
featured: false
draft: false
tags:
  - python
description: Python
---

# Python
-----------------------
> Fala pessoal, hoje vou falar um pouco sobre variáveis em Python. Bora começar?!

## Variáveis
Eu gosto de pensar em variáveis como se fossem caixinhas na memória pra guardar algum conteúdo que você pretende usar depois. 
Se vc veio de outras linguagens de programação como :clang:, :cplus:, :java: e outras de tipagem estática  em que é preciso dizer o tipo da variável antes de declara-la, fica tranquilo que em :python:, que tem tipagem dinâmica o próprio interpretador descobre qual o tipo a variável deve ter dado seu conteúdo, é bem mais simples! Olha só:

```python
variavel = "Minha primeira variável"
```

> 1. `variavel` :arrow: nome da variável
> 2. `=` :arrow: operador de atribuição
> 3. `"Minha primeira variável"` :arrow: conteúdo da variável

### Nomeando variáveis
Existem algumas regras que são importantes de serem seguidas quando criamos variáveis em Python:

1. Use apenas letra que estão no alfabeto (a-zA-Z). Embora você possa criar uma variável `maçã` fica difícil uma pessoa que não tem um teclado pt-br digitar esses símbolos difíceis, imagina pegar um código com variáveis em  chinês?
```python
你好 = "你好"
hello = "你好"
```

2. O único caracter especial válido é o underscore `_`

3. Não ser uma palavra reservada da linguagem. Não se preocupe em decorar tudo, se tentar usar uma delas sua coloração fica diferente e o interpretador te avisa.
```python
False      class      finally    is         return
None       continue   for        lambda     try
True       def        from       nonlocal   while
and        del        global     not        with
as         elif       if         or         yield
assert     else       import     pass
break      except     in         raise
```
4. Dígitos são válidos, desde que não seja o __primeiro__ caracter.

5. Espaços, __**NUNCA**__! Então use o `_` se quiser separar palavras.
```python
nome completo :x:
nome_completo :white_check_mark:
```

6. Python é sensível a maiúsculas e minúsculas.
- `ABC` e `abc` são diferentes pro :python:.

__*Regras opcionais (que indico seguir):*__

7. Use nome descritivos, que indique seu conteúdo ou função.
```python
nome = "Paula"
idade = "Python"  # Linguagem que mais gosto!
```
- `nome` é um nome ótimo pra primeira variável
- `idade` não visto que não armazena minha idade e sim minha linguagem favorita.

```python
nome = "Paula"
linguagem_favorita = "Python"  # Linguagem que mais gosto!
```