import Sequelize from 'sequelize';
import sequelizeConnection from '../core/postGreSqlDb';

var TestGroup=sequelizeConnection.define('testGroup',{
  Title:Sequelize.STRING,
  Version:Sequelize.INTEGER,
  Campaign:Sequelize.STRING,
  PublishDate:Sequelize.DATE,
  CreatedBy:Sequelize.INTEGER,
  ModifiedBy:Sequelize.INTEGER,
  Status:Sequelize.BOOLEAN
});
sequelizeConnection.sync();

module.exports=TestGroup;