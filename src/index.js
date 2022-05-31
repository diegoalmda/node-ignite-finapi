const express = require('express');

const app = express();

app.use(express.json());

app.post('/account', (request, response) => {

});

app.listen(3333);