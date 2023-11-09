const { User } = require('../db');
const bcrypt = require('bcrypt');

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
    }
}

module.exports = {
    findUserAddGooglePass,
}