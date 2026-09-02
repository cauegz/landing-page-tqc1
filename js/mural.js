document.addEventListener('DOMContentLoaded', () => {
    const itens = document.querySelectorAll('#mural .mural-item');
    const btnAnterior = document.getElementById('anterior');
    const btnProximo = document.getElementById('proximo');
    const contador = document.getElementById('contador');

    const itensPorPagina = 6; 
    let paginaAtual = 1;
    const totalPaginas = Math.ceil(itens.length / itensPorPagina);

    function mostrarPagina(pagina) {
        itens.forEach((item, index) => {
            const inicio = (pagina - 1) * itensPorPagina;
            const fim = inicio + itensPorPagina;

            if (index >= inicio && index < fim) {
                item.style.display = 'block'; 
            } else {
                item.style.display = 'none';
            }
        });

        if (contador) {
            contador.textContent = `${pagina} / ${totalPaginas}`;
        }
    }

    btnAnterior.addEventListener('click', (e) => {
        e.preventDefault();
        if (paginaAtual > 1) {
            paginaAtual--;
            mostrarPagina(paginaAtual);
        }
    });

    btnProximo.addEventListener('click', (e) => {
        e.preventDefault();
        if (paginaAtual < totalPaginas) {
            paginaAtual++;
            mostrarPagina(paginaAtual);
        }
    });

    mostrarPagina(1);
});