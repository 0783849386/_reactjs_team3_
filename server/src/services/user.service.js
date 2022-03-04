const {BaseService} = require('./base/base.service');
const {UserRepository} = require('../repositories/user.repository');
const logger = require('../logger/winston.logger');

class UserService extends BaseService {
    _userRepos;
    constructor(){
        let userRepo = new UserRepository();
        super(userRepo);  
        this._userRepos = userRepo;     
        logger.info(`==================== constructor ${this.constructor.name}====================`); 
    }
}
module.exports = { UserService }