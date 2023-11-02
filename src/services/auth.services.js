const {User} = require('../db');

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

module.exports = {
    findUser
}
