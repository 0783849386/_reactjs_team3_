const express = require('express');
const AppRouting = express.Router();
const { CommonMethodConstant, ControllerConstant } = require("../constants/api.constant");
const {
    appGetAll,
    appGetById
} = require('../controllers/app.controller');
 

/** 
 * @swagger 
 * /api/v1/app/get-all: 
 *   get: 
 *     tags:
 *       - App
 *     description: Get all Data 
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */  
AppRouting.get(`${CommonMethodConstant.GetAll}`, appGetAll);

/** 
 * @swagger 
 * /api/v1/app/{id}: 
 *   get: 
 *     description: Get data by Id
 *     tags:
 *      - App
 *     parameters:
 *       - in: path
 *         name: id 
 *         description: Primary key 
 *         required: true
 *         schema:
 *          type: integer 
 *     responses:  
 *       200: 
 *         description: Created  
 *   
 */ 
AppRouting.get(`${CommonMethodConstant.GetById}`, appGetById);

module.exports = { AppRouting };