const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

app.use(express.json());

//req.query = acessar query params (para filtros)
//req.params = acessar route params (para edicao e delete)
//req.body = acessar corpo da requisicao (para criacao e edicao)
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-fkehl.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => console.log('connected to db'))

app.use(routes);

app.listen(3333);
