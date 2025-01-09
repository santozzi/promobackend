import CategoryEntity from "../entities/category.entity";



interface CategoryDataSource{
    add(category: CategoryEntity): Promise<CategoryEntity>;
    update(id: number, category:CategoryEntity):void;
    getCategoryPaginated(page: number, limit: number): Promise<CategoryEntity[]>;
    getAll(): Promise<CategoryEntity[]>;
    getCategoryById(id: number): Promise<CategoryEntity>;
 
 
    

}   
export default CategoryDataSource;