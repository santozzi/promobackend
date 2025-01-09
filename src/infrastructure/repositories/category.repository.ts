import CategoryDataSource from "../../domain/datasources/category.datasource";
import CategoryEntity from "../../domain/entities/category.entity";
import UserEntity from "../../domain/entities/user.entity";
import CategoryRepository from "../../domain/repositories/category.repository";



class CategoryRepositoryImp implements CategoryRepository{
    
    categoryDataSource: CategoryDataSource;
    constructor(categoryDataSource: CategoryDataSource){
        this.categoryDataSource = categoryDataSource;
    }
    add(category: CategoryEntity): Promise<CategoryEntity> {
        return this.categoryDataSource.add(category);
    }
    update(id: number, category: CategoryEntity): void {
        this.categoryDataSource.update(id, category);
    }
    getCategoryPaginated(page: number, limit: number): Promise<CategoryEntity[]> {
        return this.categoryDataSource.getCategoryPaginated(page, limit);
    }
    getAll(): Promise<CategoryEntity[]> {
        return this.categoryDataSource.getAll();
    }
    getCategoryById(id: number): Promise<CategoryEntity> {
        return this.categoryDataSource.getCategoryById(id);
    }



}
export default CategoryRepositoryImp;