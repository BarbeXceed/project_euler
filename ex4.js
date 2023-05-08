"use strict";

function init(){

    console.log(largestPalindromeProduct(2));
    console.log(largestPalindromeProduct(3));
}

function largestPalindromeProduct(n) {
    let val = 0;
    let temp = 0;
    let maximum = maxInt(n)

    for(let i = 1; i <= maximum; i++){
        for(let j = 1 + (i-1); j <= maximum; j++){
            temp = i * j;
            if(isNumberPalindrome(temp) && temp > val){
                val = temp;
            }
        }
    }

    return val;
}

function isNumberPalindrome(number){

    let numberStr = String(number);

    for(let i = 0; i < Math.round(numberStr.length/2); i++){
    
        if(numberStr[i] != numberStr[numberStr.length-1-i]){
            return false;
        }
    }

    return true;
}

function maxInt(n){

    if(n <= 0){
        return "Erreur : le paramètre d'entrée doit être égale ou supérieur à 1"
    }

    let val = "";

    for(let i = 0; i < n; i++){
        val += "9"
    }

    return Number(val);
}


init();