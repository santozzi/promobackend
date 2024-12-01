import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn} from 'typeorm';


@Entity('people')
export class PersonModel{
  @PrimaryGeneratedColumn()  
  id: number;

  @Column()
   name: string;

  @Column({name: 'last_name',type:'varchar'})
   lastName: string;

  @Column()
   email: string;

  @Column()
   phone: string;
  @Column()
   avatar: string;

  @Column()
   gender: string;

   @Column()
   country: string;
   @Column()
   state: string;
   @Column()
   city: string;


  @CreateDateColumn({name: 'created_at'})
    createdAt: Date

  @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date
  
  
  
  constructor(name: string, lastName: string, email: string, phone: string, avatar: string,gender:string, country:string, state:string, city:string, id: number = 0, createdAt: Date = new Date(), updatedAt: Date = new Date()) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;

    this.email = email;
    this.phone = phone;
    this.avatar = avatar;
    this.gender = gender;
    this.country = country;
    this.state = state;
    this.city = city;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
 
}
export default PersonModel;