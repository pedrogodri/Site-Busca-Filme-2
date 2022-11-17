document.getElementById('formulario').addEventListener('submit', pesquisarFilme);

function pesquisarFilme(e) {
    var filmePesquisa = document.getElementById('pesquisar').value;
    buscarFilmes(filmePesquisa);
    e.preventDefault();
}