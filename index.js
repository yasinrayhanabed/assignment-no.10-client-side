const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

//middlewere//

app.use(cors()); 
  app.use(express.json());
app.get('/', (req, res) => {
    res.send('smart client is running')
})