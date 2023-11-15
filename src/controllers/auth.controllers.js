const { findUser, token } = require('../services/auth.services')

const auth = async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await findUser(email, password);
    const user = { email: email }
    const accessToken = generateAccessToken(user)
  } catch (error) {

  }
}


//! ---------------------------------------------------------------
const authenticateUser = async (req, res, next) => {
  try {
    const authtoken = req.headers.authorization.split(' ')[1];
    const user = await token(authtoken);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const user = findUser(req.user.email);
    if (user.roleID === 1) {
      req.user = user;
      next();
    } else {
      return res.status(401).json({ message: 'Usuario no autorizado' });
    }
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
}

const isOperator = async (req, res, next) => {
  try {
    const user = findUser(req.user.email);
    if (user.roleID === 2) {
      req.user = user;
      next();
    } else {
      return res.status(401).json({ message: 'Usuario no autorizado' });
    }
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
}





module.exports = {
  authenticateUser,
  isAdmin,
  isOperator
};