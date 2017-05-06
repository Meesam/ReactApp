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

export function doLogin(logindetail) {
  return  UsersLogin.findOne({
    where:{
      UserName:logindetail.username,
      Password:logindetail.password
    }
  })
  .then((result)=>{
     return result;
  })
  .catch((error)=>{
    logger.error(error);
    return error;
  })
}



