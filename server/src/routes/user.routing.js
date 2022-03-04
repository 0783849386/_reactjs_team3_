const express = require('express');
const UserRouting = express.Router();
const { CommonMethodConstant, ControllerConstant } = require("../constants/api.constant");
const {
  getAll,
  getById,
  create,
  update,
  remove
} = require('../controllers/user.controller');
UserRouting.use(express.json())

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateRoleRequest:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *         actived:
 *           type: boolean
 * 
 *     UpdateRoleRequest:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *         actived:
 *           type: boolean
 * 
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ResponseDto:
 *       type: object
 *       properties:
 *         errorCode:
 *           type: integer
 *         results:
 *           type: object
 * 
 */

/** 
 * @swagger 
 * /api/v1/user/get-all: 
 *   get: 
 *     tags:
 *       - User
 *     description: Get all Data 
 *     responses:  
 *       200: 
 *         description: Success
 *         content:
 *            application/json:
 *               schema:
 *                  $ref: '#/components/schemas/ResponseDto'
 */
 UserRouting.get(CommonMethodConstant.GetAll, getAll);

/** 
 * @swagger 
 * /api/v1/user/{id}:
 *   get: 
 *     tags: 
 *       - User
 *     description: Get data by Id 
 *     parameters: 
 *       - in: path
 *         name: id 
 *         description: Primary key 
 *         required: true 
 *         schema:
 *             type: integer 
 *     responses:  
 *         200: 
 *             description:  Return ResponseDto
 *             content:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/ResponseDto'
 *             
 *   
 */
 UserRouting.get(CommonMethodConstant.GetById, getById);

/**
 * @swagger
 * /api/v1/user:
 *   post:
 *     summary: Create a new book
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateRoleRequest'
 *     responses:
 *       200:
 *         description: Returen ResponseDto
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseDto'
 *       500:
 *         description: Some server error
 */

 UserRouting.post(CommonMethodConstant.Create, create);

/**
* @swagger
* /api/v1/user/{id}:
*   put:
*     summary: Create a new user
*     tags: [User]
*     parameters: 
*       - in: path
*         name: id 
*         description: Primary key 
*         required: true 
*         schema:
*             type: integer 
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/UpdateRoleRequest'
*     responses:
*       200:
*         description: Returen ResponseDto
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/ResponseDto'
*       500:
*         description: Some server error
*/
UserRouting.put(CommonMethodConstant.Update, update);

UserRouting.delete(CommonMethodConstant.Delete, remove);

module.exports = { UserRouting };