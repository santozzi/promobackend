import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, OneToMany} from 'typeorm';
import CategoryModel from './category.model';



@Entity('products')
export class ProductModel{
  @PrimaryGeneratedColumn()  
  id: number;

  @Column()
  title: string;
 
  @Column()
   price: number;
  
  @Column("text")
   description: string;
   
  @ManyToOne(() => CategoryModel, { eager: true })
  @JoinColumn({ name: "categoria_id" })
   category: CategoryModel;
    
 @Column("simple-array")
   images: string[];

  @CreateDateColumn({name: 'created_at'})
    createdAt: Date

  @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date
  
  
  
  constructor(title: string, price:number, description:string, images: string[], category:CategoryModel, id: number = 0, createdAt: Date = new Date(), updatedAt: Date = new Date()) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.images = images;
    this.description = description;
    this.category = category;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
 
}
export default ProductModel;