const btns = document.querySelectorAll(".drum")

const playTheSound = (input) => {
	switch (input) {
		case "w":
			const w = new Audio("./sounds/tom-1.mp3")
			w.play()

			break
		case "a":
			const a = new Audio("./sounds/tom-2.mp3")
			a.play()

			break
		case "s":
			const s = new Audio("./sounds/tom-3.mp3")
			s.play()

			break
		case "d":
			const d = new Audio("./sounds/tom-4.mp3")
			d.play()

			break

		case "j":
			const j = new Audio("./sounds/snare.mp3")
			j.play()

			break

		case "k":
			const k = new Audio("./sounds/kick-bass.mp3")
			k.play()

			break
		case "l":
			const l = new Audio("./sounds/crash.mp3")
			l.play()

			break

		default:
			break
	}
}

const btnAnimation = (input) => {
	const activeBtn = document.querySelector(`.${input}`)

	activeBtn.classList.add("pressed")
	setTimeout(() => {
		activeBtn.classList.remove("pressed")
	}, 100)
}

const play = (input) => {
	playTheSound(input)
	btnAnimation(input)
}

for (const btn of btns) {
	btn.addEventListener("click", (e) => {
		const btnInnerHTML = e.target.innerHTML
		play(btnInnerHTML)
	})
}

document.addEventListener("keydown", (e) => {
	play(e.key)
})
