const { User } = require("../db");
const bcrypt = require('bcrypt');

const jwt = require("jsonwebtoken");
const secretKey = 'Dracarys'

const register = async (name, lastName, dni, image, email, password, roleID) => {
  try {
    let err = "";

    if (!name ||!lastName || !dni || !image || !email || !password) {
      err += 'Provide all required fields: ';
      if (!name) err += "name ";
      if (!lastName) err += "lastName ";
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
        lastName,
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

// Otras funciones sin cambios...




const readAll = async () => {
  try {
    const users = await User.findAll()

    if(users.length === 0) {
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

    if(!usuarios || !searchName) {
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
    throw new Error("No se pudo encontrar al usuario " + error.message);
  }
};

const updateUserModel = async (id, updateData) => {
  try {
    const user = await User.findByPk(id)

    if(!user) {
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

    if(!user) {
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

module.exports = {
  register,
  // createUsersLocal,
  readAll,
  updateUserModel,
  destroyUser,
  getOneUser,
  findByName,
};
