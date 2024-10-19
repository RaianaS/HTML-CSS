const listaSelecaoLutador = document.querySelectorAll(".lutador");

listaSelecaoLutador.forEach(lutador => {
    lutador.addEventListener("click", () => {
        esconderCartaoLutador();  
        const idLutadorSelecionado = mostrarCartaoLutadorSelecionado(lutador);  
        desativarLutadorNaListagem();  
        ativarLutadorSelecionadoNaListagem(idLutadorSelecionado);  
    });
});

function ativarLutadorSelecionadoNaListagem(idLutadorSelecionado) {
    const lutadorSelecionadoNaListagem = document.getElementById(idLutadorSelecionado);
    lutadorSelecionadoNaListagem.classList.add("ativo");
}


function desativarLutadorNaListagem() {
    const lutadorAtivoNaListagem = document.querySelector(".ativo");
    lutadorAtivoNaListagem.classList.remove("ativo");

}


function mostrarCartaoLutadorSelecionado(lutador) {
    const idLutadorSelecionado = lutador.attributes.id.value;
    const idDoCartaoLutadorParaAbrir = "cartao-" + idLutadorSelecionado;
    const cartaoLutadorParaAbrir = 
    document.getElementById(idDoCartaoLutadorParaAbrir );
    cartaoLutadorParaAbrir.classList.add("aberto");
return idLutadorSelecionado;
}



function esconderCartaoLutador() {
    const cartaoLutadorAberto = document.querySelector(".aberto");
        cartaoLutadorAberto.classList.remove("aberto");
    }

