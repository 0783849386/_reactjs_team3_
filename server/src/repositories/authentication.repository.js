const {BaseRepository} = require('./base/base.repository');
const { Authentication} = require('../entities/authentication.entity');
const logger = require('../logger/winston.logger');

class AuthenticationRepository extends BaseRepository{
    _authenticationEntity;
    constructor(){       
        let authenticationEntity = new Authentication();
        super(authenticationEntity);
        this._authenticationEntity = authenticationEntity;
        logger.info(`==================== constructor ${this.constructor.name}====================`);
    }
}
module.exports = {AuthenticationRepository}