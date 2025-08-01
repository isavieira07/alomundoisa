function inserirNome(){
    let nomeUsusrio = prompt("Qual o seu nome");
    let elemento = document.querySelector("#nome-usuario");
    console.log(elemento);
    elemento.textContent = nomeUsuario;
}

const lista = document.querySelector('#lista');

lista.textContent = linguagens[0];
lista.textContent = linguagens[1];
lista.textContent = linguagens[2];

let aluno1 = {
    nome: 'Isabella',
    idade: 17,
    anoLetivo: 'Ensino Médio',
    materiasFavoritas: ['Português', 'Programação']
}

console.log(aluno1.nome);
console.log(aluno1.idade);
console.log(aluno1.materiasFavoritas);
console.log(aluno1.materiasFavoritas[1]);