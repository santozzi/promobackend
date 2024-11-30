class CategoryEntity {
     id?:number;
     name: string;
     image: string;
     creationAt?: Date;
     updatedAt?: Date;
     constructor(name: string, image: string, id: number = 0, creationAt: Date = new Date(), updatedAt: Date = new Date()) {
         this.id = id;
         this.name = name;
         this.image = image;
         this.creationAt = creationAt;
         this.updatedAt = updatedAt;
     }
}
export default CategoryEntity;