// declare function GetSandwichInfo
function getSandwichInfo() {
  // declare array called sandwiches
  var sandwiches = ['Philly cheesesteak', 'Italian sub', 'Reuben', 'Bahn Mi', 'Nashville Hot Chicken', 'Caprese']
  // declares variable whatIsShift and assigns it the value at the 0 index
  var whatIsShift = sandwiches.shift()
  
  var whatIsPop = sandwiches.pop()
  // declares variable whatIsLength and assigns it to the character count of the sandwhiches array
  var whatIsLength = sandwiches.length
  var whatIsIndex = sandwiches[2]

  for (var i = sandwiches.length - 1; i >= 0; i--) {
    console.log(`Hmmmm... Lemme get uh... Ummm... I'll take a ${sandwiches[i]} please. Thanks.`)
  }

  var dinnerSpecial = [sandwiches[1], sandwiches[sandwiches.length - 1], 'fries', 'two drinks']
  console.log(dinnerSpecial[0])
  dinnerSpecial[3] = 'a coupla Baja Blasts'
  console.log(dinnerSpecial[2])
  dinnerSpecial[2] = 'onion rings'

  var dailySpecial = [sandwiches[0], 'chips', 'drink']
  console.log(dailySpecial[2])
  dailySpecial[0] = 'Chesseburkle'
  console.log(dailySpecial)
  dailySpecial[1] = sandwiches[3]
}
