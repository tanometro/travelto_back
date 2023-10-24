const {Users} = require('../models/Users')

const createUsers = ()=>{

};

const {Users} = require('../models/Users')
const data = require('../Falsa API/dataUsers')

const getUsersById = async (id, source)=>{
    if(source ==='API'){
        let users = data.filter(a => a.id === id)
        return users
    }else{
        let usersDB = await Users.findPK(id)
        return usersDB
    }
};

const getUsersByQuery = async (name)=>{
//DATA BASE
const dbUsers = await Users.findAll({where: {name: name}})
const users = dbUsers.map(u=>{
    
    return{
        id: u.id,
        name:[u.name[0],u.name[1]],
        DNI: u.DNI,
        isActive: u.isActiverue,
        roleId: u.roleId
    }
})
//FALSA API
const apiUsers = getAllUsers();
nombreBuscado= name.toLowerCase();
const filtradoByName= apiUsers.filter((u)=>{
    const nombreUser = u.name.toLowerCase();
    return nombreUser === nombreBuscado
})
return [...filtradoByName, ...users]
};

const getAllUsers = async ()=>{
    try {
        const dbUsers = await Users.findAll();
        const usersData = data;

        return [...dbUsers, ...usersData]
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};