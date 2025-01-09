"use strict";
class CartEntity {
    constructor(userId, items, id = 0, created_at = new Date(), updated_at = new Date()) {
        this.id = id;
        this.userId = userId;
        this.items = items;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}
