// AB Check
// Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.
// Examples
// Input: "after badly"
// Output: false
// Input: "Laura sobs"
// Output: true

// First Method
function ABCheck(str) { 

    // code goes here  
    let newStr = str.split("").join("").toLowerCase()
  let ab = newStr.search(/a...b/); // search methodunda istenen gerçekleşirse eşleştiği yerin index numarasını gerçekleşmezse -1 döner.
  if(ab > -1){  
    return true
  }else return false
  
  }

  // keep this function call here 
  console.log(ABCheck(readline()));

//  9 Points

// Second Method

function ABCheck(str) { 

  // code goes here
	var trimmedString = (((str.split(" ")).join("")).toLowerCase()).split("");
	for (var i = 0; i < trimmedString.length; i++) {
		if(trimmedString[i] == "a") {
			if (trimmedString[i + 3] == "b") {
				return "true";
				break;
			};
		}
	};
	return "false"; 

} 