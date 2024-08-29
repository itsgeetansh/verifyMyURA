'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    certificateNo: DataTypes.STRING,
    companyName: DataTypes.STRING,
    companyAddress: DataTypes.STRING,
    date_of_issue:DataTypes.STRING,
    date_of_expiry:DataTypes.STRING,
    name_of_certificate:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};