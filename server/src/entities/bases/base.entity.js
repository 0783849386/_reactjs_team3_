const { Sequelize } = require('sequelize');
class AutoIncrement {
    id = {
        primaryKey: true,
        type: Sequelize.INTEGER
    };
}

class BaseNecessary{
    createdAt = {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    };

    updatedAt = {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    };
}


class BaseEntity extends BaseNecessary {
    id = {
        primaryKey: true,
        type: Sequelize.INTEGER
    };
    createdBy = { type: Sequelize.STRING(50) };
    updatedBy = { type: Sequelize.STRING(50) };
}

module.exports = { AutoIncrement, BaseNecessary, BaseEntity }