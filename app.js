function getSum() {
    let numOne = 0;
    return function() {
      let numTwo= +prompt(`input`)
      return numOne = numOne + numTwo ;
    }
  }
  let sum = getSum();
  console.log(sum());  
  console.log(sum());
  console.log(sum());