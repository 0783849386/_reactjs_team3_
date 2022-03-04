const { UserService } = require('../services/user.service');
const _userService = new UserService();
const logger = require('../logger/winston.logger');

const getAll = (async (req, res) => {
    res.json(await _userService.getAll());
});

const getById = (async (req, res) => {
    res.json(await _userService.getById(req.params.id));
});

const create = (async (req, res) => {
    res.json(await _userService.create(req.body));
});

const update = (async (req, res) => {
    res.json(await _userService.update(parseInt(req.params.id), req.body));
});

const remove = ((req, res) => {
    res.json(_userService.delete(req.params.id));
});

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}