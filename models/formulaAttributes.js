import Sequelize from 'sequelize';
import sequelizeConnection from '../core/postGreSqlDb';

var FormulaAttribute=sequelizeConnection.define('formulaAttributes',{
  FormulaId:Sequelize.INTEGER,
  FormulaSet:Sequelize.STRING,
  CreatedBy:Sequelize.INTEGER,
  ModifiedBy:Sequelize.INTEGER,
  Status:Sequelize.BOOLEAN
});
sequelizeConnection.sync();

module.exports=FormulaAttribute;