// Have the function Calculator(str) take the str parameter being passed and evaluate the mathematical expression within in. For example, if str were "2+(3-1)*3" the output should be 8. Another example: if str were "(2-0)(6/2)" the output should be 6. There can be parenthesis within the string so you must evaluate it properly according to the rules of arithmetic. The string will contain the operators: +, -, /, *, (, and ). If you have a string like this: #/#*# or #+#(#)/#, then evaluate from left to right. So divide then multiply, and for the second one multiply, divide, then add. The evaluations will be such that there will not be any decimal operations, so you do not need to account for rounding and whatnot.

function Calculator(str) {

    // code goes here 
  
    //easy solution
    /*   let operators = ['+', '-', '*', '/'];
      let replaceStr = str.replace(/(.)\(/g, function(match, g1){
        if (operators.indexOf(g1) != -1){
          return match;
        }else{
          return match.replace(g1, g1 + '*');
        }
      }) 
     
      return eval(replaceStr)
     */
  
    //-----------------------------------------
  
    // (a+b)(a*b) seklindeki parantez carpim calismiyor ?????
  
    const applyOp = (op, b, a) => {
      switch (op) {
        case '+':
          return a + b;
  
        case '-':
          return a - b;
  
        case '*':
          return a * b;
  
        case '/':
          if (b === 0) {
            return false;
          }
          return Math.floor(a / b);
  
      }
      return 0;
    };
  
    const precedence = (op1, op2) => {
      if (op2 === '(' || op2 === ')') {
        console.log(false);
      }
      if ((op1 === '*' || op1 === '/') && (op2 === '+' || op2 === '-')) {
        console.log(false);
      }
      console.log(true);
    }
  
    const values = [];
    const oprs = [];
  
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= "0" && str[i] <= "9") {
        let num = '';
        while (i < str.length && str[i] >= "0" && str[i] <= "9") {
          num += str[i++];
        }
        values.push(parseInt(num));
        i--;
      } else if (str[i] === '(') {
        oprs.push(str[i]);
      } else if (str[i] === ')') {
        while (oprs[oprs.length - 1] !== '(') {
          values.push(applyOp(oprs.pop(), values.pop(), values.pop()))
        }
  
        oprs.pop();
      } else if (str[i] === '+' || str[i] === '-' || str[i] === '*' || str[i] === '/') {
        while (oprs.length && precedence(str[i], oprs[oprs.length - 1])) {
          values.push(applyOp(oprs.pop(), values.pop(), values.pop()))
        }
        oprs.push(str[i]);
      }
    }
    while (oprs.length) {
      values.push(applyOp(oprs.pop(), values.pop(), values.pop()))
    }
    console.log(values.pop())
  }
  
  
  