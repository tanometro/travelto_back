const {Compra}= require('../db/index');



const shoppingRecord = async (usuarioId,attractionId,cantidadEntradas, amount)=>{
try {
    const buys = await Compra.create({
        usuarioId,
        attractionId,
        date: new Date(),
        cantidadEntradas,
        amount

    })
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