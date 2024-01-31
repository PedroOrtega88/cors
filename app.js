const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

// Ruta para obtener todos los personajes
app.get('/characters', async (req, res) => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character/');
        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Ruta para obtener un personaje por nombre
app.get('/characters/:name', async (req, res) => {
    const characterName = req.params.name;
    
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${characterName}`);
        
        if (response.data.results.length > 0) {
            res.json(response.data.results[0]);
        } else {
            res.status(404).json({ error: 'Character not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
