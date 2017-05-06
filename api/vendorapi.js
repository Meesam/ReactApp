import express from 'express';
import {createVendor,getAllVendor,getVendorById,updateVendor} from '../controllers/vendor/vendorController';
import Logger from '../core/Logger';

export default class VendorApi{
  constructor(){
    this.apiRoutes = express.Router();
  }

  getAllroutes() {
    this.apiRoutes.post('/addVendor', function (req, resp, next) {
      return createVendor(req.body)
        .then(function (response) {
          resp.json(response);
        })
        .catch(function (error) {
          return next(error);
        })
    })

    this.apiRoutes.post('/allvendor',function (req,resp,next) {
      return getAllVendor()
        .then((response)=>{
          resp.json(response);
        })
        .catch((error)=>{
          return next(error);
        })
    })

    this.apiRoutes.get('/vendor/:vendorId',function (req,resp,next) {
      return getVendorById(req.params.vendorId)
        .then((response)=>{
          resp.json(response);
        })
        .catch((error)=>{
          return next(error);
        })
    })

    this.apiRoutes.post('/updatevendor', function (req, resp, next) {
      return updateVendor(req.body)
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