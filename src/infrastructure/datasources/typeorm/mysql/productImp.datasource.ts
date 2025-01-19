
import ProductDataSource from "../../../../domain/datasources/product.datasource";
import ProductEntity from "../../../../domain/entities/product.entity";
import { TokenData } from "../../../../presentation/dtos/tokenData";
import { productEntityToProductModel,productModelToProductEntity} from "../../../mappers/product.mapper";
import ProductModel from "../../../models/product.model";
import DataSourceSingle from "../../db/mysql.connection";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
class ProductDatasorceImp implements ProductDataSource {



  datasource = DataSourceSingle.getInstance();
  ProductRepository = this.datasource.getRepository(ProductModel);

  async update(id: number, product: ProductEntity){
    try{
      const producto =await this.ProductRepository.findOne(
        {where:{id}}
      );
      if(producto==null){
        throw new Error("Product not found");
      }
      
      await this.ProductRepository.update(id, productEntityToProductModel(product));
 
    }catch(error){
        console.log(error);
        throw error;
    }
  }

  async getProductPaginated(page: number, limit: number): Promise<ProductEntity[]> {
    const products = await this.ProductRepository.find({skip: (page-1)*limit, take: limit}); 
    return products.map(productModelToProductEntity)
   
  }
  
  async getProductById(id: number): Promise<ProductEntity> {
        try{
          const product =await this.ProductRepository.findOne(
            {where:{id}}
          );
          if(product==null){
            throw new Error("Product not found");
          }else{
            return  productModelToProductEntity(product);
          }
        } catch (error) {
            console.log(error);
            //TODO: Implementar manejo de errores
            throw error;
        }
        
        
    }



  async add(product: ProductEntity): Promise<ProductEntity> {
        try{
          const producto = await this.ProductRepository.save(productEntityToProductModel(product));
          return productModelToProductEntity(producto);
        }catch(error){
            console.log(error);
            throw error;
        }
 
    }

  async getAll(): Promise<ProductEntity[]> {
        try{
           const products = await this.ProductRepository.find();
           const productsEntity = products.map(productModelToProductEntity);

          return productsEntity;
        }catch(error){
            console.log("Este es el error: ",error);
            throw error;
        }
       
    }

}
export default ProductDatasorceImp;