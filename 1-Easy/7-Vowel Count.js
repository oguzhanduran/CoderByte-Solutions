function VowelCount(str) { 

    // code goes here  
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "u"|| str[i] == "o") {
        counter++
      }
    }
    return counter; 
  
  }
     
  // keep this function call here 
  console.log(VowelCount(readline()));