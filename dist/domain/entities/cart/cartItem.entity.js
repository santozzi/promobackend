"use strict";
class CartItemEntity {
    constructor(productId, quantity, id = 0, created_at = new Date(), updated_at = new Date()) {
        this.id = id;
        this.productId = productId;
        this.quantity = quantity;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}
