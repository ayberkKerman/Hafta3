const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

function middleware(req, res, next){
  console.log("Yeni bir istek geldi.");
  next();
}

app.use('/hello',middleware)


app.get('/hello', (req, res) => {
  res.send('Merhaba Get İsteği Attınız.');
});

app.post('/hello', (req, res) => {
    res.send('Merhaba Post İsteği Attınız.');
  });

app.put('/hello', (req, res) => {
    res.send('Merhaba Put İsteği Attınız.');
  });

app.delete('/hello', (req, res) => {
    res.send('Merhaba Delete İsteği Attınız.');
  });



app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});