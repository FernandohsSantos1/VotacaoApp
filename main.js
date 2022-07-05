import {numCandidatos, nomearCandidatos, votar, exibirTotal} from './Funcoes/funcoes.js'


console.log("\n          Bem vindo ao app de Votação!\n")

let numeroCandidatos = numCandidatos()
let candidatos = nomearCandidatos(numeroCandidatos)

while (true) {
    exibirTotal(candidatos)
    candidatos = votar(candidatos)
    if(candidatos === 0)
    {break}
    console.clear()
}

console.log('Encerrando programa...')