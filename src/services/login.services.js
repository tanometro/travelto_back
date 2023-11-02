const { User } = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = 'Dracarys';

const login = async (email, password) => {
  try {
    const user = await User.findOne({
      where: {
        email: email
      }
    });

    if (!user) {
      return { error: 'Credenciales inválidas' };
    }

    if (bcrypt.compareSync(password, user.password)) {
      let token = jwt.sign({ user: user }, secretKey, {
        expiresIn: '1h',
      });

      return {
        user: user,
        token: token,
      };
    }

    return { error: 'Contraseña incorrecta' };
  } catch (error) {
    throw new Error('Error en el servidor de login');
  }
};

module.exports = {
  login
};