function factorial(n){

    if(n === 0){
        return 1;
    }
    if(n < 0){
        return "Enter a positive number";
    }

    else{
        return n*factorial(n-1);
    }
    
}

console.log(factorial(5));
console.log(factorial(-1));

/*
Output - 
120
Enter a positive number
*/
