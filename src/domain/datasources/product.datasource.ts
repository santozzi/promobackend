import ProductEntity from "../entities/product.entity";



interface ProductDataSource{
    add(user: ProductEntity): Promise<ProductEntity>;
    update(id: number, product:ProductEntity):void;
    getProductPaginated(page: number, limit: number): Promise<ProductEntity[]>;
    getAll(): Promise<ProductEntity[]>;
    getProductById(id: number): Promise<ProductEntity>;

}   
export default ProductDataSource;