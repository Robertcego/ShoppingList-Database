const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.send('Characters route');
});

module.exports = router;
