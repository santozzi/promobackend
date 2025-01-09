import CategoryDataSource from "../../../../domain/datasources/category.datasource";
import CategoryEntity from "../../../../domain/entities/category.entity";
import categoryEntity from "../../../../domain/entities/category.entity";
import { categoryEntityToCategoryModel, categoryModelToCategoryEntity } from "../../../mappers/category.mapper";
import CategoryModel from "../../../models/category.model";
import DataSourceSingle from "../../db/mysql.connection";

class CategoryDatasorceImp implements CategoryDataSource {
  
  datasource = DataSourceSingle.getInstance();
  categoryRepository = this.datasource.getRepository(CategoryModel);

  async add(category: CategoryEntity): Promise<CategoryEntity> {
    try{
      const categoria = await this.categoryRepository.save(categoryEntityToCategoryModel(category));
      return categoryModelToCategoryEntity(categoria);
    }catch(error){
       throw error;
    }

  }
  async update(id: number, category: CategoryEntity): Promise<void> {
    try{
      const usuario =await this.categoryRepository.findOne(
        {where:{id}}
      );
      if(usuario==null){
        throw new Error("Category not found");
      }
      
      await this.categoryRepository.update(id, categoryEntityToCategoryModel(category));
 
    }catch(error){
       throw error;
    }
  }
  async getCategoryPaginated(page: number, limit: number): Promise<CategoryEntity[]> {
    const categies = await this.categoryRepository.find({skip: (page-1)*limit, take: limit}); 
    return categies.map(categoryModelToCategoryEntity)
  }
  async getAll(): Promise<CategoryEntity[]> {
    try{
      const categories = await this.categoryRepository.find();
    
      
       return categories.map( (categoryModel:CategoryModel)=>{
           if(categoryModel==null || categoryModel==undefined|| isNaN(categoryModel.id)){
               throw new Error("Category not found");
           }
           const category =  categoryModelToCategoryEntity(categoryModel);
           if(category==null|| category==undefined|| isNaN(category.id!)){
               throw new Error("category not found");
           }
         return category;
       });
   }catch(error){
        throw error;
   }
  }
  async getCategoryById(id: number): Promise<CategoryEntity> {
    try{
      const category =await this.categoryRepository.findOne(
        {where:{id}}
      );
      if(category==null){
        throw new Error("category not found");
      }else{
        return  categoryModelToCategoryEntity(category);
      }
    } catch (error) {
        throw error;
    }
  }


 







}
export default CategoryDatasorceImp;