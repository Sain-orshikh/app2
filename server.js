const express = require('express');
const { pool } = require('pg');
const port = 3000;

const app = express();

app.use(express.json());

app.get('/', async (req,res) => {
    try {
        const data = await pool.query("SELECT * FROM schools");
        res.status(200).json(data.rows);     
    } catch (error) {
        res.status(500).json('Internal Server Error:', error);
    }
});

app.post('/', async (req,res) => {
    const { name, location } = req.body;
    try {
        await pool.query("INSERT INTO schools (name, location) VALUES ($1, $2)", [name, location]);
        res.status(200).json('School created successfully');
    } catch (error) {
        res.status(500).json('Internal Server Error:', error);   
    }
});

app.get('/setup', async (req,res) => {
    try {
        await pool.query("CREATE TABLE schools(id SERIAL PRIMARY KEY, name VARCHAR(100), location VARCHAR(100))");
        res.status(200).json('Table created successfully');
    } catch (error) {
        res.status(500).json('Internal Server Error:', error);
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});