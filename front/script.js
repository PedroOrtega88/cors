function getRickCharacters() {
    const rickCharacterInput = document.getElementById('rickCharacter');
    const rickInfo = document.getElementById('rickinfo');

    const rickName = rickCharacterInput.value.toLowerCase();

    fetch(`http://localhost:4000/characters/${rickName}`)
        .then(response => response.json())
        .then(data => {
            const { name, status, species, gender, origin, image } = data;
            rickInfo.innerHTML = `
                <h2> ${name}</h2>
                <img src="${image}" alt="${name}" />
                <p>status: ${status}</p>
                <p>species: ${species}</p>
                <p>gender: ${gender}</p>
                <p>origin:${origin}</p>
            `;
        })
        .catch(error => {
            rickInfo.innerHTML = `<p>Imposible acceder al personaje</p>`;
            console.error('Error fetching character data:', error);
        });
}
