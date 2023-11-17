const {Compra}= require('../db/index');
require('dotenv').config()
const apiKey =process.env.API_KEY
const travelEmail = process.env.email;
const sgMail = require('@sendgrid/mail');
const {getOneUser} = require('../services/users.services')
const {attractionById} = require('../services/atractions.services')
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


const shoppingRecord = async (usuarioId,attractionId,cantidadEntradas, amount)=>{
try {
    const buys = await Compra.create({
        usuarioId,
        attractionId,
        date: new Date(),
        cantidadEntradas,
        amount,

    })
    const userInfo = await getOneUser(usuarioId);
    const destinatario = userInfo.email;
    const asunto= 'Confirmacion de Compra';
    const attractionInfo = await attractionById(attractionId)
    const producto = attractionInfo.name;

    const mensaje = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmación de Compra</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 20px;
            }
    
            h2 {
                color: #3498db;
            }
    
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
            }
    
            th, td {
                border: 1px solid #3498db;
                padding: 10px;
                text-align: left;
            }
    
            th {
                background-color: #3498db;
                color: #fff;
            }
    
            p {
                margin-top: 20px;
            }
    
            address {
                font-style: normal;
            }
        </style>
    </head>
    <body>
        <h2>Confirmación de Compra</h2>
        <p>¡Gracias por tu compra! Hemos recibido tu pedido y estamos procesándolo. Aquí está la información de tu compra:</p>
    
        <table>
            <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio unitario</th>
                <th>Total</th>
            </tr>
            <tr>
                <td>${producto}</td>
                <td>${cantidadEntradas}</td>
                <td>${amount}</td>
                <td>${amount * cantidadEntradas}</td>
            </tr>
            <!-- Puedes agregar más filas según los productos de la compra -->
        </table>
    
        <p>Total de la compra: ${amount * cantidadEntradas}</p>
    
            
        <p>¡Gracias por elegir nuestros productos!</p>
    </body>
    </html>
    `

    await sendEmail(destinatario, asunto, mensaje);
    
    return buys;

} catch (error) {
    throw new Error('Error al registrar la compra services: ' + error)
}
};

const consultaDeCompras = async (usuarioId)=>{
    try {
        const compras = await Compra.findAll({
            where: {usuarioId : usuarioId}
        });
        return compras;
    } catch (error) {
        throw new Error('Error al consultar las compras: ' + error)
    }
    };

const readAllCompras =async ()=>{
    try {
        const allCompras = await Compra.findAll()
        if(allCompras.length ===0){
            return 'No hay registrada ninguna compra'
        }
        return allCompras;
    } catch (error) {
        
    }
}

module.exports ={
    shoppingRecord,
    consultaDeCompras,
    readAllCompras
} 