import ProductEntity from "../../domain/entities/product.entity";
import ProductModel from "../models/product.model";
import { categoryEntityToCategoryModel, categoryModelToCategoryEntity } from "./category.mapper";


export const productModelToProductEntity = (productModel:ProductModel) => {


    
    
    return new ProductEntity(
        productModel.title, 
        productModel.price,
        productModel.description,
        productModel.images,
        productModel.category, 
        productModel.id, productModel.createdAt, productModel.updatedAt);
}

export const productEntityToProductModel = (productEntity:ProductEntity) => {

    return new ProductModel(
        productEntity.title, 
        productEntity.price,
        productEntity.description,
        productEntity.images,
        categoryEntityToCategoryModel(productEntity.category),
        productEntity.id);
}