const {Payment} = require('../db');

const createPreference = async (details) => {
   const crearPago = await Payment.create(details);
  
   return 

  }

module.exports = createPreference;
