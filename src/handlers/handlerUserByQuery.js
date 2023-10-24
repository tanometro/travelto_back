// const {getUsersByQuery, getAllUsers} = require('../controllers/getUsers')

// const handlerUserByQuery = async (req, res)=>{
// const {name} = req.query;
// try {
//     const sourceName = name ? await getUsersByQuery(name) : getAllUsers();
//     res.status(200).json(sourceName)
// } catch (error) {
//     res.status(400).json({error: 'error en el handler de query' + error.message})
// }

// };

// module.exports = handlerUserByQuery;