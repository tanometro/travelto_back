const { User } = require("../db");
const bcrypt = require('bcrypt');

const jwt = require("jsonwebtoken");
const secretKey = 'Dracarys'

const register = async (name, dni, image, email, password, roleID) => {
  try {
<<<<<<< HEAD
    const userDefault = usuarios.users.map((user) => {

      return {
        id: user.id,
        name: [user.name[0], user.name[1]],
        dni: user.DNI,
        image: user.image,
        email: user.email,
        password: user.password,
        isActive: user.isActive,
        roleID: user.roleId,
      };
    });
=======
    let err = "";
>>>>>>> 644784704f1f7c3f04120be26746d4d068376e67

    if (!name || !dni || !image || !email || !password) {
      err += 'Provide all required fields: ';
      if (!name) err += "name ";
      if (!dni) err += "dni ";
      if (!image) err += "image ";
      if (!email) err += "email ";
      if (!password) err += "password ";
    }

    if (err) {
      return { error: err }; // Devolver un objeto con el mensaje de error
    } else {
      let cryptPass;
      if (password.length >= 5) {
        cryptPass = bcrypt.hashSync(password, 10);
      } else {
        cryptPass = password;
      }

      const user = await User.create({
        name,
        dni,
        image,
        email,
        password: cryptPass,
        roleID
      });
      let token = jwt.sign({ user: user }, secretKey, {
        expiresIn: "24h",
      });

      return { user, token }; // Devolver un objeto con los datos del usuario y el token
    }
  } catch (error) {
    return { error: error.message }; // Devolver un objeto con el mensaje de error
  }
}



const readAll = async () => {
  try {
    const users = await User.findAll()

    if (users.length === 0) {
      return 'no hay usuarios en la bdd'
    }
    return users
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

const getOneUser = async (id) => {
  try {
    const response = await User.findByPk(id);
    if (!response) {
      return "No se encontro el usuario solicitado";
    }
    return response;
  } catch (error) {
    throw new Error(
      `No se pudo encontrar el user con id ${id}` + error.message
    );
  }
};

const findByName = async (searchName) => {
  try {
    const usuarios = await readAll()

    if (!usuarios || !searchName) {
      throw new Error('no se encontraron usuarios')
    }

    const results = usuarios.filter((user) => {
      const userNames = user.name.map((us) => us.toLowerCase());
      searchName = searchName.toLowerCase();
      return userNames.some((us) => us.includes(searchName));
    });

    if (results.length === 0) {
      throw new Error(`No se encontraron usuarios cuyos nombres contengan "${searchName}"`);
    }

    return results;
  } catch (error) {

  }
};

const updateUserModel = async (id, updateData) => {
  try {
    const user = await User.findByPk(id)

    if (!user) {
      throw new Error('Usuario no encontrado')
    }

    const updatedUser = await User.update(updateData)

    return updatedUser
  } catch (error) {
    throw new Error(`No se pudo editar el user con id ${id}` + error.message);
  }
};

const destroyUser = async (id) => {
  try {
    const user = await User.findByPk(id)

    if (!user) {
      throw new Error('Usuario no encontrado')
    }

    await user.update({ isActive: false })

    return 'Usuario desactivado exitosamente'
  } catch (error) {
    throw new Error("No se pudo desactivar el usuario " + error.message);
  }
};
//! unica que ricardo usa, porque debe andar imagino ------------------------------------
// const createUsersLocal = async (
//   name,
//   dni,
//   roleId,
//   email,
//   password,
//   isActive,
//   image
// ) => {
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10)
//     const create = await User.create({
//       name: name,
//       dni: dni,
//       roleID: roleId,
//       email: email,
//       password: hashedPassword,
//       isActive: isActive,
//       image: image,
//     });
//     return create;
//   } catch (error) {
//     throw new Error("No se pudo crear el usuario " + error.message);
//   }
// };
//! unica que ricardo usa, porque debe andar imagino ------------------------------------

const findByEmailAndPassword = async (email, password) => {
  try {
    const usuario = await User.findOne({ where: { email, password: password } });

    if (!usuario) {
      throw new Error('No se encuentra el usuario registrado');
    }

    return usuario;
  } catch (error) {
    throw new Error(error.message);
  }

}


module.exports = {
  register,
  // createUsersLocal,
  readAll,
  updateUserModel,
  destroyUser,
  getOneUser,
  findByName,
  findByEmailAndPassword,
};
