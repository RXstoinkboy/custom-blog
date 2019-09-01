const express = require('express');
const router = require('./routes/router');

const app = express();

const port = process.env.PORT || 8080;

app.set('view engine', 'pug');
app.use(express.static('public'));

app.use('/auth', router.auth);

// app.get('*', (req, res) => {
//   res.status(200).render('404');
// });

app.listen(port, (err, res) => {
  console.log(`Express server is running on port ${port}`);
});
