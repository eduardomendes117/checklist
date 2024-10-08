const mensagemListaVazia = document.getElementById("mensagem-lista-vazia")

export function verificarListaVazia(Lista) {
    if (Lista.querySelectorAll("li").length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}