# Quiz
Um jogo de quiz feito com HTML, Css e Javascript. Neste pequeno projeto trabalhei para fazer um jogo onde é testado os conhecimentos de HTML, Css e Javascript do usuário. Onde
ele responde 5 perguntas e é retornado para ele uma pontuação de 0 a 10, onde cada pergunta equivale a 2 pontos.
<h3>Imagens do projeto:</h3>
<img src="https://github.com/sian19/Quiz/blob/master/img-project/modelo1.png">
<p>O usuário escolhe qual sessão de perguntas quer fazer, clicando em cima de uma das imagens e então ele é direcionado para a tela onde exibe a imagem da linguagem e um botão onde ao clicar se inicia o desafio.</p>
<img src="https://github.com/sian19/Quiz/blob/master/img-project/modelo2.png">
<p>Ao iniciar o desafio o usuário tem 10 minutos para responder todas as perguntas e completar o desafio.</p>
<img src="https://github.com/sian19/Quiz/blob/master/img-project/modelo3.png">
</br>
<h3>O que foi usado no desenvolvimento da aplicação:</h3>
<ul>
  <li>No código do HTML foi feito as perguntas e em cada pergunta existe um evento onclick com uma função onde se tem um valor em forma de string dentro que pode ser "correta" ou "errada" que é passado como argumento para a função. Ao selecionar a pergunta na caixa o Javascript pega o valor que foi passado como argumento dentro da função e a coloca dentro de uma array, dessa forma vai se armazenando cada resposta dentro da array na medida que o usuário vai respondendo as perguntas.</li>
  <li>Foi usado o método filter para interar sobre a array com as respostas e verificar quais as que tinham o valor "correta" e colocá-las dentro de uma outra array. Então se usou o método map para interar sobre essa nova array e mudar os valores de "correta" para o número 2, assim criando uma nova array com os números 2 em cada índice. E por fim se usou o método reduce para interar sobre essa array final com os números e então somá-los para colocar o resultado da soma em uma variável que representa a quantidade de pontos que o usuário conseguiu fazer ao acertar cada resposta.</li>
  <li>Foi usado funções dentro do Javascript para manipular o DOM e exibir na tela uma mensagem de erro caso o usuário por exemplo não marcasse uma resposta e tentasse passar para a próxima sem ter respondido a pergunta em que ele se encontra na tela.</li>
  <li>Foi usado a função setInterval dentro do Javascript para correr o tempo de 10 minutos que o usuário tem para responder as perguntas.</li>
  <li>As perguntas foram colocadas dentro de um objeto e dentro deste objeto se foi criado uma array onde se tem os elementos que representam as perguntas do HTML.</li>
</ul>


