function SwapII(str) { 

    var regEx1 = /[a-z]/g;
    var regEx2 = /[A-Z]/g;
    var regEx3 = /[0-9]/;
    let newStr = [""]
    for (let i = 0; i<str.length; i++) {
      if(str[i].match(regEx1)) {
       newStr[i] = str[i].toUpperCase()
      } else if(str[i].match(regEx2)) {
       newStr[i] = str[i].toLowerCase()
      }else newStr[i] = str[i]
    
    
    }
    
    for (var k = 0; k < newStr.length; k++) {
    if(newStr[k].match(regEx3)) {
      for (var l = k + 1; l <newStr.length; l++) {
        if(newStr[l] == " ") {
          break;
        }
        else if(newStr[l].match(regEx3)) {
          var get = newStr[k];
          newStr[k] = newStr[l];
          newStr[l] = get;
        }
      }
    }
    }
    
    
    return (newStr.join(""))
    
    }
       
    // keep this function call here 
    console.log(SwapII(readline()));