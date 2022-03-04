require('dotenv').config();
const express = require('express');
var bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require("cors");
const { registerController } = require('./src/configs/controller.config');
const swaggerJSDoc = require('swagger-jsdoc');
const { createConnetion } = require('./src/configs/db.config');

const host = process.env.HOST;
const port = process.env.PORT;
const server = express();

try {
    server.use(cors());
    // register Controller
    registerController(server);
    server.use(express.json());

    // server.use(bodyParser.urlencoded({ extended: false }));
    // server.use(bodyParser.json());

    // Create connection to database(MySQL)
    createConnetion(process.env.MYSQL_HOST, process.env.MYSQL_PORT, process.env.MYSQL_DB, process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD);

    // Swagger Configuration  
    const swaggerOptions = {
        definition: {
            openapi: "3.0.0",
            info: {
                title: 'Training Resher From 01-2022 to 04-2022',
                version: '1.0.0'
            }
        },
        apis: ['./src/routes/*.js'],
    }

    const swaggerDocs = swaggerJSDoc(swaggerOptions);

    server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    server.listen(port, () => {
        console.log(`Example app listening at http://${host}:${port}`);
    });

} catch (err) {
    throw err;
}
