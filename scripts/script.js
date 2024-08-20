const cardQuantity = document.getElementById("cardQuantity")
const cardButton = document.getElementById("cardButton")
const searchCharacter = document.getElementById("cardName")
const cards = document.getElementById("cardContainer")

let quotes = []

cardQuantity.addEventListener("input", () => {
	if (cardQuantity.value > 1)
		cardButton.textContent = "Generar cartas"
	else
		cardButton.textContent = "Generar carta"
})

cardButton.addEventListener("click", () => {
	fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count="+cardQuantity.value).then(response => response.json()).then(data => {
		quotes = data
		cardContainer.innerHTML = ""
		quotes.forEach((quote) => {
			generateCard(quote)
		})
	})
})

function generateCard (quote) {
	let cardContainer = document.createElement("div")
	let cardTitle = document.createElement("h2")
	let cardImage = document.createElement("img")
	let cardQuote = document.createElement("p")

	cardTitle.textContent = quote["character"]
	cardImage.alt = quote["character"]
	cardImage.src = quote["image"]
	cardQuote.textContent  = quote["quote"]

	cardContainer.className = "card"

	cardContainer.appendChild(cardTitle)
	cardContainer.appendChild(cardImage)
	cardContainer.appendChild(cardQuote)
	cards.appendChild(cardContainer)
	console.log(cards)
}