async function searchCharacter() {
    const characterName = document.getElementById('characterName').value;
    const characterInfoDiv = document.getElementById('characterInfo');
    
    try {
        const response = await fetch(`http://localhost:3000/characters/${characterName}`);
        const data = await response.json();

        if (response.ok) {
            displayCharacterInfo(data);
        } else {
            characterInfoDiv.classList.add('hidden');
            alert(`Character not found: ${characterName}`);
        }
    } catch (error) {
        console.error('Error fetching character data:', error);
        alert('Error fetching character data. Please try again.');
    }
}

function displayCharacterInfo(character) {
    const characterInfoDiv = document.getElementById('characterInfo');

    document.getElementById('characterImage').src = character.image;
    document.getElementById('characterNameDisplay').textContent = character.name;
    document.getElementById('characterStatus').textContent = character.status;
    document.getElementById('characterSpecies').textContent = character.species;
    document.getElementById('characterGender').textContent = character.gender;
    document.getElementById('characterOrigin').textContent = character.origin.name;

    characterInfoDiv.classList.remove('hidden');
}