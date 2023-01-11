const Sequelize = require('sequelize');

const SentenceModel = require('./models/sentences')

const sequelize = new Sequelize("romantiv", 'root', '5991', {
    host: 'localhost',
    dialect: 'mysql'
})

const Sentence = SentenceModel(sequelize, Sequelize);

sequelize.sync({force: false})
    .then(() => {
        console.log('Tablas sincronizadas')
    })