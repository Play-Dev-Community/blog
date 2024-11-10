---
layout: ../layouts/AboutLayout.astro
title: "Sobre a Play Devs"
---

<style>
@media screen and (min-width: 640px) {
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
}
</style>

A Play Devs é uma plataforma de estudos online para programadores e entusiastas da programação. 

Em 2024, nasceu como uma comunidade vibrante e acolhedora criada para reunir **desenvolvedores**, **designers**, **gamers**, **traders** e **entusiastas da tecnologia através da programação**. Nossa missão é proporcionar um ambiente colaborativo onde você pode aprender, compartilhar conhecimentos e se conectar com outros profissionais apaixonados pelo mundo digital, originalmente chamada de "Play Dev".

<div>
  <img src="/assets/dev.svg" class="dev-img sm:w-1/2 relative z-20 mx-auto animate-pulse" alt="coding dev illustration">
</div>

<div>
  <img src="/assets/livro-didatico.png" class="jello w-3/12 sm:w-1/4 sm:ml-10 ml-5 float-right relative z-20 " alt="code in screen illustration">
</div>

## Conteúdo de Qualidade

Oferecemos uma ampla variedade de recursos e tutoriais sobre várias linguagens de programação, com destaque para JavaScript e Python. Nossos membros instrutores estão sempre prontos para oferecer suporte e orientação!

#### 🚀 Dominando a Web

Oferecemos uma formação completa em desenvolvimento web através do nosso programa de mentoria. Com aulas para todos os níveis de conhecimento e pacotes acessíveis, você pode se tornar um especialista em desenvolvimento web com a Play Dev.

<br class="hidden sm:block"/>

<img src="/assets/no-mundo-todo.png" class="jello w-2/12 sm:w-1/4 mr-5 sm:mr-10 float-left relative z-20" alt="code in screen illustration">

<div>

## Comunidade Diversificada

Com mais de 300 membros, a Play Dev é o lugar ideal para se conectar com pessoas que compartilham seus interesses, seja em programação, design, jogos ou mercado financeiro.

#### 🚩 Eventos, Desafios e Competições

Organizamos diversos eventos, competições e desafios para manter a comunidade ativa e engajada. Participe de hackathons, desafios de design, competições de trading e muito mais!

<div>

<div class="gm-wrapper relative mt-20">
  <img src="/assets/eu.png" class="w-[102px] sm:cursor-pointer mr-5 float-left relative z-20" alt="coding dev illustration" />
</div>

## Criado por Gabriel Moodlight
Desenvolvedor Full Cycle e Mentor Web, aspirante a UI/UX, <br class="hidden sm:block"/> dedicando-se a transmitir ensinamentos de forma digna por meio de código e pensamento criativo </>