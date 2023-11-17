const { User } = require('../db');
const bcrypt = require('bcrypt');

const AddGooglePass = async (email, googlePass) => {
  console.log(googlePass);
  try {
    const user = await User.findOne({
      where: {
        email: email,
      }
    });
    if (!user) {
      throw new Error('Usuario no autorizado');
    }
    if (googlePass && !user.googlePass) {
      const cryptGooglePass = await bcrypt.hashSync(googlePass, 10);
      user.googlePass = cryptGooglePass;
      await user.save();
    }
    console.log(user.dataValues);
    return user.dataValues;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  AddGooglePass,
}
