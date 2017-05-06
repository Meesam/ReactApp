import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import UserApi from './api/userapi';
import AttributeApi from './api/attributeapi';
import FormulaApi from './api/formulaapi';
import FormulaAttributeApi from './api/formulaattribute'
import ProductApi from './api/productapi';
import ProductAttributeApi from './api/productattributeapi';
import TestGroupApi from './api/testGroupapi';
import VendorApi from './api/vendorapi'
import cookieparser from 'cookie-parser';
import config from 'config';

var userApi=new UserApi();
var attributeApi=new AttributeApi();
var formulaApi=new FormulaApi();
var formulaAttributeApi=new FormulaAttributeApi();
var productApi = new ProductApi();
var productAttributeApi =new ProductAttributeApi();
var testGroupApi=new TestGroupApi();
var vendorApi=new VendorApi();

const apis=[userApi.getAllroutes(),attributeApi.getAllroutes(),formulaApi.getAllroutes(),formulaAttributeApi.getAllroutes(),
  productApi.getAllroutes(),productAttributeApi.getAllroutes(),testGroupApi.getAllroutes(),vendorApi.getAllroutes()];

class Server {
  constructor(app){
    this.app=app;
  }

  setCrossOrigin(){
    this.app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
  }

  setMiddleware(){
    this.app.use(express.static(path.join(__dirname+'/public')));
    this.app.use(express.static(path.join(__dirname+'/public/swagger')));
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(cookieparser());
  }

  setStartPage(){
    this.app.route('/*').get(function(req, res) {
      if(req.path==='/swagger'){
        // for swagger
        return res.sendFile(path.join(__dirname +'/public/swagger/index.html'));
      } else{
        return res.sendFile(path.join(__dirname+'/public/index.html'));
      }
    });
  }

  getRoute(){
    return this.app.use('/api',apis);
  }

  startServer(){
    this.app.listen(config.get('WEB_PORT'), function () {
      console.log('Server runing at ' + config.get('WEB_PORT'));
    });
  }
}

export default Server;







