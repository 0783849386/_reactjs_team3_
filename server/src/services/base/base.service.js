const logger = require('../../logger/winston.logger');
const { ResponseDto } = require('../../dtos/response.dto');

class BaseService {
    _repos;
    constructor(repos) {
        this._repos = repos;
    }

    getAll = async () => {
        logger.info(`==================== ${this.constructor.name}, call method GetAll ====================`);
        let responseDto = new ResponseDto();
        responseDto.results = await this._repos.getAll();
        return responseDto;
    }

    getById = async (id) => {
        logger.info(`==================== ${this.constructor.name}, call method GetById ====================`);
        let responseDto = new ResponseDto();
        responseDto.results = await this._repos.getById(id);
        return responseDto;
    }

    create = async (entity) => {
        logger.info(`==================== ${this.constructor.name}, call method Create ====================`);
        let responseDto = new ResponseDto();
        responseDto.results = await this._repos.create(entity);
        return responseDto;
    }

    update = async (id, entity) => {
        logger.info(`==================== ${this.constructor.name}, call method Update ====================`);
        entity.id = id;
        let responseDto = new ResponseDto();
        console.log(entity)
        responseDto.results =await this._repos.update(entity);
        return responseDto;
    }

    delete = (id) => {
        logger.info(`==================== ${this.constructor.name}, call method Delete ====================`);
        let responseDto = new ResponseDto();
        this._repos.delete(id)
        responseDto.results = true;
        return responseDto;
    }
}
module.exports = { BaseService }