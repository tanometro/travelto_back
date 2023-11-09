const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { findUserAddGooglePass } = require('../services/login.services');

const secretKey = 'Dracarys'

const loginFunction = async (req, res) => {
  const { email, password, googlePass } = req.body;
  try {
    const user = await findUserAddGooglePass(email, googlePass);

    if (!user.email) {
      return res.status(401).send('Credenciales inválidas, no existe usuario');
    }
    const valid = (password) ? await bcrypt.compare(password, user.password) : await bcrypt.compare(googlePass, user.googlePass);
    if (!valid) {
      return res.status(401).send('Credenciales inválidas, contraseña incorrecta');
    }

    const token = jwt.sign({ email, password }, secretKey, { expiresIn: '1h' });
    console.log("user con token");
    console.log({ name: user.name, email: user.email, dni: user.dni, picture: user.image, roleID: user.roleID, token: token });

    res.status(200).json({ name: user.name, email: user.email, dni: user.dni, picture: user.image, roleID: user.roleID, token: token });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor de login" });
  }

}

module.exports = loginFunction