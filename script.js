let answer = 0
let a = 0
let b = 0
let h = 0
// Let makes the variable. Three of the "lets" is for what the user types in and the other is for the answer.//

document.getElementById('button').addEventListener('click', multiplication)
// This line is for making the code calculate once the button is clicked.//

function multiplication () {
  a = document.getElementById('a').value

  b = document.getElementById('b').value

  h = document.getElementById('h').value

  a = parseInt(a)

  b = parseInt(b)

  h = parseInt(h)

  answer = h * (a + b) * 1 / 2

  document.getElementById('answer').innerHTML = answer
}
// The function is for the math. The "answer" is for what equation the function is doing. Lastly, the answer will appear in the paragraph with the matching id.//
