"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'Desenvolvedora'
};
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
};
const paula = {
    nome: 'Paula Tejano',
    idade: 18,
    profissao: 'desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDefutebol"] = 3] = "JogadoraDefutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 18,
    profissao: Profissao.Desenvolvedora
};
const jorgiana = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['matematica', 'programação', 'Calculo']
};
const jessica = {
    nome: 'Jessica',
    idade: 28,
    materias: ['matematica', 'programação', 'Calculo']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(jessica.materias);
