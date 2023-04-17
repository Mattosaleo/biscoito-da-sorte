const botaoOpenCookies = document.querySelector('.btn-opencookies')
const imgDoBiscoito = document.querySelector('.img-biscoito')
const caixaPrincipal = document.querySelector('.caixa-principal')
const caixaPrincipaldeMsg = document.querySelector('.caixa-principal-msg')
const pMensagem = document.querySelector('.p-msg')




let listaDeMensagem = [
  'A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Não compense na ira o que lhe falta na razão.',
  'Não tenha medo da mudança. Coisas boas se vão para que melhores possam vir.',
  'Não se desespere quando a caminhada estiver difícil, é sinal de que você está no caminho certo.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'Há muros que só a paciência derruba. E há pontes que só o carinho constrói.',
  'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
  'Sempre que possível, dê um sorriso a um estPodemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
  'Não existe amor impossível, apenas pessoas incapazes de lutar por aquilo que chamam de amor.',
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.'
]

botaoOpenCookies.addEventListener('click', ()=> {
  caixaPrincipal.classList.remove('hide')
  caixaPrincipaldeMsg.classList.add('hide')
})

imgDoBiscoito.addEventListener('click', ()=> {
  caixaPrincipal.classList.add('hide')
  caixaPrincipaldeMsg.classList.remove('hide')
  let numeroAleatorio = Math.round((Math.random() * 10))
  pMensagem.textContent = listaDeMensagem[numeroAleatorio]
 
})
