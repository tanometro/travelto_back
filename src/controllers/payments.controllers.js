const createOrder = (req, res) => {
    res.status(200).send('Orden creada')
}

const successOrder = (req, res) => {
    res.status(200).send('Orden exitosa')
}

const webhook = (req, res) => {
    res.status(200).send('Orden exitosa')
}

module.exports = {
    createOrder, successOrder, webhook
}
