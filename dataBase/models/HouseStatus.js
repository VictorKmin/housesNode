module.exports = (sequelize, DataTypes) => {
    const HouseStatus = sequelize.define('HouseStatus', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'house_status',
        timestamps: false
    });
    return HouseStatus;
}
