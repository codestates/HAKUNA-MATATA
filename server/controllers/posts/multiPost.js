module.exports = {
  get: async (req, res) => {
    res.send(`${req.method} ${req.originalUrl}`);
  }
};
