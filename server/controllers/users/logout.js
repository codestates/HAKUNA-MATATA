module.exports = async (req, res) => {
  try {
    res.cookie('accessToken', null, { maxAge: 0 });
    res.status(200).json({ message: 'ok' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error!' });
  }
};
