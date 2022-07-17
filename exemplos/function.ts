// function somarValoresNumericos(n1: number, n2: number): number{
//     return n1+n2;
// }

// console.log(somarValoresNumericos(1,2));

// function DevolvesomarValoresNumericos(n1: number, n2: number): void{
//     console.log (n1+n2);
// }

// DevolvesomarValoresNumericos(1,10);

function somarValoresNumericostres(n1: number, n2: number, callback: (numero: number)=> number): number{
    let result= n1+n2;
    return callback(result);
}

function aoQuadrado(numero: number): number{
    return numero*numero;
}
function dividirPorEleMesmo(numero: number): number{
    return numero/numero;
}


console.log(somarValoresNumericostres(1,3,aoQuadrado));
console.log(somarValoresNumericostres(1,3,dividirPorEleMesmo));