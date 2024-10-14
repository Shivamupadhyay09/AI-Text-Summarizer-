const express = require('express');
const cors = require('cors'); // CORS ko import karein

const app = express();
const port = 3000;

const summarizeText = require('./summarize.js');

app.use(express.json());
app.use(cors()); 

app.use(express.static('public')); 

app.post('/summarize', (req, res) => {
  const text = req.body.text_to_summarize;

  summarizeText(text)
    .then(response => {
      res.send(response); 
    })
    .catch(error => {
      console.log(error.message);
      res.status(500).send('An error occurred'); 
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});