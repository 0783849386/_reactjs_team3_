const {BaseService} = require('./base/base.service');
const {AuthenticationRepository} = require('../repositories/authentication.repository');
const logger = require('../logger/winston.logger');

class AuthenticationService extends BaseService {
    _authenticationRepos;
    constructor(){
        let authenticationRepos= new AuthenticationRepository();
        super(authenticationRepos);  
        this._authenticationRepos = authenticationRepos;     
        logger.info(`==================== constructor ${this.constructor.name}====================`); 
    }
}
module.exports = { AuthenticationService }