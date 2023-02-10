function aplicarDesconto(livros) { // param. é a array1 de livros
    const desconto = 0.3;
    livrosComDesconto = livros.map(livro => { // param é cada objt livro
        return {...livro, preco: livro.preco - (livro.preco * desconto)}; // copia cada livro, para alterar o preço: preço de cada livro - equação de procentagem
    });
    return livrosComDesconto;
};