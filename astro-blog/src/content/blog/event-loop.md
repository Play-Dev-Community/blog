---
author: Gabriel Moodlight
pubDatetime: 2024-04-24T00:50:00.000Z
modDatetime: 2024-04-24T00:50:00.000Z
title: Event Loop
slug: event-loop
featured: true
draft: false
tags:
  - web
  - event-loop
  - javascript
description: Entenda o essencial sobre Event Loop!
---

O Event Loop é um conceito fundamental do JavaScript que diz respeito à forma como o JavaScript lida com tarefas assíncronas e síncronas. Em termos simples, o JavaScript é uma linguagem de programação de uma única thread, o que significa que ele pode executar apenas uma tarefa por vez. No entanto, ele pode lidar com tarefas assíncronas de forma eficiente usando callbacks, promessas e async/await.

![Event Loop](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Event_loop/the_javascript_runtime_environment_example.svg)

Compreender o Event Loop é importante para entender como o JavaScript gerencia a execução de código assíncrono e síncrono e como evitar bloqueios no thread principal que podem tornar sua aplicação lenta ou irresponsiva.

## Call Stack

A Pilha de Chamadas (Call Stack) é uma estrutura de dados utilizada pelo JavaScript para gerenciar a execução de funções. Quando você chama uma função no seu código, ela é adicionada ao topo da pilha. O JavaScript executa as funções da pilha de chamadas de forma sequencial, removendo-as da pilha conforme são concluídas. Isso garante que as funções sejam executadas na ordem correta.

![Call Stack](https://hermes.dio.me/articles/cover/7373c3fa-b361-4fde-b0be-1bd7a7612e35.jpg)

## Memory Heap

O Heap de Memória (Memory Heap) é a região da memória onde o JavaScript aloca espaço para objetos, arrays e outras estruturas de dados durante a execução do seu programa. Quando você cria novos objetos ou arrays em seu código, eles são armazenados no heap de memória até que não sejam mais necessários.

![Memory Heap](https://felixgerschau.com/static/b452488bd7eeac0405c48f164da6280d/5a190/stack-heap-pointers.png)

## Task Queue

A Fila de Tarefas (Task Queue) é uma fila que contém tarefas que estão prontas para serem executadas pelo JavaScript. Essas tarefas incluem eventos de navegador, como cliques de mouse e pressionamentos de teclas, e operações assíncronas, como requisições de rede e timers.

## Micro e Macro Tasks

![Micro e Macro Queue](https://miro.medium.com/v2/resize:fit:1294/1*NKmNMqD9spvlNLJgHfDIfw.png)

As Micro Tarefas (Micro Tasks) são um tipo especial de tarefa na fila de tarefas que tem uma prioridade mais alta do que as tarefas comuns. Elas são executadas imediatamente após o término da execução da pilha de chamadas atual, antes que quaisquer outras tarefas da fila de tarefas sejam processadas. Promessas e funções queueMicrotask() geram micro tarefas.

As Macro Tarefas (Macro Tasks) são tarefas na fila de tarefas que têm uma prioridade mais baixa e são executadas após a conclusão das micro tarefas. Isso inclui eventos assíncronos como setTimeout, setInterval e eventos de interação do usuário.



## Memory Leak

Um Vazamento de Memória (Memory Leak) ocorre quando um programa aloca memória e não a libera quando não é mais necessária. Isso pode ocorrer quando referências a objetos ou dados não são removidas corretamente, levando a um aumento contínuo no uso da memória e, eventualmente, a uma falha no programa.

## Garbage Collector

![Garbage Collector](https://miro.medium.com/v2/resize:fit:1358/1*7BWoV9593JHdm8M-UF-tYQ.png)

O Coletor de Lixo (Garbage Collector) é um mecanismo automático do JavaScript que monitora o uso da memória e remove objetos não utilizados da memória para liberar espaço. Ele identifica objetos que não são mais referenciados pelo programa e os marca para serem removidos. Isso ajuda a evitar vazamentos de memória e a manter o desempenho do programa.