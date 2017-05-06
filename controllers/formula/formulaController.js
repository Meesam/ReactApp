import Formula from '../../models/Formula';
import logger from '../../core/Logger';

export function createFormula(formulaDetails) {
   return  Formula.create({
     Version:formulaDetails.version,
     FormulaName:formulaDetails.formulaName,
     CreatedBy:formulaDetails.createdBy,
     ModifiedBy:formulaDetails.modifiedBy,
     Status:true
   })
   .then((result)=>{
      return result;
   })
   .catch((error=>{
     logger.error(error);
      return error;
   }))
}

export function getAllFormula() {
  return Formula.findAll()
    .then((result)=>{
      return result;
    })
    .catch((error)=>{
      logger.error(error);
      return error;
    })
}

export function getFormulaById(Id) {
  return Formula.findById(Id)
    .then((result)=>{
       return result;
    })
    .catch((error)=>{
      logger.error(error);
       return error;
    })
}

export function updateFormula(formulaDetails) {
   return Formula.update({
     Version:formulaDetails.version,
     FormulaName:formulaDetails.formulaName,
     CreatedBy:formulaDetails.createdBy,
     ModifiedBy:formulaDetails.modifiedBy,
     Status:true
   },{
     where:{
       id:formulaDetails.id
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