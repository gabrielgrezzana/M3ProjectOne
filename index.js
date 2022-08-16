const express = require('express');
const cors = require('cors');
const router = require('./src/routes/brands.route');
const connectToDatabase = require('./src/database/database');

const port = 3000;
const app = express();

connectToDatabase();

app.use(express.json());
app.use('/brands', router);
app.use(cors());

// app.get('/brands', function (req, res) {
//   res.send('Hello world');
// });

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
