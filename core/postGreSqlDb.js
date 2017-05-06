import Sequelize from 'sequelize';
import config from 'config';

var connection = new Sequelize(config.get('DATABASENAME'), config.get('USERNAME'), config.get('PASSWORD'), {
  host: config.get('DATABASEHOST'),
  dialect: config.get('DATABASEENGINE'),
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports=connection;
