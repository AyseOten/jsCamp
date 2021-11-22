
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
  
  result = false;
  for(let i=0; i<1001; ++i){
    result = isPrime(i);
  
    if(result){
      document.writeln(i);
    }
  }
  