async function getPokemon() {

    const pokemonList = document.getElementById("pokemon-list");

    try {

        const response = await fetch("http://localhost:3000/pokemons");

        if (!response.ok) {
            throw new Error("Failed to fetch Pokémon");
        }

        const pokemons = await response.json();

        console.log("Pokémon received:", pokemons);

        pokemonList.innerHTML = "";

        pokemons.forEach(pokemon => {

            // Create card
            const card = document.createElement("div");
            card.classList.add("pokemon-card");

            // Pokédex number
            const number = document.createElement("p");
            number.classList.add("pokemon-number");
            number.textContent = `#${pokemon.pokedex_number}`;

            // Pokémon name
            const name = document.createElement("h2");
            name.textContent = pokemon.name;

            // Pokémon type
            const type = document.createElement("p");
            type.classList.add("pokemon-type");

            type.textContent = pokemon.secondary_type
                ? `${pokemon.primary_type} / ${pokemon.secondary_type}`
                : pokemon.primary_type;

            // Pokémon stats
            const stats = document.createElement("div");
            stats.classList.add("pokemon-stats");

            const statValues = [
                ["HP", pokemon.hp],
                ["Attack", pokemon.attack],
                ["Defense", pokemon.defence],
                ["Sp. Attack", pokemon.special_attack],
                ["Sp. Defense", pokemon.special_defence],
                ["Speed", pokemon.speed]
            ];

            statValues.forEach(([label, value]) => {

                const stat = document.createElement("p");
                stat.textContent = `${label}: ${value}`;

                stats.appendChild(stat);

            });

            // Add elements to card
            card.appendChild(number);
            card.appendChild(name);
            card.appendChild(type);
            card.appendChild(stats);

            // Add card to page
            pokemonList.appendChild(card);

        });

    } catch (error) {

        console.error("Error:", error);

        pokemonList.textContent =
            "Could not load Pokémon. Please check your API connection.";

    }
}

getPokemon();