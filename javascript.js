function posicao_aleatoria()
{
        let botao = document.getElementById("meuBotao");
        let larguraJanela = window.innerWidth;
        let alturaJanela = window.innerHeight;

        let novaPosicaoX = Math.random() * (larguraJanela - botao.offsetWidth);
        let novaPosicaoY = Math.random() * (alturaJanela - botao.offsetHeight);

        botao.style.left = novaPosicaoX + "px";
        botao.style.top = novaPosicaoY + "px";
}