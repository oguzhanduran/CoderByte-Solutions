// Caesar Cipher
// Have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher works by shifting each letter in the string N places in the alphabet (in this case N will be num). Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt".
// Examples
// Input: "Hello" & num = 4
// Output: Lipps
// Input: "abc" & num = 0
// Output: abc



function CaesarCipher(str,num) { 

  let newStr = ""
  let re = /[\W_]/g;
  for (let i = 0; i < str.length; i++) {
  
    if (str[i].match(re)) {
        newStr += str[i]
     
    }else {
      var a = str.charCodeAt(i);
      a = a + num;
      a = String.fromCharCode(a)
      newStr += a 
      }
      
    }
  return newStr
  }
     
  // keep this function call here 
  console.log(CaesarCipher(readline()));