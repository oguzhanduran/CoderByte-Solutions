// Basic Roman Numerals
//    Have the function BasicRomanNumerals(str) read str which will be a string of Roman numerals. The numerals being used are: I for 1, V for 5, X for 10, L for 50, C for 100, D for 500 and M for 1000. In Roman numerals, to create a number like 11 you simply add a 1 after the 10, so you get XI. But to create a number like 19, you use the subtraction notation which is to add an I before an X or V (or add an X before an L or C). So 19 in Roman numerals is XIX.
   
//    The goal of your program is to return the decimal equivalent of the Roman numeral given. For example: if str is "XXIV" your program should return 24
//    Examples
//    Input: "IV"
//    Output: 4
//    Input: "XLVI"
//    Output: 46

        function BasicRomanNumerals(str) { 

        // code goes here  
        let num = convertNumber(str.charAt(0));
        let num1; 
        let num2;
      
        for (let i = 1; i< str.length; i++) {
          num2 = convertNumber(str.charAt(i));
          num1 = convertNumber(str.charAt(i - 1));
          if (num2 <= num1 ) {
            num += num2;
          }else {
          num = num - num1*2 + num2;
          }
        }
        return num;
      }
        
        function convertNumber(c) {
          switch (c) {
            case "I": return 1;
            case "V": return 5;
            case "X": return 10;
            case "L": return 50;
            case "C": return 100;
            case "D": return 500;
            case "M": return 1000;
            
          }
        }

//-------------------------------------------------------------------------------------------------------------------

        function BasicRomanNumerals(str) { 

          // code goes here  
          let num = convertNumber(str.charAt(0)); // convertNumber("I")
          
          let num1; 
          let num2;
        
          for (let i = 1; i< str.length; i++) {
            num2 = convertNumber(str.charAt(i)); //  convertNumber("V")
            num1 = convertNumber(str.charAt(i - 1)); //  convertNumber("I")
            if (num2 <= num1 ) {
              num += num2;
            }else {
            num = num - num1*2 + num2; // convertNumber("I") - convertNumber("I") * 2 + convertNumber("V") = 4
            } 
          }
          console.log(num);
        }
          
          function convertNumber(c) {
            switch (c) {
              case "I": return 1;
              case "V": return 5;
              case "X": return 10;
              case "L": return 50;
              case "C": return 100;
              case "D": return 500;
              case "M": return 1000;
              
            }
          }
  
     BasicRomanNumerals("IV")