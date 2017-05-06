import Sequelize from 'sequelize';
import sequelizeConnection from '../core/postGreSqlDb';

var Formula=sequelizeConnection.define('formula',{
  Version:Sequelize.INTEGER,
  FormulaName:Sequelize.STRING,
  CreatedBy:Sequelize.INTEGER,
  ModifiedBy:Sequelize.INTEGER,
  Status:Sequelize.BOOLEAN
});
sequelizeConnection.sync();

module.exports=Formula;