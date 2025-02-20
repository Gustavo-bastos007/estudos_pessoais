// script.js

// Exemplo de funcionalidade: Alterar o ícone ativo na navbar
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


// Exemplo: Carregar itens no Mercado
const mercadoContainer = document.getElementById('mercadoItens');

if (mercadoContainer) {
    // Dados fictícios
    const produtos = [
        { nome: 'Bicicleta', imagem: 'images/bicicleta.jpg', descricao: 'Bicicleta usada em bom estado.' },
        { nome: 'Mesa', imagem: 'images/mesa.jpg', descricao: 'Mesa de escritório pouco usada.' },
        { nome: 'Livros', imagem: 'images/livros.jpg', descricao: 'Coleção de livros de romance.' }
    ];

    produtos.forEach(produto => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        const img = document.createElement('img');
        img.src = produto.imagem;
        img.alt = produto.nome;

        const nome = document.createElement('h3');
        nome.textContent = produto.nome;

        const desc = document.createElement('p');
        desc.textContent = produto.descricao;

        const btn = document.createElement('button');
        btn.textContent = 'Ver Detalhes';

        itemDiv.appendChild(img);
        itemDiv.appendChild(nome);
        itemDiv.appendChild(desc);
        itemDiv.appendChild(btn);

        mercadoContainer.appendChild(itemDiv);
    });
}
