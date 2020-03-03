const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const path = require('path');
const registroRouter = require('./routes/registro.route')

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: path.join(__dirname, './views/layouts/')
}));

app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home', {title:'Bienvenido'})
})

app.get('/registro', function(req, res) {
    res.render('registro')
})

app.use(registroRouter)

app.listen(3000, function() {
    console.log('Running port');
})

