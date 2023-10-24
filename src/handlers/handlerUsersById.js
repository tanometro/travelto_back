// const {getUsersById} = require('../controllers/getUsers')

// const handlerUsersById = async (req, res) => {
// const {id}= req.paramas;
// const source =isNaN(id) ? 'BDD' : 'API';
// try {
//     const user = await getUsersById(id, source)
//     res.status(200).json(user);
// } catch (error) {
//     res.status(400).json({error: 'error en el handler' + error.message})
// }
// }

// module.exports = handlerUsersById;