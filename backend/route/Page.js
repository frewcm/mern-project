const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

fetch('https://api.publicapis.org/entries', {
})
  .then(res => res.json())
  .catch(err => console.log(err));

router.get('/test', async (req, res)=>{
    try{
        const uri = 'https://my.api.mockaroo.com/users.json?key=50e1d3e0'
        const response = await fetch(uri, {
            method: 'GET',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' }
          }).then(res => res.json())
          return res.json(response);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
      }
})
module.exports = router;