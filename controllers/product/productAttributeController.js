import ProductAttribute from '../../models/ProductAttributeMapping';
import logger from '../../core/Logger';

export function addProductAttribute(prodAttrDetails) {
   return  ProductAttribute.create({
     AttrId:prodAttrDetails.attrId,
     AliaseName:prodAttrDetails.aliaseName,
     ProductId:prodAttrDetails.productId,
     CreatedBy:prodAttrDetails.createdBy,
     ModifiedBy:prodAttrDetails.modifiedBy,
     Status:true
   })
   .then((result)=>{
     return result;
   })
   .catch((error)=>{
     logger.debug(error);
      return error;
   })

}

export function getAllProductAttribute() {
  return ProductAttribute.findAll()
    .then((result)=>{
      return result;
    })
    .catch((error)=>{
      logger.debug(error);
      return error;
    })
}

export function getProductAttributeById(Id) {
  return ProductAttribute.findById(Id)
    .then((result)=>{
      return result;
    })
    .catch((error)=>{
      logger.debug(error);
      return error;
    })
}

export function updateProductAttribute(prodAttrDetails) {
   return ProductAttribute.update({
     AttrId:prodAttrDetails.attrId,
     AliaseName:prodAttrDetails.aliaseName,
     ProductId:prodAttrDetails.productId,
     CreatedBy:prodAttrDetails.createdBy,
     ModifiedBy:prodAttrDetails.modifiedBy,
     Status:true
   },{
     where:{
       id:prodAttrDetails.id
     }
   })
   .then((result)=>{
      return result;
   })
   .catch((error)=>{
     logger.debug(error);
      return error;
   })
}