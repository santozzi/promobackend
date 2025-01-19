import ProductEntity from "../product.entity";
//PROXIMAMENTE
class CartItemEntity {
    id?: number;
    product: ProductEntity;
    quantity: number;
    created_at?: Date;
    updated_at?: Date;
    constructor(product: ProductEntity, quantity: number, id: number = 0, created_at: Date = new Date(), updated_at: Date = new Date()) {
        this.id = id;
        this.product = product;
        this.quantity = quantity;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}
export default CartItemEntity;