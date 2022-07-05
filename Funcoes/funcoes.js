import input from 'readline-sync'

const numCandidatos = () => {
    const qtdCandidatos = +input.question('Informe a quantidade de candidatos participantes: ')
    if(!isNaN(qtdCandidatos) && qtdCandidatos != 0){
        return qtdCandidatos;
    }else{
        console.log('Quantidade invalida. Tente novamente:')
        return numCandidatos();
    }
}

const nomearCandidatos = (num) => {
    let candidatos = [];
    console.log('')
    for (let i = 1; i <= num; i++){
        let nome = input.question(`Digite o nome do candidato ${i}: `)
        candidatos.push({nome: nome, totalVotos: 0})
    }
    return candidatos;
}

const votar = (array) => {
    let voto = +input.question('\nDigite o numero do candidato que voce deseja votar (ou 0 para sair): ')
    if(voto === 0){
        return 0;
    }else if ( voto<1 || voto > array.length ) {
        console.log('Candidato inexistente.')
        return votar(array)
    }else {
        let posicao = voto-1 
        array[posicao].totalVotos += 1
        return array  
    } 
        
}
const exibirTotal = (array) => {
    console.log('---------------------------------')
    for (let i = 0; i < array.length; i++){
        console.log(`O candidato ${array[i].nome} possui: ${array[i].totalVotos} de votos.`)
    }
    console.log('---------------------------------')
}

export {numCandidatos, nomearCandidatos, votar, exibirTotal};