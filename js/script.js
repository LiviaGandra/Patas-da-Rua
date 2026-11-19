const numeros = document.querySelectorAll(".numero-card h3");

const animarNumeros = () => {

    numeros.forEach(numero => {

        const valorFinal = Number(numero.dataset.valor);
        let valorAtual = 0;

        const intervalo = setInterval(() => {

            valorAtual += Math.ceil(valorFinal / 50);

            if (valorAtual >= valorFinal) {
                valorAtual = valorFinal;
                clearInterval(intervalo);
            }

            if (valorFinal === 300) {
                numero.textContent = "+" + valorAtual;
            } else if (valorFinal === 4) {
                numero.textContent = valorAtual + " anos";
            } else {
                numero.textContent = valorAtual;
            }

        }, 30);

    });

};


const secaoNumeros = document.querySelector(".numeros");

const observador = new IntersectionObserver((entradas) => {

    if (entradas[0].isIntersecting) {
        animarNumeros();
        observador.disconnect();
    }

});


if (secaoNumeros) {
    observador.observe(secaoNumeros);
}


const valorArrecadado = document.querySelector(".valor-arrecadado");
const valorMeta = document.querySelector(".meta-total");

if (valorArrecadado && valorMeta) {

    const barraProgresso = document.querySelector(".progresso-meta");
    const porcentagem = document.querySelector(".porcentagem-meta");

    const arrecadado = Number(valorArrecadado.dataset.arrecadado);
    const meta = Number(valorMeta.dataset.meta);

    const percentual = (arrecadado / meta) * 100;

    porcentagem.textContent =
        Math.round(percentual) + "% da meta alcançada";

    barraProgresso.style.width = percentual + "%";
}


const etapas = [
    {
        etiqueta: "ETAPA 01",
        titulo: "O primeiro passo para mudar uma vida",
        descricao: "Quando um animal em situação de abandono é identificado, buscamos oferecer acolhimento e avaliar quais cuidados ele precisa para ficar seguro."
    },
    {
        etiqueta: "ETAPA 02",
        titulo: "Cuidado e recuperação",
        descricao: "Durante o acolhimento, os animais recebem alimentação, atenção, carinho e atendimento veterinário conforme suas necessidades."
    },
    {
        etiqueta: "ETAPA 03",
        titulo: "Preparando para uma nova família",
        descricao: "Organizamos as informações de cada animal, conhecemos suas características e divulgamos sua história para encontrar pessoas interessadas na adoção responsável."
    },
    {
        etiqueta: "ETAPA 04",
        titulo: "Um novo começo",
        descricao: "Buscamos conectar cada animal a uma família preparada para oferecer segurança, carinho e os cuidados necessários ao longo da vida."
    }
];

const cardsEtapas = document.querySelectorAll(".etapa-card");
const detalheEtiqueta = document.querySelector(".detalhe-etiqueta");
const detalheTitulo = document.querySelector(".etapa-detalhes h3");
const detalheDescricao = document.querySelector(".etapa-detalhes p");

cardsEtapas.forEach((card) => {

    card.addEventListener("click", () => {

        const indice = Number(card.dataset.etapa);
        const etapaSelecionada = etapas[indice];

        cardsEtapas.forEach((outroCard) => {
            outroCard.classList.remove("ativa");
        });

        card.classList.add("ativa");

        detalheEtiqueta.textContent = etapaSelecionada.etiqueta;
        detalheTitulo.textContent = etapaSelecionada.titulo;
        detalheDescricao.textContent = etapaSelecionada.descricao;

    });

});


const conteudoEquipe = [
    {
        etiqueta: "NOSSA ATUAÇÃO",
        titulo: "Todo recomeço começa com acolhimento.",
        descricao: "Os voluntários ajudam a acolher animais em situação de abandono e a oferecer a eles uma nova oportunidade."
    },
    {
        etiqueta: "CUIDADO E DEDICAÇÃO",
        titulo: "Pequenos cuidados fazem a diferença.",
        descricao: "A equipe contribui com a alimentação, a higiene, a atenção e o carinho necessários para o bem-estar dos animais."
    },
    {
        etiqueta: "ADOÇÃO RESPONSÁVEL",
        titulo: "O objetivo é encontrar um lar seguro.",
        descricao: "Os voluntários ajudam a divulgar a história dos animais e a aproximá-los de famílias preparadas para assumir essa responsabilidade."
    }
];

const cardsEquipe = document.querySelectorAll(".equipe-card");
const etiquetaEquipe = document.querySelector(".equipe-etiqueta");
const tituloEquipe = document.querySelector(".equipe-detalhes h3");
const descricaoEquipe = document.querySelector(".equipe-detalhes p");

cardsEquipe.forEach((card) => {

    card.addEventListener("click", () => {

        const indice = Number(card.dataset.equipe);
        const conteudo = conteudoEquipe[indice];

        cardsEquipe.forEach((outroCard) => {
            outroCard.classList.remove("ativa");
        });

        card.classList.add("ativa");

        etiquetaEquipe.textContent = conteudo.etiqueta;
        tituloEquipe.textContent = conteudo.titulo;
        descricaoEquipe.textContent = conteudo.descricao;

    });

});

