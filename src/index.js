const express = require('express');
const path = require('path');
const morgan = require('morgan')
const exphbs = require('express-handlebars');
//const pool = require('./database')

const app = express();
//require('./database');

//Middleware
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'

}));
app.set('view engine', '.hbs');

//Public
app.use(express.static(path.join(__dirname, 'public')));

app.use(require(`./routes/default.routes`));
app.use(require(`./routes/redirects.routes`));
app.use(require(`./routes/errorhandling.routes`));
/* app.use(function (req, res, next) {
    return res.status(404).render('pages/404');
});*/
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


app.listen(app.get('port'), () => {
    console.log('Server is running on port ' + app.get('port'));
});
