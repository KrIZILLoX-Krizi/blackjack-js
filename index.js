let isStart = false
let count = 0
function start() {
	if(isStart === true) return
	isStart = true
	count = 0
	replay()
}

function replay () {
	if(isStart === false) return
	let first_card = Math.floor(Math.random()*12)
	let second_card = Math.floor(Math.random()*12)

	if(first_card === 0 || first_card === 1) first_card += 2
	if(second_card === 0 || second_card === 1) second_card += 2

	let sum = first_card+second_card

	document.getElementById("cards-el").textContent = first_card+", "+ second_card
	document.getElementById("sum-el").textContent = sum

	if(sum === 21) {
		result = "Win!"
		isStart = false
	}
	else if(sum < 21) {
		result = "Try again"
		++count
	}
	else if(sum > 21) {
		result = "Lose!"
		isStart = false
	}

	document.getElementById("result-el").textContent = result
	document.getElementById("tries-el").textContent = "Tries: "+count
}
