import express from 'express';
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(express.static('dist'))
app.use(cors())

app.get('/', (req, res) => {

    res.status(200).send();
});

app.get('/api/stations-data', async (req, res) => {
    const response = await fetch('http://flask-api:5000/api/stations-data')
    const result = await response.json();
    res.json(result)
})

const port = 3001;
app.listen(port, async () => {
    console.log(`movatic: listening on port ${port}`);
});