import Sequelize from 'sequelize';
import sequelizeConnection from '../core/postGreSqlDb';

var Logger=sequelizeConnection.define('logger',{
  IssueDate:Sequelize.DATE,
  IssueType:Sequelize.STRING,
  IssueDescription:Sequelize.TEXT,
});
sequelizeConnection.sync();

module.exports=Logger;