module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: sequelize.INTEGER, primaryKey: true },
    displayName: sequelize.STRING,
    email: sequelize.STRING,
    password: sequelize.STRING,
    image: sequelize.STRING,
  },
  {
    underscored: true,
    timestamps: false,
    tableName: 'users',
  })

  return User;
}