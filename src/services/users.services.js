const { User } = require("../db");
const usuarios = require("../../Api/Users.json");

const creadodefault = async (req, res) => {
  try {
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

    const addUser = await User.bulkCreate(userDefault);

    const userValues = addUser.map((user) => {
      return {
        id: user.dataValues.id,
        name: user.dataValues.name,
        dni: user.dataValues.dni,
        image: user.dataValues.image,
        email: user.dataValues.email,
        password: user.dataValues.password,
        isActive: user.dataValues.isActive,
        roleID: user.dataValues.roleID,
      };
    });
    return userValues;
  } catch (error) {
    throw new Error(
      "No se a podido crear el usuario por defecto " + error.message
    );
  }
};

const createUsersLocal = async (
  name,
  dni,
  roleId,
  email,
  password,
  isActive,
  image
) => {
  try {
    const create = await User.create({
      name: name,
      dni: dni,
      roleID: roleId,
      email: email,
      password: password,
      isActive: isActive,
      image: image,
    });
    return create;
  } catch (error) {
    throw new Error("No se pudo crear el user " + error.message);
  }
};

const destroyUser = (id) => {
  try {
    const response = User.destroy({
      where: {
        id: id,
      },
    });
    return response;
  } catch (error) {
    throw new Error("No se pudo eliminar el user " + error.message);
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

const updateUserModel = async (id, updateData) => {
  try {
    const response = await User.update(updateData, {
      where: {
        id: id,
      },
    });
    if (response[0] === 0) {
      throw new Error("No existe ese id");
    }

    return response;
  } catch (error) {
    throw new Error(`No se pudo editar el user con id ${id}` + error.message);
  }
};

const readAll = async () => {
  try {
    const response = await User.findAll();

    if (response.length === 0) {
      await creadodefault();
    }
    const usu = await User.findAll();

    return usu;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

const findByName = async (name) => {
  try {
    const usuarios = await readAll();
    if (!usuarios) {
      throw new Error(
        "No se pudo encontrar a los usuarios en la base de datos"
      );
    }
    const busqueda = usuarios.find((user) => {
      return user.name
        .map((userName) => userName.toLowerCase())
        .includes(name.toLowerCase());
    });

    if (!busqueda) {
      throw new Error(
        `No se pudo encontrar ningún usuario con nombre "${name}"`
      );
    }

    return busqueda;
  } catch (error) {
    `No se pudo encontrar ningun usuario con nombre ${name}` + error.message;
  }
};

module.exports = {
  createUsersLocal,
  readAll,
  updateUserModel,
  destroyUser,
  getOneUser,
  findByName,
};
