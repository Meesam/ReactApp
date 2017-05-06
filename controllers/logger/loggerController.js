import Logger from '../../models/Logger';
import logger from '../../core/Logger';

export function addLogger(logDetails) {
  return Logger.create({
    IssueDate:logDetails.issueDate,
    IssueType:logDetails.issueType,
    IssueDescription:logDetails.issueDescription,
  })
  .then((result)=>{
     return result;
  })
  .catch((error)=>{
     logger.error(error);
     return error;
  })
}

export function getAllLogs() {
  return Logger.findAll()
    .then((result)=>{
      return result;
    })
    .catch((error)=>{
      logger.error(error);
       return error;
    })
}

export function getAllLogsById(Id) {
  return Logger.findById(Id)
    .then((result)=>{
      return result;
    })
    .catch((error)=>{
      logger.error(error);
      return error;
    })
}

export function updateLogs() {
  return Logger.update({
    IssueDate:logDetails.issueDate,
    IssueType:logDetails.issueType,
    IssueDescription:logDetails.issueDescription,
  },{
    where:{
      id:logDetails.id
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