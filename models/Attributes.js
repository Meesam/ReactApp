import Sequelize from 'sequelize';
import sequelizeConnection from '../core/postGreSqlDb';

var Attributes=sequelizeConnection.define('attributes',{
  AttrName:Sequelize.STRING,
  CreatedBy:Sequelize.INTEGER,
  ModifiedBy:Sequelize.INTEGER,
  Status:Sequelize.BOOLEAN
});
sequelizeConnection.sync();

module.exports=Attributes;