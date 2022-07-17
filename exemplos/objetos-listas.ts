const pessoa ={
    nome: 'Mariana',
    idade: 28,
    profissao: 'Desenvolvedora'
}

const andre: {nome:string, idade: number, profissao: string}={
    nome:'Andre',
    idade: 25,
    profissao: 'pintor'
}
const paula: {nome:string, idade: number, profissao: string}={
    nome:'Paula Tejano',
    idade: 18,
    profissao: 'desenvolvedora'
}
enum Profissao{
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDefutebol 
}
interface Pessoa {
    nome: string,
    idade: number, 
    profissao?: Profissao
}

const vanessa: Pessoa={
    nome:'Vanessa',
    idade: 18,
    profissao: Profissao.Desenvolvedora
}

interface Estudante extends Pessoa{
    materias: string[]
}
const jorgiana: Estudante = {
    nome: 'Jessica',
    idade:28, 
    profissao: Profissao.Desenvolvedora,
    materias:['matematica', 'programação', 'Calculo']

}
const jessica: Estudante = {
    nome: 'Jessica',
    idade:28, 
    materias:['matematica', 'programação', 'Calculo']

}

function listar (lista: string[]){
    for (const item of lista){
        console.log ('- ', item);

    }
}

listar(jessica.materias);