const Sequalize = require('sequelize');
const fs = require('fs');
const {resolve} = require('path');
const {dbName, dbPass, dbUser} = require('../constants/dataBase');

module.exports = (() => {
    let instance;

    function initConnection() {
        let client = new Sequalize(dbName, dbUser, dbPass, {
            host: 'localhost',
            dialect: 'mysql',
            operatorsAliases: false,
        });
        let models = {};

        function getModels() {
            fs.readdir('./dataBase/models', (err, files) => {
                files.forEach(file => {
                    const [modelName] = file.split('.');
                    models[modelName] = client.import(resolve(`./dataBase/models/${modelName}`))
                });
            });
        }

        return {
            getModel: modelName => models[modelName],
            setModels: () => getModels()
        };
    }

    return {
        getInstance: () => {
            if (!instance) instance = initConnection();
            return instance;
        }
    }
})();
