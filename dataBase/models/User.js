module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        photo_path: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.fn('now')
        }
    }, {
        tableName: 'user',
        timestamps: false
    });

    const Role = sequelize.import('./Role.js');
    const UserStatus = sequelize.import('./UserStatus');

    User.belongsTo(Role, {foreignKey: 'role_id'});
    User.belongsTo(UserStatus, {foreignKey: 'status_id'});

    return User;
}
