const { v4: uuidv4 } = require('uuid');
const { Character } = require('../models/index.js');

function getAllCharacters(req, res, next) {
  return Character.findAll()
    .then((characters) => res.json(characters))
    .catch((err) => {
      next(err);
    });
}

function getById(req, res, next) {
  const { id } = req.params;
  return Character.findByPk(id)
    .then((character) => res.send(character))
    .catch((err) => {
      next(err);
    });
}

function addCharacter(req, res, next) {
  const character = req.body;
  return Character.create({
    ...character,
    id: uuidv4(),
  })
    .then((newCharacter) => res.json(newCharacter))
    .catch((err) => {
      res.next(err);
    });
}

function updateCharacter(req, res, next) {
  const character = req.body;
  const { id } = req.params;
  return Character.update(character, {
    where: {
      id,
    },
  })
    .then((updatedCharacter) => res.send(updatedCharacter))
    .catch((err) => {
      next(err);
    });
}

function deleteCharacter(req, res) {
  const { id } = req.params;
  return Character.destroy({
    where: {
      id,
    },
  })
    .then(() => res.sendStatus(204))
    .catch((err) => {
      res.next(err);
    });
}

module.exports = {
  getAllCharacters,
  getById,
  addCharacter,
  updateCharacter,
  deleteCharacter,
};
