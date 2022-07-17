let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;
function adicionarNumeros( n1:number, n2:number, print: boolean, frase: string){
  let resultado = n1+n2;
    if (print){
    console.log(frase + resultado);
   }
    return resultado;
}
let devePrintar=true;
let frase = 'O valor é '
if (button){
    button.addEventListener('click', ()=>{
        console.log(adicionarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase))
    })
}