import express from 'express';
import {createUser,doLogin} from '../controllers/userModule/users';
import Logger from '../core/Logger';

export default class UserApi{
  constructor(){
    this.apiRoutes = express.Router();
  }

  getAllroutes() {
    this.apiRoutes.post('/login', function (req, resp, next) {
      return doLogin(req.body)
        .then(function (response) {
           if(response==null){
             resp.json("Invalid credential");
           } else {
             resp.json(response.dataValues);
           }
        })
        .catch(function (error) {
          return next(error);
        })
    })

    this.apiRoutes.get('/createUser',function (req,resp,next) {
       return createUser()
         .then((response)=>{
            resp.json(response);
         })
         .catch((error)=>{
            return next(error);
         })
    })

    return this.apiRoutes;
  }
}




