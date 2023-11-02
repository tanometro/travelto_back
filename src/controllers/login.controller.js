const { login } = require('../services/login.services');

const loginFunction = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await findUser(email);

    if (!user.dataValues.email) {
      return res.status(401).send('Credenciales inválidas, no existe usuario');
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).send('Credenciales inválidas, contraseña incorrecta');
    }

    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor de login" });
  }

}
