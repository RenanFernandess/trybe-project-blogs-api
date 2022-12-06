module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    underscored: true,
    timestamps: false,
    tableName: 'users',
  })

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foringKey: 'userId',
      as: 'blogposts'
    })
  } 

  return User;
}