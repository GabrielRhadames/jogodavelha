//0 Iniciar minhas variáveis 
let board = ['', '', '', '', '', '', '', '', '',];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false; // 17 vamos fazer um if no  handleMove para se for verdadero não atribuir mais elementos nos squares(quadrados)

function handleMove(position) { //7 Vai pegar a posição que passamos na aba ointerface.js, 

    if (gameOver) { //18 dito no 17
        return;
    }


    if (board[position] == '') { //8 se o Board for igual a vazio não fazer nada, para evidar sobrepor um elemento já posto]
        board[position] = symbols[playerTime]; //9 pega no let board a cima a posição do jogador da vez, que vai começar no 0 que é o  "o" let playerTime = 0 ,  let symbols= [ 'o','x'] como está acima
        // 10 quando a classe "o" é colocada, vai dar o estilo do X e O que colocamos no CSS

        gameOver = isWin(); //19 Fin;'ao criada pra caso a jogada seja vencedora 
        if (!gameOver) { // se n'ao tiver um vencedor, passa a vez ao próximo jogador, assim o jogo para quando um vencer.
            if (playerTime == 0) {
                playerTime = 1;
            } else {
                playerTime = 0;
            }
        }
    }

    return gameOver;
};
// 11 Daí voltamos a aba de interface, para a função UpdateSquares

function isWin() { //20 lógica pra saber se o jogo acabou, construindo a lógica do Jogo da velha.
    //21 vamos mapear as 8 opções possíveis de vitória do Jogo(012,345,678) primeiro as horizontais, depois verticais e diagonais.
    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6],

    ]
    // verificar no "for" se os simbolos são iguais e se for vamos retornar que temos um vencedor
    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {
            return true;
        }

    }
    return false;

  




}

