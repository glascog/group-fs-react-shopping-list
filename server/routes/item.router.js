const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req,res) => {
    console.log('Inside the GET')
    const sqlText = 'SELECT * FROM items ORDER BY name ASC';
    pool.query(sqlText)
    .then((result) => {
        console.log('the results from GET', result)
        res.send(result.rows)
    }).catch((error) => {
        console.log('Error with the GET', error)
    })
})

router.post('/', (req,res) => {
    console.log('Inside the POST')
    const itemList = req.body;
    const sqlText = `INSERT INTO items ("name", "quantity", "unit")
    VALUES ($1,$2,$3)`;
    const queryParams = [itemList.name,itemList.quantity,itemList.unit]
    pool.query(sqlText,queryParams)
    .then((result) => {
        console.log('inside the POST',itemList)
        res.sendStatus(201)
    }).catch((error) => {
        console.log('Error with the POST', error)
        res.sendStatus(500)
    })

})

module.exports = router