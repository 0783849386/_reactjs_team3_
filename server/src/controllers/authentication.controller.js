const {AuthenticationService} = require('../services/authentication.service');
const authenticationService = new AuthenticationService();

const authGetAll = ((req, res) => {    
    res.json(authenticationService.getAll());
});

const authGetById = ((req, res) => {
    res.json(authenticationService.getById(req.params.id));
});

module.exports = {
    authGetAll,
    authGetById
}