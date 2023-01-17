const {Sequelize} = require('sequelize');
require('dotenv').config()

console.log()
const SentenceModel = require('./models/sentences')

const sequelize = new Sequelize(
        process.env.DATABASE_NAME,
        process.env.DB_USERNAME,
        process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql'
})

const Sentence = SentenceModel(sequelize, Sequelize);

sequelize.sync({force: false})
    .then(() => {
        console.log('Tablas sincronizadas')
    })

module.exports = {
    Sentence
}