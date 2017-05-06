import Vendor from '../../models/Vendor';
import logger from '../../core/Logger';

export function createVendor(vendorDetails) {
  return Vendor.create({
    VendorName:vendorDetails.vendorName,
    TestGroupId:vendorDetails.testGroupId,
    CreatedBy:vendorDetails.createdBy,
    ModifiedBy:vendorDetails.modifiedBy,
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

export function getAllVendor() {
  return Vendor.findAll()
    .then((result)=>{
      return result;
    })
    .catch((error)=>{
      logger.error(error);
      return error;
    })
}

export function getVendorById(Id) {
  return Vender.findById(Id)
    .then((result)=>{
      return result;
    })
    .catch((error)=>{
      logger.error(error);
      return error;
    })
}

export function updateVendor(vendorDetails) {
   return Vendor.update({
     VendorName:vendorDetails.vendorName,
     TestGroupId:vendorDetails.testGroupId,
     CreatedBy:vendorDetails.createdBy,
     ModifiedBy:vendorDetails.modifiedBy,
     Status:true
   },{
     where:{
       id:vendorDetails.id
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
