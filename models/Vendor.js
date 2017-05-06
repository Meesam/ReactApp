import Sequelize from 'sequelize';
import sequelizeConnection from '../core/postGreSqlDb';

var Vendor=sequelizeConnection.define('vendor',{
  VendorName:Sequelize.STRING,
  TestGroupId:Sequelize.INTEGER,
  CreatedBy:Sequelize.INTEGER,
  ModifiedBy:Sequelize.INTEGER,
  Status:Sequelize.BOOLEAN
});
sequelizeConnection.sync();

module.exports=Vendor;