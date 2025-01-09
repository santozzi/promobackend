"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductEntity {
    constructor(title, price, description, images, category, id = 0, creationAt = new Date(), updatedAt = new Date()) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.images = images;
        this.category = category;
        this.creationAt = creationAt;
        this.updatedAt = updatedAt;
    }
}
exports.default = ProductEntity;
