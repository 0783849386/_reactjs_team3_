const mysql = require('mysql8');
const createConnetion = (host, port, db, user, passs) => {

    const connection = mysql.createConnection({
        host: String(host),
        database: String(db),
        port: Number(port),
        user: String(user),
        password: String(passs),
    });

    connection.connect(error => {
        if (error) throw error;
        console.log("Successfully connected to the database.");
    });
}

const connectDB = () => {

}
module.exports = { createConnetion, connectDB }