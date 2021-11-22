
let numbers = seperateNumbers(1,2,101,54,223)

function seperateNumbers(){
    let result
    for (var i = 0; i < arguments.length; i++) {
        result = isPrime(arguments[i]);
        if(result){
            document.write(arguments[i],"\nis prime\n")
        }
        else {
            document.write(arguments[i],"\nis not prime\n")
        }
    }
}

function isPrime(num){
    let prime = false;
  
    if( num == 2 ){
      prime = true
      return prime
    }
    for(let i=2;i<num;++i){
      if(num%i == 0){
        prime = false
        return prime;
      }
      else {
        prime = true;
      }
    }
    return prime;
}

  