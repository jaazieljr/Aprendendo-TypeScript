type input = number | string
function somarValores(n1: input, n2: input) {

    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString();
    }
    else {
        return n1 + n2;
    }
}
console.log(somarValores(1,5));
console.log(somarValores('Hello', ' world!'));
console.log(somarValores('o valor é: ', 10));