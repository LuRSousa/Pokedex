//Mecânica de Pesquisa
const searchInput = document.querySelector("#search");

searchInput.addEventListener('input', function(e) {
    const value = e.target.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const info = card.querySelector(".info");
        if (info) {
            const nameElement = info.querySelector("#name");
            console.log(nameElement);
            if (nameElement) {
                const name = nameElement.textContent.toLowerCase();

                if (name.includes(value)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            }
        }
    });
});