const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).render('auth/index', {
    title: 'Hi all',
    login: true
  });
});
module.exports = router;
