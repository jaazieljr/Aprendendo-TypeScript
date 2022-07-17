"use strict";
let valueAny;
valueAny = 3;
valueAny = true;
valueAny = 'hello';
let valorString = 'teste';
valorString = valueAny;
let valorString2 = 'textao';
valorString2 = valueAny;
function somarString(s1, s2) {
    console.log(s1 + s2);
}
somarString(valorString, valorString2);
