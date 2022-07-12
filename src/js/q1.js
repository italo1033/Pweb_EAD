function maiorMenor() {
    var arrayList=[];
    const contador= 0;
    for (let i = 0; i < 5; i++) {
        let numero=prompt("Digite um nunero");
        arrayList.push(numero);
      }
    
    alert("Maior numero "+Math.max(...arrayList));
    alert("Menor numero "+Math.min(...arrayList));
    
}
function vogal() {
    for (let i = 0; i < 5; i++) {
        var vogal=prompt("digite uma letra");
        if(vogal == 'a' || vogal == 'A'|| vogal == 'e' || vogal == 'E'|| vogal == 'i' || vogal == 'I' || vogal == 'o' || vogal == 'O' || vogal == 'u' || vogal == 'U'){
            alert("1");
        }
        else{
            alert("0");
        }
      }
}
 function limites() {
    var intervalo = [];
    var inicio=prompt("digite o inicio do intervalo: ");
    const final=prompt("digite o final do intervalo: ");
    // while (inicio < final) {
    //     intervalo.push(inicio);
    //     inicio=inicio+1;
    // }
    for (inicio; inicio <= final; inicio++) {
        intervalo.push(inicio);
    }
    var somador=0;
    for (const key in intervalo) {
        if(intervalo[key]%2 == 0){
            somador=somador+intervalo[key]
        }
    }
    alert(somador) 
    
    
    
 }

 function ordem() {
    var arrayList=[];
    const contador= 0;
    for (let i = 0; i < 5; i++) {
        let numero=prompt("Digite um nunero");
        arrayList.push(numero);
      }
    
    alert(arrayList.sort(function(a, b){return a - b}));

    
 }

 function positivoNegativo() {
    for (let i = 0; i < 5; i++) {
        var numero=prompt("digite uma letra");
        if(Math.sign(numero) == 1){
            alert("true");
        }
        else if(Math.sign(numero) == -1){
            alert("false");
        }
        else{
            alert("Por favor coloque um numero acima ou abaixo de 0")
        }
      }
    
}

function parImpa() {
    for (let i = 0; i < 5; i++) {
        var numero=prompt("digite uma letra");
        if(numero %2 == 0){
            alert("Par");
        }
        else{
            alert("impar")
        }
      }
    
}