const {paymentService}= require('../services/payments.services');


// const createOrder = async (req, res) => {
//     mp.configure({
//         access_token: 'TEST-6038187742372110-102514-6594233da784d61a0cfb946bf617e92e-1524801602',
//     })

//     const response = await mp.preferences.create({
//         items: [

//         ],
//         back_urls: {
//             success: `${BASE_URL}/success`,
//             pending: `${BASE_URL}/pending`,
//             failure: `${BASE_URL}/webhook`
//     },
//     notification_url: 'traveltoback-production.up.railway.app/webhook'
//     })
//     res.status(200).send('Orden creada')
// }

const createOrder = async (req, res) => {
   try {
    const payment = await paymentService(req.body);
    res.status(201).send('Pago efectuado exitosamente');

   } catch (error) {
    res.status(500).json({error: true, message: 'Pago fallido'})
   }
};

const receiveWebhook = async (req, res) => {
    const payment = req.query;
    try {
        if(payment.type === 'payment'){
            const data = await mercadopago.payment.findById(payment['data.id']);
        
        res.status(200).send('Orden exitosa'); 
     } 
    } catch (error) {
        return res.status(400).send({error: error.message})
    }
}

module.exports = {
    createOrder, receiveWebhook
}
