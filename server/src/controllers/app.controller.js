const { ResponseDto } = require('../dtos/response.dto');

const appGetAll = ((req, res) => {    
    res.send('Get all data');
});

const appGetById = ((req, res) => {
    res.send('Get data by Id:' + req.params.id);
});

module.exports = {
    appGetAll,
    appGetById
}