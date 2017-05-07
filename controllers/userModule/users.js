import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'config';
import UsersLogin from '../../models/UsersLogin'
import logger from '../../core/Logger';

export function createUser() {
  return UsersLogin.create({
    FirstName:"admin",
    LastName:"admin",
    Gender:"Male",
    Email:"meesam@compunnel.com",
    UserName:"admin",
    Password:"admin",
    CreatedBy:1,
    ModifiedBy:1,
    LastLogin:new Date()
  })
  .then((result)=>{
     return "User added";
  })
  .catch((error)=>{
    logger.error(error);
     return error;
  })
}


function generateToken(user) {
  let token;
  var u = {
    name: user.FirstName + ' ' + user.LastName ,
    username: user.Username,
    id: user._id,
    emailid:user.Email
  };
  return token = jwt.sign(u, config.get("JWT_SECRET"), {
    expiresIn: 60 * 60 * 24 // expires in 24 hours
  });
}

export function doLogin(logindetail) {
  let resultData;
  return  UsersLogin.findOne({
    where:{
      UserName:logindetail.username,
      Password:logindetail.password
    }
  })
  .then((result)=>{
    console.log('result ' , result);
    if(result && result.dataValues){
      return resultData={
        result:result.dataValues,
        token:generateToken(result.dataValues)
      }
    }
    return result;
  })
  .catch((error)=>{
    logger.error(error);
    return error;
  })
}



