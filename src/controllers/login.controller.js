const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const {User} = require('../db')

const secretKey = 'Dracarys'



const loginFunction = async (req, res)=>{
    const { email, password } = req.body;

    const user = await User.findOne({
        where: {
            email: email
        }
    });
    
    console.log(user)
   



    if (!user.dataValues.email) {
      return res.status(401).send('Credenciales inválidas, no existe usuario');
    }
  
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).send('Credenciales inválidas, contraseña incorrecta');
    }
  
    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
    console.log(token)
    res.json({ token });
  
}

module.exports = loginFunction