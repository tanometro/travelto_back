const {findUser, token} = require('../services/auth.services')

const auth = async (req, res) => {
    const {email, password} = req.body;
    try {
        const response = await findUser(email, password);
        const user = {email: email}
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

  module.exports = {
    authenticateUser
  };