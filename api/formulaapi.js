import express from 'express';
import {createFormula,getAllFormula,getFormulaById,updateFormula} from '../controllers/formula/formulaController';
import Logger from '../core/Logger';

export default class FormulaApi{
  constructor(){
    this.apiRoutes = express.Router();
  }

  getAllroutes() {
    this.apiRoutes.post('/addformula', function (req, resp, next) {
      return createFormula(req.body)
        .then(function (response) {
          resp.json(response);
        })
        .catch(function (error) {
          return next(error);
        })
    })

    this.apiRoutes.post('/allformula',function (req,resp,next) {
      return getAllFormula()
        .then((response)=>{
          resp.json(response);
        })
        .catch((error)=>{
          return next(error);
        })
    })

    this.apiRoutes.get('/formula/:formulaId',function (req,resp,next) {
      return getFormulaById(req.params.formulaId)
        .then((response)=>{
          resp.json(response);
        })
        .catch((error)=>{
          return next(error);
        })
    })

    this.apiRoutes.post('/updateformula', function (req, resp, next) {
      return updateFormula(req.body)
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