// characters route
// episodes route

const { Router } = require('express');
const router = Router();
const CharactersRouter = require('./characters');
const EpisodesRouter = require('./episodes');

router.use('/characters', CharactersRouter);
router.use('/episodes', EpisodesRouter);

module.exports = router;
