var listaJogadores = [];
  
var elementoLinhaTabela = document.getElementById("tabelaJogadores");

function atualizaTabela() {
  //Limpa anterior
  elementoLinhaTabela.innerHTML = '';
  
  //Monta a tabela com base na lista
  listaJogadores.forEach((jogador,index) => {

    elementoLinhaTabela.innerHTML += `   
          <tr>
            <td>${jogador.avatar}</td>
            <td class="celula_tabela">${jogador.nome}</td>
            <td class="celula_tabela">${jogador.vitoria}</td>
            <td class="celula_tabela">${jogador.empate}</td>
            <td class="celula_tabela">${jogador.derrota}</td>
            <td class="celula_tabela">${jogador.pontos}</td>
            <td><button onClick="adicionarVitoria(${index})">Vitória</button></td>
            <td><button onClick="adicionarEmpate(${index})">Empate</button></td>
            <td><button onClick="limparDados(${index})">Limpar</button></td>
            <td><button onClick="removerJogador(${index})">Remover</button></td>
          </tr>`;
    });
}

//Insere o jogador
function insereJogador(){

  // Verifica se a lista já possui 2 jogadores
  if (listaJogadores.length >= 2) {
    alert('A lista já possui o número máximo de jogadores.');
    return;
  }

  //Pega infos dos inputs no HTML
  var novoJogador = document.getElementById('insere_jogador_nome').value;
  var imagemAvatar = document.getElementById('insere_jogador_avatar').value;
  //Define os H1
  var tituloJogador1 = document.getElementById('nome_jogador_1');
  var tituloJogador2 = document.getElementById('nome_jogador_2');  

  //Valida os dados inseridos nos inputs
  if(novoJogador == ""){
    alert('Insira um nome do jogador');
    document.getElementById('insere_jogador_avatar').value = null;
    return atualizaTabela();

  }//insere imagem padrao
  if(imagemAvatar == ""){
    imagemAvatar = 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCQFP7kbbhshJJTwyzA1kXVohv-VMHC4wzTwhu0xBXJTwv27b8qdKFXSezRBTHgMIFLdeyHYI6wAiRJ3vid2c8ObHWLyg=w1920-h923';

    //Insede dados na lista
    listaJogadores.push({
      avatar:'<img class="avatar_jogador" src="'+imagemAvatar+'">',
      nome: novoJogador,
      vitoria: 0,
      empate: 0,
      derrota: 0,
      pontos: 0
    });
    document.getElementById("insere_jogador_nome").value = null;
    document.getElementById('insere_jogador_avatar').value = null;

    // Atualiza os elementos com os nomes dos jogadores
    if (listaJogadores.length >= 1) {
      tituloJogador1.textContent = listaJogadores[0].nome;
    }

    if (listaJogadores.length >= 2) {
      tituloJogador2.textContent = listaJogadores[1].nome;
    }

    atualizaTabela();

  }//valida e insere imagem do usuario
  else if(imagemAvatar!="" && (imagemAvatar.endsWith('jpg') ) || (imagemAvatar.endsWith('jpeg') ) || (imagemAvatar.endsWith('png')) ){
    //Insede dados na lista
    listaJogadores.push({
      avatar:'<img class="avatar_jogador" src="'+imagemAvatar+'">',
      nome: novoJogador,
      vitoria: 0,
      empate: 0,
      derrota: 0,
      pontos: 0
    });
    document.getElementById("insere_jogador_nome").value = null;
    document.getElementById('insere_jogador_avatar').value = null;

    // Atualiza os elementos com os nomes dos jogadores
    if (listaJogadores.length >= 1) {
      tituloJogador1.textContent = listaJogadores[0].nome;
    }

    if (listaJogadores.length >= 2) {
      tituloJogador2.textContent = listaJogadores[1].nome;
    }

    atualizaTabela();

  }//Informa que o link deve ser de uma imagem
  else{
    alert('Formato de imagem não permitido.\nFavor inserir o link de uma imagem .jpg, .jpeg ou .png');
    return document.getElementById('insere_jogador_avatar').value = null;
  }
}

