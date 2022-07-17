"use strict";
let anyEstaDeVolta;
let unknowValue;
unknowValue = 3;
unknowValue = true;
unknowValue = 'Hello';
let stringTest = 'World';
//stringTest = unknowValue;
if (typeof unknowValue === 'string') {
    stringTest = unknowValue;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu pau no excel', 1001);
