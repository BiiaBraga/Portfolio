# Portfolio Beatriz Braga Silva

Portfolio pessoal desenvolvido com HTML, CSS e JavaScript para apresentar minha trajetoria, tecnologias, projetos e formas de contato em uma interface responsiva, delicada e interativa.

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-estrutura-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-estilo-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-interatividade-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111" alt="JavaScript">
</div>

## Sobre

O site foi criado para funcionar como uma experiencia unica de portfolio, com visual em tons pasteis, elementos decorativos, animacoes suaves e conteudo facil de atualizar.

A secao de projetos consome a API publica do GitHub e exibe apenas os repositorios escolhidos para o portfolio. As tecnologias exibidas em cada projeto vem dos topics configurados em cada repositorio.

## Funcionalidades

- Hero com apresentacao pessoal e foto
- Secao "Sobre mim" com resumo, fatos e fotos
- Livro de conquistas com paginacao interativa
- Stack de tecnologias por categoria com barras animadas
- Projetos carregados dinamicamente pelo GitHub
- Carrossel horizontal de projetos com botoes e arraste
- Cards de projetos com hover, icones, tags e links de codigo/demo
- Formulario de contato com validacao no frontend
- Pagina de sucesso personalizada apos envio da mensagem
- Navbar fixa com destaque automatico da secao ativa
- Layout responsivo para desktop, tablet e mobile

## Projetos exibidos

Atualmente o portfolio filtra estes repositorios do GitHub:

- TrustWay
- RHFlow
- SafeLife
- Blog-Pessoal
- Yummy
- Talksy
- momoduo
- chromatic

Para alterar a lista, edite o array `featuredProjects` em `assets/js/script.js`.

## Tecnologias dos projetos

As tags dos cards de projeto sao puxadas dos topics de cada repositorio no GitHub.

Para atualizar:

1. Abra o repositorio no GitHub.
2. Va em About.
3. Edite os topics.
4. Recarregue o portfolio.

Exemplos de topics:

`react`, `typescript`, `nodejs`, `nestjs`, `mysql`, `java`, `python`, `tailwind`, `springboot`

## Estrutura

```text
Portfolio/
+-- index.html
+-- success.html
+-- README.md
+-- assets/
    +-- Curriculo2026-versao2.pdf
    +-- css/
    |   +-- style.css
    +-- js/
    |   +-- script.js
    +-- img/
    |   +-- eu.png
    |   +-- filhos.jpeg
    |   +-- gatos.jpeg
    |   +-- success.svg
    +-- icons/
```

## Como rodar localmente

Como o projeto e estatico, basta abrir o `index.html` no navegador.

Recomendado para testar chamadas externas e formulario:

1. Abra a pasta no VS Code.
2. Use a extensao Live Server.
3. Abra `index.html` com "Open with Live Server".

## Formulario de contato

O formulario usa o FormSubmit para enviar mensagens.

O envio esta configurado no atributo `action` do formulario em `index.html`. A pagina de retorno e `success.html`, preenchida dinamicamente pelo JavaScript para funcionar tanto localmente quanto no GitHub Pages.

## Deploy

O portfolio pode ser publicado pelo GitHub Pages.

URL do projeto:

```text
https://BiiaBraga.github.io/Portfolio
```

Depois de alterar arquivos, publique as mudancas no GitHub para atualizar a versao online.

## Autora

Desenvolvido com carinho por Beatriz Braga Silva.

- GitHub: <https://github.com/BiiaBraga>
- LinkedIn: <https://www.linkedin.com/in/beatriz-braga-silva/>
