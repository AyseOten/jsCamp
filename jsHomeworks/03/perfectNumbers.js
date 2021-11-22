// 1000 e kadar olan mukemmel sayilar
function perfectNumbers(){
    sum = 0; 
  
    for(let i=0;i<1000;++i){
      for(let j=0;j<i;++j){
        if(i%j === 0){
          sum += j;
        }
      }
      if(sum === i){
        document.writeln(i," mükemmel sayi!")
      }
    sum = 0;
    }
  }
  
  perfectNumbers();