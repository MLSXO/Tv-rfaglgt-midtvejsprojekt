async function getPokemon(url = "http://localhost:3000/pokemons") {

    const pokemonList = document.getElementById("pokemon-list");

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch Pokémon");
        }

        const pokemons = await response.json();

        pokemonList.innerHTML = "";

        if (pokemons.length === 0) {
            pokemonList.textContent = "No Pokémon found.";
            return;
        }

        pokemons.forEach(pokemon => {

            const card = document.createElement("div");
            card.classList.add("pokemon-card");

            const number = document.createElement("p");
            number.classList.add("pokemon-number");
            number.textContent = "#" + pokemon.pokedex_number;

            const name = document.createElement("h2");
            name.textContent = pokemon.name;

            const type = document.createElement("p");
            type.classList.add("pokemon-type");

            if (pokemon.secondary_type) {
                type.textContent =
                    pokemon.primary_type + " / " + pokemon.secondary_type;
            } else {
                type.textContent = pokemon.primary_type;
            }

            const stats = document.createElement("div");
            stats.classList.add("pokemon-stats");

            stats.innerHTML = `
                <p>HP: ${pokemon.hp}</p>
                <p>Attack: ${pokemon.attack}</p>
                <p>Defense: ${pokemon.defence}</p>
                <p>Sp. Attack: ${pokemon.special_attack}</p>
                <p>Sp. Defense: ${pokemon.special_defence}</p>
                <p>Speed: ${pokemon.speed}</p>
            `;

            card.appendChild(number);
            card.appendChild(name);
            card.appendChild(type);
            card.appendChild(stats);

            pokemonList.appendChild(card);

        });

    } catch (error) {

        console.error(error);
        pokemonList.textContent = "Could not load Pokémon.";

    }
}


// SEARCH BUTTON

document.getElementById("searchButton").addEventListener("click", function () {

    const name = document.getElementById("searchName").value.trim();
    const type = document.getElementById("pokemonType").value;
    const attack = document.getElementById("minAttack").value;

    const params = new URLSearchParams();

    if (name !== "") {
        params.append("name", name);
    }

    if (type !== "") {
        params.append("type", type);
    }

    if (attack !== "") {
        params.append("minAttack", attack);
    }

    getPokemon("http://localhost:3000/pokemons?" + params.toString());

});


// RESET BUTTON

document.getElementById("resetButton").addEventListener("click", function () {

    document.getElementById("searchName").value = "";
    document.getElementById("pokemonType").value = "";
    document.getElementById("minAttack").value = "";

    getPokemon();

});


// LOAD ALL POKEMON WHEN PAGE OPENS

getPokemon();