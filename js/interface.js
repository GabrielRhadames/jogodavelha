
document.addEventListener('DOMContentLoaded',()=>{


// 1 DOMContentLoaded faz com que a função só seja carregada quando tudo já houver carregado!

    let square = document.querySelectorAll('.square'); // 2 criando uma let pegando cada quadrado

    square.forEach((square) =>{
        square.addEventListener('click', handleClick); 
    })
    //3 fazendo uma varredura nos quadrado e colocando eventos de click e iniciando uma nova função handlerClick
})

function handleClick(event) {

    let square = event.target; // 4 target é o elemento que recebeu o evento, sendo lococada numa let square
    let position = square.id; // 5 agora pegando o ID só para dar um nome, colocando numa nova let position

    if(handleMove(position)){// 6 agora pega a posição e manda para handleMove na aba GAME.JS (ELE CHAMA O handleMove )
        let el = document.querySelector('.refresh')
        el.classList.remove('refresh');
        el.classList.add('btn');

        const btn = document.querySelector(".btn")
        btn.addEventListener("click",()=>{
            location.reload()
        })

        if(playerTime == 0){
            playerTime = innerHTML = "⭕"
            const p = document.querySelector("#msg").innerText = `O vencedor foi ${playerTime}`

        }else if(playerTime == 1){
            playerTime = innerHTML = "❌"
            const p = document.querySelector("#msg").innerText = `O vencedor foi ${playerTime}`
        }
           
    }
       
    updateSquares();
    
}

// 12 por ultimo
function updateSquares() {
    let square = document.querySelectorAll('.square');

    square.forEach((square) =>{ // 13 Agora fazemos uma varreduar em todos os quadrados varrendo cada um deles
        let position = square.id;
        let symbol = board[position]; //14 pegando a posição e o simbolo que está no let board que já foi atualizado com "x" ou "o"

        if(symbol !='') { //15 e para cada um deles, se eo simbolo não for vazio ele coloca o X ou O
            square.innerHTML= `<div class='${symbol}'></div>`;
        }
    })
} 
//16 agora volta para a aba Game.js para quando gangar não poder mais continuar jogando e para mostrar a mensagem de quem ganhou 


