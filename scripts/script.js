const casasDisp = document.querySelectorAll('.casa');
const pJogadorAtual = document.querySelector('.jogador-atual');
const btoReiniciar = document.querySelector('.bto-reiniciar');

const COMBINACOES_VITORIA = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function criarTabuleiro() {
    const casas = ['', '', '', '', '', '', '', '', ''];
    const indiceValido = (indice) => indice >= 0 && indice <= 8;
    const estaVazia = (indice) => casas[indice] === '';

    return {
        marcarCasa(indice, simbolo) {
            if (!indiceValido(indice) || !estaVazia(indice)) {
                return false;
            }
            casas[indice] = simbolo;
            return true;
        },
        mostrarCasas() {
            return [...casas];
        },
        estaCheio() {
            return casas.every(casa => casa !== '');
        }
    };
}

function verificarVitoria(tabuleiro, simbolo) {
    return COMBINACOES_VITORIA.some(combinacao => 
        combinacao.every(indice => tabuleiro[indice] === simbolo)
    );
}
