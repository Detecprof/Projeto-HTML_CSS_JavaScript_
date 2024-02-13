const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para estilização de páginas web.",
        "Uma linguagem de programação utilizada para criar páginas estáticas.",
        "Uma linguagem de programação utilizada para criar interatividade em páginas web.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita de valores e tipos.",
        "Comparação de valores apenas, ignorando tipos.",
        "Atribuição de valores a variáveis.",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma variável em JavaScript?",
      respostas: [
        "Uma função que armazena valores.",
        "Um elemento de HTML.",
        "Um nome simbólico associado a um valor que pode ser usado para armazenar e manipular dados.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a maneira correta de comentar uma linha de código em JavaScript?",
      respostas: [
        "// Comentário aqui",
        "<!-- Comentário aqui -->",
        "/* Comentário aqui */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' em JavaScript?",
      respostas: [
        "'let' é usado para declarar variáveis que podem ser reatribuídas, enquanto 'const' é usado para declarar variáveis cujo valor não pode ser alterado após a inicialização.",
        "'const' é usado para declarar variáveis que podem ser reatribuídas, enquanto 'let' é usado para declarar variáveis cujo valor não pode ser alterado após a inicialização.",
        "Ambos 'let' e 'const' são usados para declarar variáveis imutáveis.",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado que representa um conjunto de valores.",
        "Um tipo de dado que representa uma operação ou um conjunto de operações a serem realizadas.",
        "Um tipo de dado que representa um valor booleano.",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma função para manipulação de datas.",
        "Uma linguagem de marcação para criar páginas web.",
        "A representação em forma de árvore da estrutura de um documento HTML, que pode ser manipulada com JavaScript para alterar dinamicamente o conteúdo e a aparência da página.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a finalidade do método 'querySelector' em JavaScript?",
      respostas: [
        "Para selecionar e manipular elementos do DOM pelo seu ID.",
        "Para selecionar e manipular elementos do DOM pelo seu nome de classe.",
        "Para selecionar e manipular elementos do DOM usando seletores CSS.",
      ],
      correta: 2
    },
    {
      pergunta: "O que é um evento em JavaScript?",
      respostas: [
        "Uma propriedade de um elemento HTML.",
        "Uma função interna em JavaScript.",
        "Uma interação do usuário com a página web que pode ser detectada e manipulada com JavaScript.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado da expressão '3 + 4 + '7' em JavaScript?",
      respostas: [
        "34",
        "14",
        "11",
      ],
      correta: 2
    },
  ];
  
  const quiz= document.querySelector('#quiz')
  const template= document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length 
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem= template.content.cloneNode(true) 
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf (item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta 
        
        corretas.delete(item)
        if(estaCorreta) {
        corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      } 
      quizItem.querySelector('dl').appendChild(dt) 
      }
  
      quizItem.querySelector('dl dt').remove()
    
  
    //coloca a pergunta na tela
  quiz.appendChild(quizItem)
    }