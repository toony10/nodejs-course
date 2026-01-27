import express from 'express';
import fs from 'fs';

const app = express();

const data = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8'),
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: data.length,
    data: {
      tours: data,
    },
  });
});
/* app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.status(200).json({ message: 'you hit a post route', app: 'Natours' });
}); */

const port = 3000;
app.listen(port, '127.0.0.4', () => {
  console.log(`Server is running on port ${port}`);
});
