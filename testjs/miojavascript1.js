// const Pelicula = {

// 	nome : 'Giuseppe',
// 	id : 12,
// 	reproducir(){
// 		return `si sta riproducendo ${this.nome + this.id}`;
// 	}
// }

// console.log(Pelicula.reproducir());

//objeto literal


// <script>
//     $(document).ready(function() {
//       $('.formatted-amount').on('input', function() {
//         var inputValue = $(this).val();
//         if (!inputValue.match(/^\d*$/)) {
//           // Rimuovi tutti i caratteri non numerici (tranne il punto e la virgola)
//           inputValue = inputValue.replace(/[^\d.,]/g, '');
    
//           // Rimuovi le virgole precedenti (se presenti)
//           inputValue = inputValue.replace(/,/g, '');
    
//           // Inserisci il punto per separare i milioni
//           if (inputValue.includes('.')) {
//             var parts = inputValue.split('.');
//             inputValue = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '.' + parts[1];
//           } else {
//             inputValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
//           }
    
//           $(this).val(inputValue);
//         }
//       });
//     });
//     </script>

// const Libro = {

// }

// const numero = 100000.10;

// // Opzioni di formattazione per il formato US
// const formatoUS = new Intl.NumberFormat('en-US', {
//   style: 'decimal', // Puoi anche utilizzare 'currency' se vuoi un formato di valuta
//   minimumFractionDigits: 2,
//   maximumFractionDigits: 2,
// });

// // Formatta il numero nel formato US
// const numeroFormattato = formatoUS.format(numero);

// console.log(numeroFormattato); // Stampa "100,000.10" nel formato US


//CATTURA DATA

    // $(document).ready(function() {
    //     $('.inputNumero').on('input', function() {
    //     //   var inputName = $(this).attr('name')
    //     //     $('[name="' + inputName +'"]').addClass('top-ammount-input');
    //          var idspan = $(this).data('id');
    //            $(idspan).addClass('top-ammount-input');
    //          // Ottieni il valore corrente dell'input
    //         let inputValue = $(this).val();
    //         // Rimuovi tutto tranne i numeri e il punto
    //         let numericValue = inputValue.replace(/[^\d.]/g, '');
    //         // Formatta il numero con il separatore delle migliaia e decimale a due cifre
    //         let formattedValue = accounting.formatMoney(numericValue, {
    //             symbol: "€ ",  // Non visualizzare il simbolo della valuta
    //             precision: 2,  // Numero di decimali
    //             thousand: ".",  // Separatore per i millesimi
    //             decimal: ","  // Separatore per i decimali
    //         });
    //         // Visualizza l'output formattato
    //         $('#'+idspan).text(formattedValue).addClass('top-ammount');
    //     });
    // });


// //OGGETTO
// const Pelicula1 = {
// 	nome: 'Gogo',
// 	anno: 1975,
// 	reproducir(){
// 		return `il solito film di ${this.nome}`
// 	}
// }

// alert(Pelicula1.reproducir())


// const Pelicula = {
//  nome : "Giuse",
//   cognome : "Como",
//    riproducendo(){
//     return `pippo in ${this.nome}`
//     } 

// }
//    alert(Pelicula.riproducendo())


   //ISTANZIARE

// // Definizione di una classe (o costruttore) per l'oggetto
// function Persona(nome, cognome) {
//     this.nome = nome;
//     this.cognome = cognome;
//     this.saluta = function() {
//         console.log(`Ciao, sono ${this.nome} ${this.cognome}`);
//     };
// }

// // Istanziazione di un oggetto
// const persona1 = new Persona("Mario", "Rossi");

// // Chiamata a un metodo dell'oggetto
// persona1.saluta(); // Stampa "Ciao, sono Mario Rossi"

$(document).ready(function() {
  $('.inputNumero').on('input', function() {
    var capta = $(this).val();
    $('.testi').text(capta);
  });
});


<script type="text/javascript">
  $(document).ready(function() {
  $('.inputNumero').on('input', function() {
    var capta = $(this).val();
    $('.testi').text(capta);
  });
});
</script>



Parametri di funzione
JavaScript
function chiamaFunzione(funzione) {
  // Chiama la funzione passata come parametro
  funzione();
}

// Crea una funzione
function mioTimeout() {
  console.log("Timeout!");
}

// Chiama la funzione `chiamaFunzione()`
chiamaFunzione(mioTimeout);
Utilizza il codice con cautela. Scopri di più
In questo esempio, la funzione chiamaFunzione() ha un parametro di funzione, funzione. Il parametro è di tipo Function, quindi può contenere solo funzioni.

Parametri di matrice
JavaScript
function sommaArray(array) {
  // Calcola la somma degli elementi dell'array
  let totale = 0;
  for (const numero of array) {
    totale += numero;
  }

  // Ritorna la somma
  return totale;
}

// Crea un array
const array = [10, 20, 30];

// Chiama la funzione
const risultato = sommaArray(array);

// Stampa il risultato
console.log(risultato); // 60

