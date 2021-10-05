require('dotenv').config();
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.HTTPS_PORT || 4000;

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
app.use('/', (req, res) => {
  res.send('hello world!');
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
