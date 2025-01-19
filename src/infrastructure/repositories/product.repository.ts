import ProductDataSource from "../../domain/datasources/product.datasource";
import ProductEntity from "../../domain/entities/product.entity";
import ProductRepository from "../../domain/repositories/product.repository";


class ProductRepositoryImp implements ProductRepository{
    
    productDataSource: ProductDataSource;
    constructor(productDataSource: ProductDataSource){
        this.productDataSource = productDataSource;
    }
    add(product: ProductEntity): Promise<ProductEntity> {
        return this.productDataSource.add(product);
    }
    update(id: number, product: ProductEntity): void {
        this.productDataSource.update(id, product);
    }
    getProductPaginated(page: number, limit: number): Promise<ProductEntity[]> {
        return this.productDataSource.getProductPaginated(page, limit);
    }
    getAll(): Promise<ProductEntity[]> {
        return this.productDataSource.getAll();
    }
    getProductById(id: number): Promise<ProductEntity> {
        return this.productDataSource.getProductById(id);
    }
    


}
export default ProductRepositoryImp;