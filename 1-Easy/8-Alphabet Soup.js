function StringChallenge(str) { 

    // code goes here  
    let liste = [""];
    liste = str.split("");
    liste = liste.sort(function(a,b){return a.localeCompare(b)});
    liste = liste.join("");
    return liste;
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));