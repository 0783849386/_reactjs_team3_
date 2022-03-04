const {BaseRepository} = require('./base/base.repository');
const { User } = require('../entities/user.entity');
const logger = require('../logger/winston.logger');

class UserRepository extends BaseRepository{
    _user;
    constructor(){       
        let user = new User();
        super(user);
        this._user = user;
        logger.info(`==================== constructor ${this.constructor.name}====================`);
    }
}
module.exports = {UserRepository}