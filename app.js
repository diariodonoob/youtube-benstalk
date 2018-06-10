const express = require('express');

const app = express();

app.get('/', (req, res) => res.status(200).json({title: 'Diário do noob', message: 'Estou vivo'}));


const port = process.env.PORT || 8080


app.listen(port, () => console.log(`O servidor subiu na porta ${port}`))
