const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { User } = require('../db')

const secretKey = 'Dracarys'

const loginFunction = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error('No existe email o contraseña');
    }
    const user = await User.findOne({
      where: { email },
    });
    //*si el usuario no existe ... devolvemos un error
    if (!user) { throw new Error("No se encontro un usuario con este email"); }
    //si la contraseña no coincide enviamos un error

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).send('Credenciales inválidas, contraseña incorrecta');
    }

    let token = jwt.sign({ user: { name: user.name, email: user.email, image: user.image } }, secretKey, { expiresIn: '1d' });

    const userLog = {
      name: user.name, email: user.email, image: user.image
    };

    res.json({ user: userLog, token: token, });


  } catch (error) {
    res.status(500).json(error.message);
  }






}

module.exports = loginFunction