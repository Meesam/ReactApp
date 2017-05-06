import express from 'express';
import {addProductAttribute,getAllProductAttribute,getProductAttributeById,updateProductAttribute} from '../controllers/product/productAttributeController';
import Logger from '../core/Logger';

export default class ProductAttributeApi{
  constructor(){
    this.apiRoutes = express.Router();
  }

  getAllroutes() {
    this.apiRoutes.post('/addprojectattribute', function (req, resp, next) {
      return addProductAttribute(req.body)
        .then(function (response) {
          resp.json(response);
        })
        .catch(function (error) {
          return next(error);
        })
    })

    this.apiRoutes.post('/allprojectattribute',function (req,resp,next) {
      return getAllProductAttribute()
        .then((response)=>{
          resp.json(response);
        })
        .catch((error)=>{
          return next(error);
        })
    })

    this.apiRoutes.get('/projectattribute/:Id',function (req,resp,next) {
      return getProductAttributeById(req.params.vendorId)
        .then((response)=>{
          resp.json(response);
        })
        .catch((error)=>{
          return next(error);
        })
    })

    this.apiRoutes.post('/updateprojectattribute', function (req, resp, next) {
      return updateProductAttribute(req.body)
        .then(function (response) {
          resp.json(response);
        })
        .catch(function (error) {
          return next(error);
        })
    })

    return this.apiRoutes;
  }
}