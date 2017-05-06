import express from 'express';
import {addProduct,getAllProduct,getProductById,updateProduct} from '../controllers/product/productController';
import Logger from '../core/Logger';

export default class ProductApi{
  constructor(){
    this.apiRoutes = express.Router();
  }

  getAllroutes() {
    this.apiRoutes.post('/addproduct', function (req, resp, next) {
      return addProduct(req.body)
        .then(function (response) {
          resp.json(response);
        })
        .catch(function (error) {
          return next(error);
        })
    })

    this.apiRoutes.post('/products',function (req,resp,next) {
      return getAllProduct()
        .then((response)=>{
          resp.json(response);
        })
        .catch((error)=>{
          return next(error);
        })
    })

    this.apiRoutes.get('/products/:productId',function (req,resp,next) {
      return getProductById(req.params.productId)
        .then((response)=>{
          resp.json(response);
        })
        .catch((error)=>{
          return next(error);
        })
    })

    this.apiRoutes.post('/updateproduct', function (req, resp, next) {
      return updateProduct(req.body)
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