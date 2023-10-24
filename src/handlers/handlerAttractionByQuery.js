// const  {getAttractionByQuery, getAllAttraction} = require('../controllers/getAttraction')

// const handlerAttractionByQuery = async (req, res)=>{
// const {name} = req.query;
// try {
//     const sourceName = name ? await getAttractionByQuery(name) : getAllAttraction();
//     res.status(200).json(sourceName)
// } catch (error) {
//     res.status(400).json({error: 'error en el handler de query' + error.message})
// }
// }
// module.exports= handlerAttractionByQuery;