module.exports = (sequelize, DataTypes) => {
    const HouseDoc = sequelize.define('HouseDoc', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        house_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        path: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'house_doc',
        timestamps: false
    });

    const House = sequelize.import('./House.js');

    HouseDoc.belongsTo(House, {foreignKey: 'house_id'});

    return HouseDoc;
}
