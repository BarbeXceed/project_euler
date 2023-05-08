"use strict";


function largestPrimeFactor(number) {

    let val = 0;

    while(number != 1){

      for(let i = 2; i <= number; i++){

        if(number % i == 0){
          if(isItPrime(i)){
            console.log(`Chiffre avant la division : ${number}`)
            number = number/i
            console.log(`Chiffre après la division : ${number}`)
            console.log(`Divisé par : ${i}`)
            console.log("---")
            if(i > val){
              val = i
            }
            break;
          }
        }
      }
    }

    return val;
  }

  function isItPrime(number){ 

    for(let i = 2; i < number; i++){
      if(number % i == 0){
        return false;
      }
    }

    return true;
  }

  console.log(largestPrimeFactor(20));
  console.log("-------- \n")

  console.log(largestPrimeFactor(8));
  console.log("-------- \n")

  console.log(largestPrimeFactor(13195));
  console.log("-------- \n")

 console.log(isItPrime(29));