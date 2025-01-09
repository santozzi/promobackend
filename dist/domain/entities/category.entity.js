"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CategoryEntity {
    constructor(name, image, id = 0, creationAt = new Date(), updatedAt = new Date()) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.creationAt = creationAt;
        this.updatedAt = updatedAt;
    }
}
exports.default = CategoryEntity;
