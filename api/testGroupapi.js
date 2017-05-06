import express from 'express';
import {addTestGroup,allTestGroup,testGroupById,updateTestGroup} from '../controllers/testGroup/testGroupController';
import Logger from '../core/Logger';

export default class TestGroupApi{
  constructor(){
    this.apiRoutes = express.Router();
  }

  getAllroutes() {
    this.apiRoutes.post('/addtestgroup', function (req, resp, next) {
      console.log('i am call');
      return addTestGroup(req.body)
        .then(function (response) {
          resp.json(response);
        })
        .catch(function (error) {
          return next(error);
        })
    })

    this.apiRoutes.post('/alltestgroup',function (req,resp,next) {
      return allTestGroup()
        .then((response)=>{
          resp.json(response);
        })
        .catch((error)=>{
          return next(error);
        })
    })

    this.apiRoutes.get('/testgroup/:Id',function (req,resp,next) {
      return testGroupById(req.params.Id)
        .then((response)=>{
          resp.json(response);
        })
        .catch((error)=>{
          return next(error);
        })
    })

    this.apiRoutes.post('/updatetestgroup', function (req, resp, next) {
      return updateTestGroup(req.body)
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