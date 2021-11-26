var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');

const UsersRouter = require('./app/users/router');
const DashboardRouter = require('./app/dashboard/router');
const CategoryRouter = require('./app/category/router');
const NominalRouter = require('./app/nominal/router');
const VoucherRouter = require('./app/voucher/router');
const BankRouter = require('./app/bank/router');
const PaymentRouter = require('./app/payment/router');
const TransactionRouter = require('./app/transaction/router');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(flash());
app.use(methodOverride('_method'))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/adminlte', express.static(path.join(__dirname, '/node_modules/admin-lte')));

app.use('/', UsersRouter);
app.use('/dashboard', DashboardRouter);
app.use('/category', CategoryRouter);
app.use('/nominal', NominalRouter);
app.use('/voucher', VoucherRouter);
app.use('/bank', BankRouter);
app.use('/payment', PaymentRouter);
app.use('/transaction', TransactionRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
