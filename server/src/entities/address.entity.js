const { Sequelize } = require('sequelize');
const {BaseNecessary} = require('./bases/base.entity');

class Country extends BaseNecessary {
    CountryID = {
        primaryKey: true,
        type: Sequelize.INTEGER
    }
    CountryName = {
        type: Sequelize.STRING(50)
    }
}
class City extends BaseNecessary {
    CityID = {
        primaryKey: true,
        type: Sequelize.INTEGER
    }
    CityName = {
        type: Sequelize.STRING(50)
    }
    Depends = {
        type: Sequelize.STRING(50)
    }
}
class District extends BaseNecessary {
    DistrictID = {
        primaryKey: true,
        type: Sequelize.INTEGER
    }
    DistrictName = {
        type: Sequelize.STRING(50)
    }
    Depends = {
        type: Sequelize.STRING(50)
    }
}

class Wards extends BaseNecessary {
    WardsID = {
        primaryKey: true,
        type: Sequelize.INTEGER
    }
    WardsName = {
        type: Sequelize.STRING(50)
    }
    Depends = {
        type: Sequelize.STRING(50)
    }
}
module.exports = { Country, City, District, Wards}