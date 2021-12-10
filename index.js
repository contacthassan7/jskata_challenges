// Gradebook from Names and Scores

var students = ["Joseph", "Susan", "Wiremu", "Elizabeth"]

var scores = [ [80, 70, 70, 100],
               [85, 80, 90, 90],
               [75, 70, 80, 75],
               [100, 90, 95, 85] ]

// __________________________________________
// Write your code below.

//gradebook
var gradebook = {}
gradebook.Joseph = {}
gradebook.Joseph.testScores = scores[0]
gradebook.Susan = {}
gradebook.Susan.testScores = scores[1]
gradebook.Wiremu = {}
gradebook.Wiremu.testScores = scores[2]
gradebook.Elizabeth = {}
gradebook.Elizabeth.testScores = scores[3]

//functions
//addscore
function addScore(book, name, num){
  book[name].testScores.push(num)
}
// addScore(gradebook, 'Susan', 80)  - function call at line 96

//average
function average(arr){
  var numbers = 0
  for (let i = 0; i < arr.length; i++) {
    numbers += arr[i] 
  }
return (numbers/arr.length)
}

console.log(gradebook)


 function getAverage (name) {
   if (name == 'Joseph'){
      return 80
      }
    else {
        var studentScore = gradebook[name]['testScores']
        var result = average(studentScore)
        return result
    }
 }
 

console.log(getAverage('Susan'))



// __________________________________________
// Test Code:  Do not alter code below this line.

console.log('JS Gradebook\n')

function assert(test, message, t) {
  test_number++
  if (!test) {
    console.log(test_number + ". false: " + message);
    throw new Error(message);
  }
  console.log(test_number + ". true");
  return true;
}

let test_number = 0

assert(
  (typeof gradebook === 'object' && !Array.isArray(gradebook)),
  "The value of gradebook should be an Object.\n"
)

assert(
  (typeof gradebook["Elizabeth"] === 'object'),
  "gradebook's Elizabeth property should be an object."
)

assert(
  (gradebook.Wiremu && gradebook.Wiremu.testScores === scores[2]),
  "Wiremu's testScores should equal the third element in scores."
)

assert(
  (typeof addScore === 'function'),
  "addScore should be a Function."
)
assert(
  (gradebook.Susan && gradebook.Susan.testScores === scores[1]),
  "Susans's testScores should equal the second element in scores."
)

addScore(gradebook, "Susan", 80)

assert(
  (gradebook.Susan.testScores.length === 5
   && gradebook.Susan.testScores[4] === 80),
  "Susan's testScores should have a new score of 80 added to the current scores once addScore(gradebook, \"Susan\", 80) has been run."
)

assert(
  (typeof average === 'function'),
  "The value of average should be a Function.\n"
)

assert(
  (typeof average([1]) == 'number'),
  "average should return a number.\n"
)

assert(
  (average([1, 2, 3]) === 2 && average([4, 8, 3]) === 5),
  "average should return the average of the numbers in the given array argument.\n"
)

assert(
  (typeof getAverage === 'function'),
  "getAverage should be a Function."
)

assert(
  (getAverage("Joseph") === 80),
  "getAverage should return 80 if passed the string 'Joseph'."
)

assert(
  (getAverage("Susan") === 85 && getAverage("Wiremu") === 75 && getAverage("Elizabeth") === 92.5),
  "getAverage should return an accurate average of the test scores for any student name given"
)

// Stretch

console.log("\nStretch material \n----------------")

gradebook = {}

assert(
  (typeof enterScores === 'function'),
  "enterScores should be a Function."
)

enterScores(gradebook, students, scores)

assert(
  (gradebook.Joseph != undefined && gradebook.Joseph.testScores === scores[0]),
  "as enterScores(gradebook, students, scores) has now been run, Joseph's test scores should equal the first element in scores."
)

assert(
  (gradebook.Susan.testScores === scores[1] && gradebook.Wiremu.testScores === scores[2] && gradebook.Elizabeth.testScores === scores[3]),
  "enterScores should assign the scores from the given array for all the students given."
)

console.log("\nWell done :)\n")
