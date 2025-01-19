import CategoryEntity from "./category.entity";

class ProductEntity{
id?:number;
title:string;
price:number;
description:string;
images:string[];
createdAt?:Date;
updatedAt?:Date;
category:CategoryEntity;

constructor(
    title:string,
    price:number,
    description:string,
    images:string[],
    category:CategoryEntity,
    id:number=0,
    createdAt:Date=new Date()
    ,updatedAt:Date=new Date()){
    this.id=id;
    this.title=title;
    this.price=price;
    this.description=description;
    this.images=images;
    this.category=category;
    this.createdAt=createdAt;
    this.updatedAt=updatedAt;

}
}
export default ProductEntity; 