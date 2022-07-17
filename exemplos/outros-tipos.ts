let anyEstaDeVolta: any;
let unknowValue: unknown;

unknowValue = 3;
unknowValue = true;
unknowValue = 'Hello'

let stringTest: string = 'World';
//stringTest = unknowValue;
if( typeof unknowValue === 'string'){
    stringTest = unknowValue;
}
function jogaErro(erro : string, codigo:number){
throw {error:erro, code:codigo}
}

jogaErro('deu pau no excel', 1001)