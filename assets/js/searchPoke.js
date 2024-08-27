const searchInput = document.querySelector("#search");
const cards = document.getElementsByClassName("card");

searchInput.addEventListener("keyup", (event) => {
    const value = event.target.value.trim().toUpperCase();
    console.log("Search value:", value); // Verifica o valor da busca

    Array.from(cards).forEach(card => {
        let nameElement = card.querySelector(".info .name");

        if (nameElement) {
            let name = nameElement.textContent.trim().toUpperCase();
            console.log("Card name:", name); // Verifica o nome do card

            if (name.includes(value) || value === "") {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        } else {
            console.log("No .name element found in card");
            card.style.display = "none"; // Se não encontrar .name, esconde o card
        }
    });
});