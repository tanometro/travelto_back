const {findUser} = require('../services/auth.services')

const auth = async (req, res) => {
    const {email, password} = req.body;
    try {
        const response = await findUser(email, password);
        const user = {email: email}
        const accessToken = generateAccessToken(user)
    } catch (error) {
        
    }
    
}