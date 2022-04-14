const express = require('express');
const bodyParser = require('body-parser')
const app = express()

app.post('/postData', bodyParser.json(), (req, res) => {
    res.json(req.body)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
