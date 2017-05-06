import Product from '../../models/Product';
import logger from '../../core/Logger';

export function addProduct(productDetails) {
   return Product.create({
     ProductTitle:productDetails.productTitle,
     VendorId:productDetails.vendorId,
     TestGroupId:productDetails.testGroupId,
     CreatedBy:productDetails.createdBy,
     ModifiedBy:productDetails.modifiedBy,
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

export function getAllProduct() {
  return Product.findAll()
    .then((result)=>{
      return result;
    })
    .catch((error)=>{
      logger.error(error);
      return error;
    })
}

export function getProductById(Id) {
  return Product.findById(Id)
    .then((result)=>{
       return result;
    })
    .catch((error)=>{
      logger.error(error);
      return error;
    })
}

export function updateProduct(productDetails) {
  return Product.update({
    ProductTitle:productDetails.productTitle,
    VendorId:productDetails.vendorId,
    TestGroupId:productDetails.testGroupId,
    CreatedBy:productDetails.createdBy,
    ModifiedBy:productDetails.modifiedBy,
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