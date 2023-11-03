const { User } = require('../db');
const bcrypt = require('bcrypt');




const login = async (email, password) => {

  const user = await User.findOne({
    where: {
      email: email
    }
  });

  if (!user) {
    throw new Error('Credenciales inválidas');
  }

  if (bcrypt.compareSync(password, user.password)) {
    return user;
  }

  throw new Error('Contraseña incorrecta');

};

module.exports = {
  login
};