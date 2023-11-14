const {Compra}= require('../db/index');
require('dotenv').config()
const apiKey =process.env.API_KEY
const travelEmail = process.env.email;
const sgMail = require('@sendgrid/mail');
const {getUsersById} = require('../controllers/users.controllers')
sgMail.setApiKey(apiKey);


function sendEmail(destinatario, asunto, mensaje) {
  const correo = {
      to: destinatario,
      from: travelEmail, 
      subject: asunto,
      text: mensaje,
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
        amount

    })
    const userInfo = await getUsersById(usuarioId);
    const destinatario = userInfo.email;
    const asunto= 'Confirmacion de Compra';
    const mensaje= `Gracias por tu compra en nuestra aplicación. Detalles de la compra:\n\nCantidad de entradas: ${cantidadEntradas}\nTotal: ${amount}`
    
    await sendEmail(destinatario, asunto, mensaje);
    
    return buys;

} catch (error) {
    throw new Error('Error al registrar la compra: ' + error)
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