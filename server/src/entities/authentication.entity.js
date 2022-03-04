const { BaseNecessary } = require("./bases/base.entity");
const { Sequelize } = require('sequelize');

class Authentication extends BaseNecessary {
    email = { type: Sequelize.STRING(50) };
    password = { type: Sequelize.STRING(50) };
}
module.exports = { Authentication }