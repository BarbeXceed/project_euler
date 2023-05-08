"use strict";

function init(){

    console.log(smallestMult(5))
    console.log(smallestMult(7))
    console.log(smallestMult(20))
}

function smallestMult(n){

    let val = n;
    let cmpt = 0;
    
    while(cmpt != n-1){
        cmpt = 0;
        for(let i = 2; i <= n; i++){
            if(val%i != 0){
                break;
            }
            cmpt++
        }
        val++;
    }

    return val-1;
}



init();