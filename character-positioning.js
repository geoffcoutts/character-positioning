/*
Given a string
I want to see how many different letters there are
So that I can see how many times they each occur and where they occur
*/

function letterIndices(input){
  var letters = {};
  // removes the spaces from the input string
  noSpaces = input.replace(/ /g, "").toLowerCase().split("");
  // console.log(noSpaces);
  // Check how many different letters are in the string and assign to keys
  for (var singleLetter of noSpaces){
    letters[singleLetter] = [];
  }
  // TODO: pushes each occurence to an array
  for (var key in letters){
    for (var i = 0; i < input.length; i++){
      if (key === input[i]){
        letters[key].push(i);
      }
    }
  }
  return letters;
}

console.log(letterIndices("lighthouse in the house"));