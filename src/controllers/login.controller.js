const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { AddGooglePass } = require('../services/login.services');
const { findUser } = require('../services/auth.services');

const secretKey = 'Dracarys'

const loginFunction = async (req, res) => {
  const { email, password, googlePass } = req.body;
  try {
    //traigo el usuario
    const user = await findUser(email);
    if (!user.email) {
      return res.status(401).send('Credenciales inválidas, no existe usuario');
    }
    if (!user.googlePass && googlePass) {
      await AddGooglePass(user.email, googlePass);
    }

    const valid = (password) ? await bcrypt.compare(password, user.password) : await bcrypt.compare(googlePass, user.googlePass);
    if (!valid) {
      return res.status(401).send('Credenciales inválidas, contraseña incorrecta');
    }

    const token = jwt.sign({ email, password }, secretKey, { expiresIn: '24h' });

    res.status(200).json({ name: user.name, email: user.email, picture: user.image, roleID: user.roleID, token: token });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor de login" });
  }

}

const prueba = (a) => {
  return a
}

module.exports = {
  loginFunction
};
