require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


// TEST API

app.get("/", (req, res) => {
    res.json({
        message: "API'et kører"
    });
});


// GET ALL POKEMON + FILTERS

app.get("/pokemons", (req, res) => {

    const name = req.query.name || "";
    const type = req.query.type || "";
    const minAttack = req.query.minAttack;

    // Check minimum Attack
    if (minAttack !== undefined) {

        if (minAttack === "" ||
            !Number.isFinite(Number(minAttack)) ||
            Number(minAttack) < 0) {

            return res.status(400).json({
                error: "Minimum Attack must be a valid number"
            });
        }
    }

    const sql = `SELECT * FROM pokemon WHERE name LIKE ? AND (? = '' OR primary_type = ? OR secondary_type = ?)
        AND attack >= ? ORDER BY pokedex_number`;

    const values = [
        "%" + name + "%",
        type,
        type,
        type,
        minAttack === undefined ? 0 : Number(minAttack)
    ];

    connection.query(sql, values, (error, results) => {

        if (error) {
            console.error(error);

            return res.status(500).json({
                error: "Kunne ikke hente Pokémon"
            });
        }

        res.json(results);
    });
});


// GET LEAGUES

app.get("/leagues", (req, res) => {

    const sql = `SELECT league_id, league_name, region, description FROM league ORDER BY league_name`;

    connection.query(sql, (error, results) => {

        if (error) {
            console.error(error);

            return res.status(500).json({
                error: "Kunne ikke hente ligaer"
            });
        }

        res.json(results);
    });
});


// DATABASE CONNECTION

connection.connect((error) => {

    if (error) {

        console.error(
            "Kunne ikke forbinde til databasen:",
            error.message
        );

        process.exitCode = 1;
        return;
    }

    console.log("Forbundet til databasen pokemon");

    app.listen(port, () => {
        console.log(`Serveren kører på http://localhost:${port}`);
    });
});