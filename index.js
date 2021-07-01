require('dotenv').config();

// *********** Database setup ********* \\
const { Sequelize, DataTypes, Model } = require('sequelize');
const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env;
//!! postgres://postgres:password@localhost:5432/dbname <--
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
);
// *********** Database setup ********* \\

//*********** Server setup ******** \\
const PORT = 3001;
const express = require('express');
const app = express();
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
//*********** Server setup ******** \\

class ShoppingList extends Model {}
ShoppingList.init(
  {
    article_id: { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.STRING(200), allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
  },
  { sequelize, modelName: 'shoppinglist' }
);

ShoppingList.sync({ alter: true });

class ArticleDetail extends Model {}
ArticleDetail.init(
  {
    article_id: { type: DataTypes.INTEGER, primaryKey: true },
    origin: { type: DataTypes.STRING(100), allowNull: false },
    brand: { type: DataTypes.STRING(50), allowNull: false },
    size: { type: DataTypes.INTEGER, allowNull: false },
  },
  { sequelize, modelName: 'articledetail' }
);
ArticleDetail.sync({ alter: true });

// ********** Server calls ********** \\
app.get('/shoppinglist', (req, res) => {
  ShoppingList.findAll().then((list) => res.json(list));
});
