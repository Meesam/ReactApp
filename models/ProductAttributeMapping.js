import Sequelize from 'sequelize';
import sequelizeConnection from '../core/postGreSqlDb';

var ProductAttributeMapping=sequelizeConnection.define('productAttributeMapping',{
  AttrId:Sequelize.INTEGER,
  AliaseName:Sequelize.STRING,
  ProductId:Sequelize.INTEGER,
  CreatedBy:Sequelize.INTEGER,
  ModifiedBy:Sequelize.INTEGER,
  Status:Sequelize.BOOLEAN
});
sequelizeConnection.sync();

module.exports=ProductAttributeMapping;