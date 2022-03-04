const { Sequelize } = require('sequelize');
const {BaseNecessary} = require('./bases/base.entity');
class User extends BaseNecessary {
    UserID = {
        primaryKey: true,
        type: Sequelize.STRING(5)
    }
    Fullname = {
        type: Sequelize.STRING(50)
    }
    Email = {
        type: Sequelize.STRING(50)
    }
    Password = {
        type: Sequelize.STRING(200)
    }
    Birthdate = {
        type: Sequelize.DATEONLY
    }
    FLdate = {
        type: Sequelize.DATE
    }
    LLDate = {
        type: Sequelize.DATE
    }
    Admin = {
        type: Sequelize.BOOLEAN 
    }
    StatusUser ={
        type: Sequelize.BOOLEAN 
    }
}
module.exports = { User}