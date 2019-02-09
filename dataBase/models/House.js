module.exports = (sequelize, DataTypes) => {
    const House = sequelize.define('House', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        room_count: {
            type: DataTypes.INTEGER
        },
        squeare: {
            type: DataTypes.DOUBLE
        },
        price: {
            type: DataTypes.INTEGER
        },
        city: {
            type: DataTypes.STRING
        },
        created_at: {
            type: DataTypes.DATE
        }
    }, {
        tableName: 'house',
        timestamps: false
    });
    return House
};
