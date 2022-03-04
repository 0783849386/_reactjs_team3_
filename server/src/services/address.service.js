const {BaseService} = require('./base/base.service');
const {AddressService} = require('../repositories/user.repository');
const logger = require('../logger/winston.logger');

class AddressService extends BaseService {
    // _userRepos;
    // constructor(){
    //     let addressRepo = new AddressRepository();
    //     super(addressRepo);  
    //     this._addressRepo = addressRepo;     
    //     logger.info(`==================== constructor ${this.constructor.name}====================`); 
    // }
    // getAllAddress = async () => {
    //     logger.info(`==================== ${this.constructor.name}, call method GetAll ====================`);
    //     let responseDto = new ResponseDto();
    //     responseDto.results = await this._repos.getAll();
    //     return responseDto;
    // }
}
module.exports = { AddressService }