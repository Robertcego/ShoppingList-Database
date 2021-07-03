// Sequelize

const { Sequelize } = require('sequelize');
const { dbUser, dbPass, dbHost, dbPort, dbName } = require('../utils/config');
const CharacterModel = require('./characters');
const EpisodeModel = require('./episodes');

const sequelize = new Sequelize(
  `postgres://${dbUser}:${dbPass}@${dbHost}/${dbName}`
);

const Character = CharacterModel(sequelize);
const Episode = EpisodeModel(sequelize);

Character.belongsToMany(Episode, { through: 'characterEpisode' });
Episode.belongsToMany(Character, { through: 'characterEpisode' });

module.exports = {
  conn: sequelize,
  Character,
  Episode,
};
