const express = require('express');
const app = express();
const port = 8090;

app.get('/', home);

function home(req, res) {
res.send(index.html)
}

app.use('/', require('./routes/index.html'))
app.listen(port, function (){
    console.log('The server is running!')
})