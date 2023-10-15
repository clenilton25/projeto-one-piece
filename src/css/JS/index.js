/*passo 1 pegar os botoes no JS pra poder verificar qunado o usuario clicar em cima de m deles */

const botoes = document.querySelectorAll('.botao');

/*objetivo 2 quando clicar no botão aparece a foto e as informaçoes do persongem !*/
/* passo 1 pegar as divs dos personagens */
const personagens = document.querySelectorAll(".personagem");

 
botoes.forEach((botao,indice) => {
    botao.addEventListener("click", () => {
        
        /*passo 3 verificar se já existe um botão selecionado e se sim , devemos remover a seleção*/
        const botaoselecionado = document.querySelector(".botao.selecionado");
        botaoselecionado.classList.remove("selecionado");

        /* passo 2 adicionar a classe "selecionado" no botao que o usuario clicou */
        botao.classList.add("selecionado");

        /*passo 3 verificar se ja existe um personagem selecionado, se sim, devemos remover a seleção dele*/
        const personagemselecionado = document.querySelector(".personagem.selecionado");
        personagemselecionado.classList.remove("selecionado")

        /*passo 2 : adicionar a classe "selecionado" no personagem que o usuário*/
        personagens[indice].classList.add("selecionado");
    });
    });