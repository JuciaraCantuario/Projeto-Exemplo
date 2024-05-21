// Capturando os elementos criados no arquivo HTML
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.querySelector('a');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando conteúdo textual aos elementos 'h1' e 'a'
titulo.innerText = 'Bem-vindo ao Meu Projeto';
link.innerText = 'Visite o site da Prozeducacao';

// Adicionando três itens simples na lista não ordenada
listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adicionando três itens com links para outros sites na lista ordenada
listaOrdenada.innerHTML = `
    <li><a href="https://www.google.com">Google</a></li>
    <li><a href="https://www.wikipedia.org">Wikipedia</a></li>
    <li><a href="https://www.github.com">GitHub</a></li>
`;