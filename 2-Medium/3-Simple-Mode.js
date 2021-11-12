function SimpleMode(arr){ 
  let counter2 = "0";
  let mode = "0";
      // code goes here  
    for (let i = 0; i < arr.length; i++) {
        var counter1 = 0;
      for (let j = 0;  j< arr.length; j++) {
        if (arr[i] == arr[j] && j!==i) {
          counter1++
        }
        if (counter1 > counter2) {
            counter2 = counter1;
            mode = arr[i];
            counter1 = 0;
        }
      }
    }
    if (counter2 == 0) {
      return "-1"
    }
    return mode
   }
     
  // keep this function call here 
  console.log(SimpleMode(readline()));