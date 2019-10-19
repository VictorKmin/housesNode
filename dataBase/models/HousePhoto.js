module.exports = (sequelize, DataTypes) => {
    const HousePhoto = sequelize.define('HousePhoto', {
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
        created_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.fn('now')
        }
    }, {
        tableName: 'house_doc',
        timestamps: false
    });

    const House = sequelize.import('./House.js');

    HousePhoto.belongsTo(House, {foreignKey: 'house_id'});

    return HousePhoto;
}
