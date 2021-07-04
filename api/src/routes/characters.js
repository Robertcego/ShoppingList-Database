const { Router } = require('express');
const router = Router();
const { Character } = require('../models/index.js');
const {
  getAllCharacters,
  getById,
  addCharacter,
  updateCharacter,
  deleteCharacter,
} = require('../controllers/characters');

router.get('/', getAllCharacters);
router.get('/:id', getById);
router.post('/', addCharacter);
router.put('/:id', updateCharacter);
router.delete('/:id', deleteCharacter);

module.exports = router;
