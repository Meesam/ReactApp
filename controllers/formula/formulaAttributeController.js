import FormulaAttribute from '../../models/formulaAttributes';
import logger from '../../core/Logger';

export function addFormulaAttribute(formulaAttrDetails) {
  return FormulaAttribute.create({
    FormulaId:formulaAttrDetails.formulaId,
    FormulaSet:formulaAttrDetails.formulaSet,
    CreatedBy:formulaAttrDetails.createdBy,
    ModifiedBy:formulaAttrDetails.modifiedBy,
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


export function getAllFormulaAttribute() {
  return FormulaAttribute.findAll()
    .then((result)=>{
      return result;
    })
    .catch((error)=>{
      logger.error(error);
      return error;
    })
}


export function getFormulaAttributeById(Id) {
  return FormulaAttribute.findById(Id)
    .then((result)=>{
      return result;
    })
    .catch((error)=>{
      logger.error(error);
      return error;
    })
}

export function updateFormulaAttribute(formulaAttrDetails) {
   return FormulaAttribute.update({
     FormulaId:formulaAttrDetails.formulaId,
     FormulaSet:formulaAttrDetails.formulaSet,
     CreatedBy:formulaAttrDetails.createdBy,
     ModifiedBy:formulaAttrDetails.modifiedBy,
     Status:true
   },{
     where:{
       id:formulaAttrDetails.id
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


