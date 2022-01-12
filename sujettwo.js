class sujetTwo{
  constructor(){

  }
  nOne(array){
    var count=1;
    for(var i=0;i<array.length;i++){
      for(var j=i+1;j<i+2;j++){
        if(array[i]>array[j]){
          count++;
        }
      }
    }
    return count
  }
  nTwo(array){
    var count=1;
    for(var i=0;i<array.length;i++){
      if(array[i]>array[i+1]){
        count++;
      }
      
    }
    return count
  }
 nThree(array){
  
 }
  
}
module.exports = sujetTwo;