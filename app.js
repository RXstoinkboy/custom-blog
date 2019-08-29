const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.status(200).render('index', {author: 'Eryk'});
});

app.listen(port, (err,res)=>{
    console.log(`Express server is running on port ${port}`)
})