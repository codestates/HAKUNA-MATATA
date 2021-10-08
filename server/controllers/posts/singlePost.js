module.exports = {
  get: async (req, res) => {
    res.send(`${req.method} ${req.originalUrl}`);
  },
  patch: async (req, res) => {
    res.send(`${req.method} ${req.originalUrl}`);
  },
  delete: async (req, res) => {
    res.send(`${req.method} ${req.originalUrl}`);
  }
};
