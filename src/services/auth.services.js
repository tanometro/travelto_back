const {User} = require('../db');
const jwt = require("jsonwebtoken");
const secretKey = 'Dracarys'


const findUser = async (email, password) => {
    try {
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        if (user) {
            // Verificar la contraseña aquí
            if (user.password === password) {
                return user;
            } else {
                throw new Error('Contraseña incorrecta');
            }
        } else {
            throw new Error('No existe el usuario');
        }
    } catch (error) {
        throw new Error("Amig@ intenta de nuevo. " + error.message);
    }
};
//! ----------------------------------------------------------------------------

const token = async (token) => {
  try {
    if (!token) {
      throw new Error('Acceso no autorizado');
    }

    const decoded = jwt.verify(token, secretKey);
    const user = await User.findByPk(decoded.user.id, {
      attributes: ['name', 'email']
    });

    if (!user) {
      throw new Error('No existe el usuario');
    }

    return user;
  } catch (error) {
    throw new Error('No autorizado');
  }
};

module.exports = {
    findUser,
    token
}
