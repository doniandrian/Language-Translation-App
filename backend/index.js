const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());  


app.get('/', (req, res) => {
    res.render('index');
});

app.post('/translate', async (req, res) => {
    const { text, sl, tl } = req.body;

    if (!text || !sl || !tl) {
        return res.status(400).send("Please provide text and language codes.");
    }

    try {
        const response = await axios.post('https://translate.googleapis.com/translate_a/single', null, {
            params: {
                client: 'gtx',
                sl: sl,
                tl: tl,
                dt: 't',
                q: text
            }
        });

        const translatedText = response.data[0][0][0];
        return res.status(400).send(translatedText);
    } catch (error) {
        res.status(500).send("Error translating text: " + error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