//Insere vitoria
function adicionarVitoria(index) {
  for (let i = 0; i < listaJogadores.length; i++) {
    if (i !== index) {
      // Coloca derrota para os outros jogadores
      listaJogadores[i].derrota++;
    } else {
      // Coloca vitória para o jogador selecionado
      listaJogadores[i].vitoria++;
      listaJogadores[i].pontos = listaJogadores[i].pontos + 3;
    }
  }
  atualizaTabela();
}
//Insere empate
function adicionarEmpate() {
  for (let i = 0; i < listaJogadores.length; i++) {
    listaJogadores[i].empate++;
    listaJogadores[i].pontos = listaJogadores[i].pontos + 1;
  }
  atualizaTabela();
}
//Limpa dados do jogador
function limparDados(index){
  listaJogadores[index].vitoria = 0;
  listaJogadores[index].empate = 0;
  listaJogadores[index].derrota = 0;
  listaJogadores[index].pontos = 0;
  partidasJogadas = 0;
  atualizaTabela();
}
//Exclui o jogador
function removerJogador(index){
  listaJogadores.splice(index,1);
  atualizaTabela();
}
//Remove todos os Jogadores
function removeTodos(){
  //limpa resultado anterior
  document.getElementById('player1-choice').textContent = '';
  document.getElementById('player2-choice').textContent = '';
  document.getElementById('winner').textContent = '';

  var tituloJogador1 = document.getElementById('nome_jogador_1');
  var tituloJogador2 = document.getElementById('nome_jogador_2');

  listaJogadores = [];
  tituloJogador1.textContent = '';
  tituloJogador2.textContent = '';

  return atualizaTabela();
}

// //////////////////////////////////// JAN - KEN - PON (Com ajuda do ChatGPT)
let player1Choice = '';
let player2Choice = '';

function determineWinner(player1, player2) {
  if (player1 === player2) {
    return 'Empatou!';
  } else if (
    (player1 === 'Pedra' && player2 === 'Tesoura') ||
    (player1 === 'Papel' && player2 === 'Pedra') ||
    (player1 === 'Tesoura' && player2 === 'Papel')
  ) {
    return listaJogadores[0].nome + ' venceu!';
  } else {
    return listaJogadores[1].nome + ' venceu!';
  }
}

function playerChoice(player, choice) {
  
  //verifica se possui duas pessoas para jogar
  if(listaJogadores.length < 2){
    return alert('Insira dois jogadores para jogar.')
  }

  // Limpa resultado anterior
  clearPlayerChoices();

  if (player === 1) {
    player1Choice = choice;
  } else if (player === 2) {
    player2Choice = choice;
  }

  if (player1Choice && player2Choice) {
    const winner = determineWinner(player1Choice, player2Choice);
    displayPlayerChoice(1, player1Choice);
    displayPlayerChoice(2, player2Choice);
    document.getElementById('winner').textContent = winner;

    // Adiciona empate se for um empate
    if (winner === 'Empatou!') {
      adicionarEmpate();
    }
    // Adiciona vitória ao jogador vencedor
    if (winner.includes(listaJogadores[0].nome)) {
      adicionarVitoria(0);
    } else if (winner.includes(listaJogadores[1].nome)) {
      adicionarVitoria(1);
    }

    // Reset choices for the next round
    player1Choice = '';
    player2Choice = '';
  }
}

function clearPlayerChoices() {
  // Limpa o conteúdo das tags player1-choice e player2-choice
  clearElement('player1-choice');
  clearElement('player2-choice');
  document.getElementById('winner').textContent = '';
}

function clearElement(elementId) {
  var element = document.getElementById(elementId);
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function displayPlayerChoice(player, choice) {
  // Adiciona a imagem à tag player-choice correspondente
  var playerChoiceElement = document.getElementById(`player${player}-choice`);
  var playerChoiceImage = document.createElement('img');
  playerChoiceImage.src = insereImagem(choice);
  playerChoiceElement.appendChild(playerChoiceImage); 
}

// Função de exemplo para obter o URL da imagem com base na escolha
function insereImagem(choice) {
  const imagens = {
   'Papel': 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaBJdy9ePLCXPu7514J8m-mYcvd8X-kYe27qCzTfRA91Lv0OehtOIzzxXagWMQykP0_5acihrIdXbavM8BRFZpVO3QEE=w1920-h923',
   'Pedra': 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaB7wbLKhYVxpiO_BQq0j1c8gZP1EVh1fP4yDkhgD95-YyvehLncrRTpEoTiYiurNdKwEaAsTTCwF37_uaTaXiEybX_R_g=w1920-h923',
   'Tesoura': 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaBuFNiPEG2RF-z9PpKP5KOx9XHgleMqfQeK-NkhYrWOvqfPsk1ZAo7zgQ961W-615u0PMJIiRdEv7Xcz36-uFlhhxin9Q=w1920-h923'};

  return imagens[choice] || '';
}