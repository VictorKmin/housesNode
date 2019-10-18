module.exports = (sequelize, DataTypes) => {
    const UserStatus = sequelize.define('UserStatus', {
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
        tableName: 'user_status',
        timestamps: false
    });
    return UserStatus;
}
