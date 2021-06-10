var output = document.getElementById ("output");

function palindromo (parola) {
    //  inserire un contatore con for  //
    for(var i = 0 ; i < parola.length/2 ;i++){
    // confronta i caratteri contrapposti ( es. primo  con ultimo    ecc)
         if(parola[i] != parola[parola.length-1-i] ) {
            // se questo ceck  risultà vero anche solo una volta significa che la parola non è palindorma 
            return  output.innerHTML +=  "la parola " + parola + "<br/> non è palindroma" ;
           
     }
    }   
     
        return  output.innerHTML +=  "la parola " + parola + " <br/> è palindroma" ;
            
                                          
} 

var  inserisci = prompt("inserisci una parola ") ;
palindromo(inserisci ) ;



// pari o dispari 

var pariDispari = prompt ("pari o dispari?") ;

if(pariDispari == "pari"){
    var pariDispariBool = true;
}   else if(pari=="dispari"){
    var pariDispariBool = false;
}

while(pariDispari != "pari" && pariDispari!="dispari"){
    pariDispari = prompt("Non ho capito. Pari o Dispari?");
}


var inserisciNumero = parseInt( prompt (" inserisci un numero da 1 a 5"));

while(inserisciNumero <1 || inserisciNumero >5 ){
     inserisciNumero = prompt ("inserisci il numero corretto!!")
}

function getRandomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var result = getRandomNumber (1,5);

function ceckSum (result , inserisciNumero ){
    // ceck se la somma ottenuta è pari o dispari 
    if((result + inserisciNumero) %2==0){
        return true;
          
    }
    else  {
        return false;

    }

//confrontare il valore della funzione  con ilvalore   inserito dall utente  
}


    








