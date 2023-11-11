const { shoppingRecord, consultaDeCompras, readAllCompras } = require("../services/compras.services");

const registroDeCompras = async (req, res) => {
  const { usuarioId,
    attractionId,
    cantidadEntradas,
    amount
  } = req.body
  try {
    if (!usuarioId || !attractionId || !cantidadEntradas || !amount) {
      res.status(400).json({ error: 'Por favor complete todos los campos requeridos' })
    }
    const registrar = await shoppingRecord(
      usuarioId,
      attractionId,
      cantidadEntradas,
      amount
    );
    res.status(200).json(registrar);
  } catch (error) {
    res.status(500).json({ error: "Error al registrar la compra: " + error })
  }
};

const consultaCompra = async (req, res) => {
  const { usuarioId } = req.params;
  try {
    const consulta = await consultaDeCompras(usuarioId);
    res.status(200).json(consulta);
  } catch (error) {
    res.status(500).json({ error: "Error al realizar la consulta: " + error })
  }
};

const consultarTodasLasCompras = async (req, res) => {
  try {
    const dbCompras = await readAllCompras();
    res.status(200).json(dbCompras)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  registroDeCompras,
  consultaCompra,
  consultarTodasLasCompras
};
