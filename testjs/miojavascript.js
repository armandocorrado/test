// alert("ciao");
// miorisultato = confirm('vuoiconfermare');
// console.log(miorisultato);
// var ingrasso = prompt();
// alert( typeof ingrasso);

numero1 = prompt("numero 1", 0);
numero2 = prompt("numero 2", 0);

while(numero1 <= 0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){
 numero1 = prompt("numero 1", 0);
numero2 = prompt("numero 2", 0);   
}

if (numero1 > numero2){
    alert("numero 1 è maggiore");
}
else if(numero1 < numero2){
    alert("numero 2 è maggiore");
}

else{
    alert("numero è uguale ");
}