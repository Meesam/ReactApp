import Sequelize from 'sequelize';
import sequelizeConnection from '../core/postGreSqlDb';

var Product=sequelizeConnection.define('product',{
  ProductTitle:Sequelize.STRING,
  VendorId:Sequelize.INTEGER,
  TestGroupId:Sequelize.INTEGER,
  CreatedBy:Sequelize.INTEGER,
  ModifiedBy:Sequelize.INTEGER,
  Status:Sequelize.BOOLEAN
});
sequelizeConnection.sync();

module.exports=Product;