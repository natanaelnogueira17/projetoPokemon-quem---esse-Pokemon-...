/*objetivo 1 - quando clicarmos na seta de avancas temos que mostrar o róximo cartao da lista 
    passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
    passo 2 - dar um jeiro de identidicar o click do usuario na seta avancar    
    passo 3 - fazer aparecer o proximo cartao da lista 
    passo 4 - buscar o cartao que esta selecionado e esconder 


    objetivo 1 - quando clicarmos na seta de voltar temos que mostrar o card anterior da lista 
    passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
    passo 2 - dar um jeiro de identidicar o click do usuario na seta voltar 
    passo 3 - fazer aparecer o  cartao anterior da lista 
    passo 4 - buscar o cartao que esta selecionado e esconder */


//passo 1
const btnAvancar = document.getElementById('btn-avancar')
const btnVoltar = document.getElementById('btn-voltar')
const cartoes = document.querySelectorAll('.cartao')
let cartaoAtual = 0

function esconderCartaoSelecionado(){
  const cartaoSelecionado = document.querySelector('.selecionado')
  cartaoSelecionado.classList.remove('selecionado')
}
btnAvancar.addEventListener('click', function(){
  if(cartaoAtual === cartoes.lenght -1) return
  cartaoAtual++
  cartoes[cartaoAtual].classList.add('selecionado')
  esconderCartaoSelecionado()
  
})

btnVoltar.addEventListener('click', function(){
  if(cartaoAtual === 0) return
  esconderCartaoSelecionado()
  cartaoAtual--
  cartoes[cartaoAtual].classList.add('selecionado')
  
  })


    







  