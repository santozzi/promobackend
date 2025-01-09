import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn} from 'typeorm';


@Entity('categories')
export class CategoryModel{
  @PrimaryGeneratedColumn()  
  id: number;

  @Column()
   name: string;

  @Column()
   image: string;

  @CreateDateColumn({name: 'created_at'})
    createdAt: Date

  @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date
  
  
  
  constructor(name: string, image: string, id: number = 0, createdAt: Date = new Date(), updatedAt: Date = new Date()) {
    this.id = id;
    
    this.name = name;
    this.image = image;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
 
}
export default CategoryModel;