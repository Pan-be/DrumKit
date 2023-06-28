const btns = document.querySelectorAll(".drum")

for (const btn of btns) {
	btn.addEventListener("click", () => {
		const audio = new Audio("./sounds/tom-1.mp3")
		audio.play()
	})
}
