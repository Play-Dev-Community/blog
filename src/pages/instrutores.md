---
layout: ../layouts/InstructorsLayout.astro
title: "Instrutores da Play Dev"
---

<style>
  @import 'animate.css';

  /* .dev-img {
    animation: jackInTheBox;
    animation-duration: 1s;
  } */

  .jello:hover {
    cursor: pointer;
    animation: jello;
    animation-duration: 1s;
  }

  .gm-wrapper::before {
    content: "";
    position: absolute;
    top: -21px;
    left: 50px;
    transform: translateX(-50%) rotate(45deg);
    background-color: rgb(231, 231, 231);
    width: 10px;
    height: 10px;
    display: none;
  }

  .gm-wrapper::after {
    content: "Hello World!";
    font-family: 'gg sans';
    font-size: 14px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 80px;
    transform: translateY(-140%) translateX(-50%);
    color: rgb(10, 10, 10);
    background-color: rgb(231, 231, 231);
    width: 90px;
    height: 40px;
    border-radius: 0.125rem;
    display: none;
  }

  .gm-wrapper:hover::before {
    display: block;
  }

  .gm-wrapper:hover::after {
    display: flex;
  }

</style>

## Gabriel Moodlight

lorem ipsum