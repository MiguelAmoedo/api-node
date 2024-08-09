var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

// var clienteRouter = require('./routes/cliente');
// var funcionarioRouter = require('./routes/funcionario');
// var chamadoRouter = require('./routes/chamado');
// var pontoRouter = require('./routes/ponto');

var produtoRouter = require('./routes/produtos');



var app = express();

// CORS
app.use(cors({origin:'http://localhost:3000'}));
app.options('*', cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/cliente', clienteRouter);
// app.use('/funcionario', funcionarioRouter);
// app.use('/chamado', chamadoRouter);
// app.use('/ponto', pontoRouter);

app.use('/api', produtoRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


module.exports = app;
