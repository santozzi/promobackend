import CategoryEntity from "../../domain/entities/category.entity";
import CategoryModel from "../models/category.model";


export const categoryModelToCategoryEntity = (categoryModel:CategoryModel) => {

    
    
    return new CategoryEntity(
        categoryModel.name, 
        categoryModel.image, 
        categoryModel.id, categoryModel.createdAt, categoryModel.updatedAt);
}

export const categoryEntityToCategoryModel = (categoryEntity:CategoryEntity) => {
   
    return new CategoryModel(
        categoryEntity.name, 
        categoryEntity.image, 
    
        categoryEntity.id, categoryEntity.creationAt, categoryEntity.updatedAt);
}