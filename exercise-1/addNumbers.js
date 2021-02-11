// define function called addNumbers
function addNumbers() {
  // declare a variable called firstNum with a value of 9
  var firstNum = 9
  // declare a variable called secondNum with a value of 14
  var secondNum = 14

  // re-assign variable firstNum with a value of 3
  firstNum = 3
  // re-assign variable secondNum with a value of 4
  secondNum = 4

  // put both variables
  var nums = [firstNum, secondNum]

  // declare a variable called product which is equal to firstNum x secondNum
  var product = firstNum * secondNum
  // declare a variable called sum which is equal to firstNume + secondNum
  var sum = firstNum + secondNum
  // declare a variable called average which is equal to sum / the length of the number of characters in the array
  var average = sum / nums.length

  // print the 0 index array of nums
  console.log(nums[0])
  // print the first index array of nums
  console.log(nums[1])

  // print a sentence interpolating the values of both nums
  console.log(`The first number is ${num1} and the second number is ${num2}!`)

  // return sum of both nums
  return sum // => 7
}
