module.exports = async (req, res) => {
  res.send(`${req.method} ${req.originalUrl}`);
};
