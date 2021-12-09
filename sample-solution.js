// SAMPLE SOLUTION - NON STRETCH

var gradebook = {
  Elizabeth : {
    testScores: scores[3]
  },
  Wiremu: {
    testScores: scores[2]
  },
  Susan: {
    testScores: scores[1]
  },
  Joseph: {
    testScores: scores[0]
  }
}

function addScore (book, name, score) {
  book[name].testScores.push(score)
}

function average(arr) {
  var total = 0
  for (let i = 0; i < arr.length; i++) { 
    total += arr[i]
  }
  return total/arr.length
}

function getAverage (name) {
  var scores = gradebook[name].testScores
  return average(scores)
}

// STRETCH

function enterScores (book, students, scores) {
  students.forEach((name, idx) => {
    book[name] = {}
    book[name].testScores = scores[idx]
  })
}