const integrantes = [
    {
        nome: "Nome 1",
        idade: 23,
        descricao: "Desenvolvedor Frontend focado em acessibilidade, componentes reutilizáveis e UI moderna.",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Nicolas"
    },
    {
        nome: "Nome 2",
        idade: 25,
        descricao: "Entusiasta de arquitetura de software, Node.js e integração contínua.",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Manoel"
    },
    {
        nome: "Nome 3",
        idade: 22,
        descricao: "Especialista em React, TailwindCSS e otimização de performance web.",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Oliver"
    },
    {
        nome: "Nome 4",
        idade: 24,
        descricao: "Desenvolvedora Full Stack apaixonada por resolução de problemas e UX Design.",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Mariana"
    },
    {
        nome: "Nome 5",
        idade: 21,
        descricao: "Foco em desenvolvimento backend, bancos de dados SQL e segurança da informação.",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Caue"
    },
    {
        nome: "Nome 6",
        idade: 26,
        descricao: "Engenheiro de software focado em microsserviços, Docker e testes automatizados.",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Viana"
    },
    {
        nome: "Nome 7",
        idade: 24,
        descricao: "Desenvolvedor frontend com olhar apurado para animações e interfaces fluidas.",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Rodrigo"
    },
    {
        nome: "Nome 8",
        idade: 23,
        descricao: "Apaixonado por JavaScript moderno, TypeScript e ecossistema Node.",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Miguel"
    },
    {
        nome: "Nome 9",
        idade: 27,
        descricao: "Desenvolvedora Full Stack dedicada a criar soluções escaláveis e limpas.",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Erica"
    },
    {
        nome: "Nome 10",
        idade: 22,
        descricao: "Entusiasta de métodos ágeis, Git workflow e integração de APIs REST.",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Pietro"
    },
    {
        nome: "Nome 11",
        idade: 22,
        descricao: "Entusiasta de métodos ágeis, Git workflow e integração de APIs REST.",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Pietro2"
    },
    {
        nome: "Nome 12",
        idade: 22,
        descricao: "Entusiasta de métodos ágeis, Git workflow e integração de APIs REST.",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Pietro3"
    },
    {
        nome: "Nome 13",
        idade: 22,
        descricao: "Entusiasta de métodos ágeis, Git workflow e integração de APIs REST.",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Pietro4"
    },
    {
        nome: "Nome 14",
        idade: 22,
        descricao: "Entusiasta de métodos ágeis, Git workflow e integração de APIs REST.",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Pietro5"
    },
    {
        nome: "Nome 15",
        idade: 22,
        descricao: "Entusiasta de métodos ágeis, Git workflow e integração de APIs REST.",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Pietro6"
    },
    {
        nome: "Nome 16",
        idade: 22,
        descricao: "Entusiasta de métodos ágeis, Git workflow e integração contínua.",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Pietro7"
    },
    {
        nome: "Nome 17",
        idade: 22,
        descricao: "Entusiasta de métodos ágeis, Git workflow e integração de APIs REST.",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Pietro8"
    }
];

let currentIndex = 0;
let currentPosition = 0;
let isAnimating = false;

const animationDuration = 750;

function obterCardsPorMovimento() {
    return window.innerWidth <= 650 ? 1 : 2;
}

function criarCardIntegrante(integrante) {
    const article = document.createElement("article");

    article.className = "card-integrante";

    article.innerHTML = `
        <img
            src="${integrante.avatar}"
            alt="${integrante.nome}"
            class="avatar-img"
            loading="lazy"
        >

        <span class="role-badge">
            ${integrante.idade} anos
        </span>

        <h3 class="nome">
            ${integrante.nome}
        </h3>

        <p class="descricao">
            ${integrante.descricao}
        </p>

        <div class="card-actions">
            <a
                href="${integrante.github}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-action"
            >
                GitHub
            </a>

            <a
                href="${integrante.linkedin}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-action"
            >
                LinkedIn
            </a>
        </div>
    `;

    return article;
}

function obterTrack() {
    return document.getElementById("carouselTrack");
}

