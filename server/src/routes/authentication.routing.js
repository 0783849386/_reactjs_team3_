const express = require('express');
const AuthenticationRouting = express.Router();
const { CommonMethodConstant, ControllerConstant } = require("../constants/api.constant");
const {
    authGetAll,
    authGetById
} = require('../controllers/authentication.controller');

AuthenticationRouting.use(express.json());

/** 
 * @swagger 
 * /api/v1/auth/get-all: 
 *   get: 
 *     tags:
 *       - Auth
 *     description: Get all Data 
 *     responses:  
 *       200: 
 *         description: Success   
 */  
 AuthenticationRouting.get(CommonMethodConstant.GetAll, authGetAll);

 /** 
  * @swagger 
  * /api/v1/auth/{id}:
  *   get: 
  *     tags: 
  *       - Auth
  *     description: Get data by Id 
  *     parameters: 
  *       - in: path
  *         name: id 
  *         description: Primary key 
  *         required: true 
  *         schema:
  *             type: integer 
  *     responses:  
  *       200: 
  *         description: Created  
  *   
  */ 
  AuthenticationRouting.get(CommonMethodConstant.GetById, authGetById);
 
 module.exports = { AuthenticationRouting };