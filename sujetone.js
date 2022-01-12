class sujetOne{

  nOne(array,k){ 
    var trouver = false
    array.forEach((element) => {
      array.forEach((test)=>{
        if(k==element+test){
          trouver = true
        }
      });
     });
   return trouver
  }


  nTwo(array,k){
  var number;
  var trouver=false;
  array.forEach((element)=>{
    number=k-element
      if(array.includes(number)){
        trouver=true;
      }
    })
    return trouver
  }
  
}
module.exports = sujetOne;