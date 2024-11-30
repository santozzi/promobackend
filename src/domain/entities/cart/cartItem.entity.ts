class CartItemEntity {
    id?: number;
    productId: number;
    quantity: number;
    created_at?: Date;
    updated_at?: Date;
    constructor(productId: number, quantity: number, id: number = 0, created_at: Date = new Date(), updated_at: Date = new Date()) {
        this.id = id;
        this.productId = productId;
        this.quantity = quantity;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}