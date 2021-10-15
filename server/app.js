require('dotenv').config();
const fs = require('fs');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');
const router = require('./routers');
const app = express();

// Handling unexpected exceptions
process.on('uncaughtException', (err) => {
  console.log('uncaughtException : ', err);
});

// Create uploads folder
try {
  fs.readdirSync('uploads');
} catch (err) {
  console.log('uploads/profile 폴더가 없어 uploads/profile 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
  fs.mkdirSync('uploads/profile');
}

// Middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [process.env.CLIENT_ORIGIN],
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS']
  })
);

// Routing
app.get('/', (req, res) => {
  res.send('Hakuna Matata!');
});

app.use('/posts', router.postRouter);
app.use('/users', router.userRouter);

app.use((req, res, next) => {
  const error = new Error(
    `${req.method} ${req.originalUrl} 라우터가 없습니다.`
  );
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message);
});

module.exports = app;