function obterContainer() {
    const track = obterTrack();

    if (!track) {
        return null;
    }

    return track.parentElement;
}

function obterCards() {
    const track = obterTrack();

    if (!track) {
        return [];
    }

    return Array.from(
        track.querySelectorAll(".card-integrante")
    );
}

function obterMaxScroll() {
    const track = obterTrack();
    const container = obterContainer();
    const cards = obterCards();

    if (!track || !container || !cards.length) {
        return 0;
    }

    return Math.max(
        0,
        track.scrollWidth - container.clientWidth
    );
}

function obterPosicaoDoCard(index) {
    const cards = obterCards();

    if (!cards.length) {
        return 0;
    }

    const cardIndex = Math.max(
        0,
        Math.min(index, cards.length - 1)
    );

    return limitarPosicao(
        cards[cardIndex].offsetLeft
    );
}

function limitarPosicao(posicao) {
    const limite = obterMaxScroll();

    return Math.max(
        0,
        Math.min(posicao, limite)
    );
}

function aplicarPosicao(animar = true) {
    const track = obterTrack();

    if (!track) {
        return;
    }

    currentPosition = obterPosicaoDoCard(currentIndex);

    if (animar) {
        isAnimating = true;

        track.classList.add("is-moving");

        clearTimeout(track.animationTimer);

        track.animationTimer = setTimeout(() => {
            isAnimating = false;
            track.classList.remove("is-moving");
            atualizarNavegacao();
        }, animationDuration);
    }

    track.style.transform =
        `translate3d(-${currentPosition}px, 0, 0)`;

    atualizarNavegacao();
}

function moverCarrossel(direcao) {
    if (isAnimating) {
        return;
    }

    const cards = obterCards();

    if (!cards.length) {
        return;
    }

    const quantidade = obterCardsPorMovimento();

    if (direcao === "next") {
        currentIndex = Math.min(
            currentIndex + quantidade,
            cards.length - 1
        );
    }

    if (direcao === "prev") {
        currentIndex = Math.max(
            currentIndex - quantidade,
            0
        );
    }

    aplicarPosicao(true);
}

function atualizarNavegacao() {
    const btnPrev =
        document.getElementById("btnPrev");

    const btnNext =
        document.getElementById("btnNext");

    const limite =
        obterMaxScroll();

    const cards =
        obterCards();

    if (btnPrev) {
        btnPrev.disabled =
            isAnimating ||
            currentIndex === 0;
    }

    if (btnNext) {
        btnNext.disabled =
            isAnimating ||
            currentIndex >= cards.length - 1 ||
            currentPosition >= limite - 1;
    }
}

function renderizarCarrossel() {
    const track = obterTrack();

    if (!track) {
        return;
    }

    track.innerHTML = "";

    integrantes.forEach((integrante) => {
        track.appendChild(
            criarCardIntegrante(integrante)
        );
    });

    currentIndex = 0;
    currentPosition = 0;
    isAnimating = false;

    requestAnimationFrame(() => {
        aplicarPosicao(false);
    });
}

function reajustarCarrossel() {
    const track = obterTrack();
    const cards = obterCards();

    if (!track || !cards.length) {
        return;
    }

    currentIndex = Math.min(
        currentIndex,
        cards.length - 1
    );

    currentPosition =
        obterPosicaoDoCard(currentIndex);

    track.style.transition = "none";

    track.style.transform =
        `translate3d(-${currentPosition}px, 0, 0)`;

    track.offsetHeight;

    track.style.transition =
        "transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)";

    atualizarNavegacao();
}

document.addEventListener("DOMContentLoaded", () => {
    renderizarCarrossel();

    const btnPrev =
        document.getElementById("btnPrev");

    const btnNext =
        document.getElementById("btnNext");

    if (btnPrev) {
        btnPrev.addEventListener("click", () => {
            moverCarrossel("prev");
        });
    }

    if (btnNext) {
        btnNext.addEventListener("click", () => {
            moverCarrossel("next");
        });
    }

    let resizeTimer;

    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {
            reajustarCarrossel();
        }, 150);
    });
});
