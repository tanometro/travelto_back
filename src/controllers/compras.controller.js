const { shoppingRecord, consultaDeCompras } = require("../services/compras");

const registroDeCompras = async (req, res) => {
    const {  usuarioId,
        attractionId,
        cantidadEntradas,
        amount
      }= req.body
  try {
    const registrar = await shoppingRecord(
      usuarioId,
      attractionId,
      cantidadEntradas,
      amount
    );
    res.status(200).json(registrar);
  } catch (error) {
    res.status(500).json({error: "Error al registrar la compra: " + error})
     }
};

const consultaCompra = async (req, res) => {
    const {usuarioId}= req.params;
  try {
    const consulta = await consultaDeCompras(usuarioId);
    res.status(200).json(consulta);
  } catch (error) {
    res.status(500).json({ error: "Error al realizar la consulta: " + error })
  }
};

module.exports = {
  registroDeCompras,
  consultaCompra,
};
