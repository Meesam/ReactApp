import Attribute from '../../models/Attributes';
import logger from '../../core/Logger';

export function addAttribute(attributeDetails) {
  return Attribute.create({
    AttrName:attributeDetails.attrName,
    CreatedBy:attributeDetails.createdBy,
    ModifiedBy:attributeDetails.modifiedBy,
    Status:true
  })
  .then((result)=>{
    return result;
  })
  .catch((error)=>{
     logger.error(error)
     return error;
  })
}


export function getAllAttributes() {
  return Attribute.findAll()
    .then((result)=>{
      return result;
    })
    .catch((error)=>{
      logger.error(error)
      return error;
    })
}


export function getAttributeById(Id) {
  return Attribute.findById(Id)
    .then((result)=>{
      return result;
    })
    .catch((error)=>{
      logger.error(error)
      return error;
    })
}

export function UpdateAttribute(attributeDetails) {
   return Attribute.update({
     AttrName:attributeDetails.attrName,
     CreatedBy:attributeDetails.createdBy,
     ModifiedBy:attributeDetails.modifiedBy,
     Status:true
   },{
     where:{
       id:attributeDetails.id
     }
   })
   .then((result)=>{
     return result;
   })
   .catch((error)=>{
     logger.error(error)
     return error;
   })
}