//reverse a string in place (no popping and shoveling into new array)

let string = "hello"
let letters = string.split("")

console.log(letters)

// define 2 variables, first and last element of array

// loop until leftIndex and rightIndex meet or cross over (rightIndex becomes < leftIndex)
	// define temp variable element at leftIndex
	// move rightIndex element to the leftIndex
	// leftIndex can be assigned to rightIndex in array
	// increase leftIndex by 1
	// decrease rightIndex by 1

function reverseInPlace(letters) {
  let leftIndex = 0
	let rightIndex = letters.length - 1
  
  while(leftIndex < rightIndex) {
    let temp = letters[leftIndex]
    letters[leftIndex] = letters[rightIndex]
    letters[rightIndex] = temp
    
    leftIndex += 1
    rightIndex -= 1
  }
}

reverseInPlace(letters)

console.log(letters)