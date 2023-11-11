const { User } = require('../db');
const bcrypt = require('bcrypt');
<<<<<<< HEAD

const findUserAddGooglePass = async (email, googlePass) => {
    try {
        const user = await User.findOne({
            where: {
                email: email
            }
        });
        console.log(user.dataValues);
        if (googlePass && !user.googlePass) {
            let cryptGooglePass = bcrypt.hashSync(googlePass, 10);
            user.googlePass = cryptGooglePass;
            await user.save();
            console.log('Valor de googlePass actualizado correctamente');

        }
        return user.dataValues;
    } catch (error) {
        throw new Error(error.message);
=======
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
>>>>>>> 98e3cc5ed6917982bf091abe6c98dd8bde1c6ff4
    }

    if (bcrypt.compareSync(password, user.password)) {
      let token = jwt.sign({ user: user }, secretKey, {
        expiresIn: '24h',
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
<<<<<<< HEAD
    findUserAddGooglePass,
}
=======
  login
};
>>>>>>> 98e3cc5ed6917982bf091abe6c98dd8bde1c6ff4
