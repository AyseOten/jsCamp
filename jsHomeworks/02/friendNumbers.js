function friendNumbers(num1, num2){
    //for num1
    sumNum1=0;
    sumNum2=0;
  
    for(let i=0; i<num1; ++i){
      if(num1%i == 0){
        sumNum1 += i;
      }
    }
  
    for(let j=0; j<num2; ++j){
        if(num2%j == 0){
          sumNum2 += j;
        }
    }
  
    if(sumNum1 === num2 && sumNum2 === num1){
      document.write(num1 +" and "+ num2, " are friendNumbers!")
    }
    else {
      document.write(num1 +" and "+ num2, " are not friendNumbers!")
    }
  
  }
  
  friendNumbers(220,284);
  friendNumbers(250,300);