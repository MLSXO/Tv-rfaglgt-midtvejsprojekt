const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", /* Dit eget password til SQL */
    database: "pokemon",
});

app.listen(port, () => {
    console.log(`Application is now running on port ${port}`);
})

app.get("/pokemon-name", (req, res) => {
    connection.query("SELECT name FROM pokemon", (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }

        res.send(results);
    });
});