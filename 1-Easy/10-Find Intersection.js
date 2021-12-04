// Find Intersection
// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
// Examples
// Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Output: 1,4,13
// Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// Output: 1,9,10


function FindIntersection(strArr) { 

    // code goes here  
  const lists = strArr.map((str) => str.split(", ")); // [["1", "3", "9", "10", "17", "18"], ["1", "4", "9", "10"]]
  const firstList = lists[0]; // ["1", "3", "9", "10", "17", "18"]
  const secondList = lists[1]; // ["1", "4", "9", "10"]
  
  let matchMap = {}; // matchMap bir nesne demek. Bunu yazmasaydık matchMap çıktısını alamazdık.
  let resultArr = []; // resultArr bir dizi demek
  
  firstList.forEach( num => matchMap[num] = true );  
// {  matchMap'e alttaki nesneyi atadık
//   "1": true,
//   "3": true,
//   "9": true,
//   "10": true,
//   "17": true,
//   "18": true,
// }
  
  
  secondList.forEach(num => {
    if(matchMap[num]) {
      resultArr.push(num);
    }
  }) // yani biz MatchMap'in içindekilerle SecondList eşleşiyorsa bunu resultArr'a ekle dedik. ["1", "9", "10"] = resultArr
  
  if (resultArr.length > 0) {
    return resultArr.join(",") // ["1","9","10"]
  } 
  
  return false;


  
  }

  