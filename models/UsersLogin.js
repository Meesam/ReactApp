import Sequelize from 'sequelize';
import sequelizeConnection from '../core/postGreSqlDb';

var UsersLogin=sequelizeConnection.define('usersLogin',{
  FirstName:Sequelize.STRING,
  LastName:Sequelize.STRING,
  Gender:Sequelize.STRING,
  Email:Sequelize.STRING,
  UserName:Sequelize.STRING,
  Password:Sequelize.STRING,
  CreatedBy:Sequelize.INTEGER,
  ModifiedBy:Sequelize.INTEGER,
  LastLogin:Sequelize.DATE
});
sequelizeConnection.sync();

module.exports=UsersLogin;