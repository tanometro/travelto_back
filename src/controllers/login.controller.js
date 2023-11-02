const { login } = require('../services/login.services');

const loginFunction = async (req, res) => {
  try {
    const { email, password } = req.query;

    if (!email || !password) {
      return res.status(400).json({ message: 'Faltan datos' });
    }

    const result = await login(email, password);

    if (result.error) {
      return res.status(401).json({ message: result.error });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor de login' });
  }
};

module.exports = {
  loginFunction
};
