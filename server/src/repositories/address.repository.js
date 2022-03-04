const {BaseRepository} = require('./base/base.repository');
const { Country, City, District, Wards } = require('../entities/address.entity');
const logger = require('../logger/winston.logger');

class CountryRepository extends BaseRepository{
    _country;
    constructor(){       
        let country = new Country();
        super(country);
        this._country = country;
        logger.info(`==================== constructor ${this.constructor.name}====================`);
    }
}
class CityRepository extends BaseRepository{
    _city;
    constructor(){       
        let city = new City();
        super(city);
        this._city = city;
        logger.info(`==================== constructor ${this.constructor.name}====================`);
    }
}
class DistrictRepository extends BaseRepository{
    _district;
    constructor(){       
        let district = new District();
        super(district);
        this._district = district;
        logger.info(`==================== constructor ${this.constructor.name}====================`);
    }
}
class WardsRepository extends BaseRepository{
    _wards;
    constructor(){       
        let wards = new Wards();
        super(wards);
        this._wards = wards;
        logger.info(`==================== constructor ${this.constructor.name}====================`);
    }
}
class AddressRepository {
    // _address;
    // constructor(){
    //     let country = new CountryRepository()
    //     logger.info(`==================== constructor ${this.constructor.name}====================`);
    // }
    
    // getAllAddress = () => {
    //     logger.info(`==================== ${this.constructor.name}, call method GetAllAddress ====================`);
    //     return await this.repos.findAll({
    //         include: [ 
    //           {
    //             model: this.repos.animal,
    //             required: true,
    //             attributes: ["legacyAnimalId"],
    //           },
    //         ],
    //         returning: true
    //       });
    // }
}

module.exports = {
    CountryRepository,
    CityRepository,
    DistrictRepository,
    WardsRepository
}