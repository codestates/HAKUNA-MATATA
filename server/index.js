require('dotenv').config();
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');
const router = require('./routers');
const { sequelize } = require('./models');

const app = express();
const PORT = process.env.PORT_NUMVER || 4000;

// Check DB connection
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('👉👈 Database connection successfully!');
  })
  .catch((err) => {
    console.error(err);
  });

// Middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
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

// Server Running
let server;

if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
  const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
  const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(PORT, () => console.log('🚀 server runnning'));
} else {
  server = app.listen(PORT, () =>
    console.log(`🚀 server runnning - port ${PORT}`)
  );
}

module.exports = server;
