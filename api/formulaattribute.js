import express from 'express';
import {addFormulaAttribute,getAllFormulaAttribute,getFormulaAttributeById,updateFormulaAttribute} from '../controllers/formula/formulaAttributeController';
import Logger from '../core/Logger';

export default class FormulaAttributeApi{
  constructor(){
    this.apiRoutes = express.Router();
  }

  getAllroutes() {
    this.apiRoutes.post('/addformulaattribute', function (req, resp, next) {
      return addProductAttribute(req.body)
        .then(function (response) {
          resp.json(response);
        })
        .catch(function (error) {
          return next(error);
        })
    })

    this.apiRoutes.post('/allformulaattribute',function (req,resp,next) {
      return getAllFormulaAttribute()
        .then((response)=>{
          resp.json(response);
        })
        .catch((error)=>{
          return next(error);
        })
    })

    this.apiRoutes.get('/formulaattribute/:Id',function (req,resp,next) {
      return getFormulaAttributeById(req.params.vendorId)
        .then((response)=>{
          resp.json(response);
        })
        .catch((error)=>{
          return next(error);
        })
    })

    this.apiRoutes.post('/updateformulaattribute', function (req, resp, next) {
      return updateFormulaAttribute(req.body)
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