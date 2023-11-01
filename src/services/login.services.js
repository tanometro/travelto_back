const {User} = require('../db');

const findUser = async (email) => {
    try {
      const user = await User.findOne({
            where: {
               email: email
             }
         });
    return user
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    findUser
}