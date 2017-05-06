import TestGroup from '../../models/TestGroup';
import logger from '../../core/Logger';

export function addTestGroup(testGroupInfo) {
  console.log('testGroupInfo' , testGroupInfo);

  return TestGroup.create({
     Title:testGroupInfo.Title,
     Version:testGroupInfo.Version,
     Campaign:testGroupInfo.Campaign,
     PublishDate:testGroupInfo.PublishDate,
     CreatedBy:testGroupInfo.CreatedBy,
     ModifiedBy:testGroupInfo.ModifiedBy,
     Status:true
  })
  .then((result)=>{
     return result;
  })
  .catch((error)=>{
    logger.error(error);
    return error;
  })
}

export function allTestGroup() {
   return TestGroup.findAll()
     .then((result)=>{
       return result;
     })
     .catch((error)=>{
       logger.error(error);
       return error;
     })
}

export function testGroupById(Id) {
  return TestGroup.findById(Id)
    .then((result)=>{
      return result;
    })
    .catch((error)=>{
      logger.error(error);
      return error;
    })
}

export function updateTestGroup(testGroupInfo) {
  return TestGroup.update({
    Title:testGroupInfo.Title,
    Version:testGroupInfo.Version,
    Campaign:testGroupInfo.Campaign,
    PublishDate:testGroupInfo.PublishDate,
    CreatedBy:testGroupInfo.CreatedBy,
    ModifiedBy:testGroupInfo.ModifiedBy,
    Status:true
  },{
    where:{
      id:testGroupInfo.id
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
