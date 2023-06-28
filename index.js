const btns = document.querySelectorAll(".drum")

for (const btn of btns) {
	btn.addEventListener("click", () => console.log(btn))
}
