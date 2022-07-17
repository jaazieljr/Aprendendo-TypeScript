let valueAny: any;
valueAny = 3;
valueAny = true;
valueAny = 'hello';

let valorString: string = 'teste';

valorString = valueAny;
let valorString2: string = 'textao';
valorString2 = valueAny;

function somarString(s1: string, s2: string){
    console.log(s1+s2);
}

somarString(valorString, valorString2);