const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    /* let salida = {
            nombre: 'Carlos',
            edad: 37,
            url: req.url
        } */
    //res.send('Hola Mundo');
    //res.send(salida);
    res.render('home', {
        nombre: 'carLos'
    });
});

app.get('/about', (req, res) => {
    /* let salida = {
            nombre: 'Carlos',
            edad: 37,
            url: req.url
        } */
    //res.send('Hola Mundo');
    //res.send(salida);
    res.render('about', );
})

app.listen(port, () => {
    console.log(`Escuchando peticiones por el puerto ${port}`);
});