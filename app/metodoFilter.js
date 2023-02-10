const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id); // this é o botão clicado
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtraPorDisponibilidade() : filtrarPorCategoria(categoria); // operador ternário
    exibirLivrosNaTela(livrosFiltrados);
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    };
};

function filtraPorDisponibilidade() { // código estraído para function de escopo global
    return livros.filter(livro => livro.quantidade > 0);
};

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
};

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por <span id="valor">R$ ${valorTotal}</span></p>
    </div>`
};