const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
  // res.send('Episodes route');
  try {
    throw new Error('Error');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
