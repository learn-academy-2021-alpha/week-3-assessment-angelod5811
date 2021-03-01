// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//use .length



// b) Create the function that makes the test pass.
describe("when a number greater than 2 is called", () => {
  it("returns an array of the length containing the Fibonacci sequence", () => {
    //arrange
    const myArray = function (a)
    {
      if (a===1)
      {
        return [0,1];
      } else {
        var b = myArray(a-1);
        b.push(b[b.length - 1] + b[b.length - 2]);
        return b;
      }
    }
expect(myArray).toEqual([])

  })
})
console.log(myArray(5));



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//use a .push


// b) Create the function that makes the test pass.
describe("when an array of strings and numbers is called", ()=> {
  it("returns an array of only odd numbers sorted from least to greatest", ()=> {
    const sortArray(array){
      let oddNums = [];
      for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 !== 0) {
          oddNums.push(array[i]);
        }
      }
      oddNums = oddNums.sort((a,b)=> a - b);
      array.concat(oddNums);
      array = array.sort((a,b)=> a - b);
      return array;
    }
    expect("oddNums in order from least to greatest")
  })
})




// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

// a) Create a test with expect statements for each of the variables provided.

var middleLetters1 = "alpha"
// Expected output: “p”

var middleLetters2 = "rhinoceros"
// Expected output: “oc”

//use .split and .indexOf



// b) Create the function that makes the test pass.
describe("when a string of letters is called", () => {
  it("returns the middle leter if the word has an odd amount of numbers and two middle letters if even", () => {
    const str = (array)
    const middleLetters1 = (array) => {
      str.split(array) = array.indexOf(5)
      return array
    }
expect("returns middle letter if odd and both middle letters if even")
  })
})




// --------------------4) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

//use .reduce



// b) Create the function that makes the test pass.
describe("when an array of numbers is called", () => {
  it("returns an array of the accumulating sum", () => {
    const reducer = (acumulator, currentValue) => {
      acumulator + currentValue
    }
    expect("array returned with accumlating sums")
  })
})
console.log(numbersToAdd1.reduce(reducer));
