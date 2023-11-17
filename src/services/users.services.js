const { User } = require("../db");
const bcrypt = require('bcrypt');

/* const jwt = require("jsonwebtoken");
const secretKey = 'Dracarys' */

require('dotenv').config()
const apiKey = process.env.API_KEY
const travelEmail = process.env.email;
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(apiKey);

function sendEmail(destinatario, asunto, mensaje) {
  const correo = {
    to: destinatario,
    from: travelEmail,
    subject: asunto,
    html: mensaje,
  };

  return sgMail.send(correo);
}

const register = async (name, lastName, dni, image, email, password, roleID) => {
  let cryptPass;
  if (password.length >= 5) {
    cryptPass = bcrypt.hashSync(password, 10);
  } else {
    throw new Error("Contraseña no valida");
  }
  try {

    const user = await User.create({
      name,
      lastName,
      dni,
      image,
      email,
      password: cryptPass,
      roleID
    });

    const destinatario = email
    const asunto = 'Bienvenido a TravelTo'
    const mensaje = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Confirmación de Registro</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  margin: 20px;
                  background-color: #f4f4f4;
              }

              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  background-color: #fff;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }

              h2 {
                  color: #3498db;
              }

              p {
                  margin-top: 20px;
              }

              .button {
                  display: inline-block;
                  padding: 10px 20px;
                  margin-top: 20px;
                  background-color: #3498db;
                  color: #fff;
                  text-decoration: none;
                  border-radius: 5px;
              }

              .footer {
                  margin-top: 20px;
                  font-size: 12px;
                  color: #777;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <h2>¡Bienvenido a nuestro sitio web!</h2>
              <p>Gracias por registrarte en nuestro sitio. Tu cuenta ha sido creada con éxito.</p>
              <p>Para comenzar a disfrutar de nuestros servicios, por favor haz clic en el siguiente enlace:</p>

              <a class="button" href="https://travelto-front.vercel.app/">Confirmar Registro</a>

              <p class="footer">Si no te registraste en nuestro sitio, por favor ignora este correo.</p>
          </div>
      </body>
      </html>
      `
    await sendEmail(destinatario, asunto, mensaje)
    return user; // Devolver el usuario

  } catch (error) {
    return { error: error.message }; // Devolver un objeto con el mensaje de error
  }
}

// Otras funciones sin cambios...




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
    throw new Error("No se pudo encontrar al usuario " + error.message);
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

module.exports = {
  register,
  // createUsersLocal,
  readAll,
  updateUserModel,
  destroyUser,
  getOneUser,
  findByName,
};
