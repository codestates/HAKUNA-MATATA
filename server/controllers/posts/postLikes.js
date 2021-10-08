module.exports = {
  post: async (req, res) => {
    res.send(`${req.method} ${req.originalUrl}`);
  },
  delete: async (req, res) => {
    res.send(`${req.method} ${req.originalUrl}`);
  }
};
