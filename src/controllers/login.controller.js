const { login } = require('../services/login.services');
const jwt = require('jsonwebtoken');
const secretKey = 'Dracarys';

const loginFunction = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).send('Credenciales inválidas, no existe usuario');
  }

  try {
    const user = await login(email, password);
    const token = jwt.sign({ email: user.email, password: user.password }, secretKey, { expiresIn: '1h' });
    res.status(200).json({ email: user.email, name: user.name, picture: user.image, token });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor de login" });
  }

}

module.exports = {
  loginFunction,
}
