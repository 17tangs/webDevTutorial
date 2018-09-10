const express = require('express');

const app = express();


app.get('/', (req, res)=>{
    const user = {
        name:'bob',
        hobby: 'piano',
    }
    res.send(user);
})


app.listen(5000);
