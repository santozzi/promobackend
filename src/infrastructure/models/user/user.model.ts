import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import PersonModel from "./person.model";


@Entity("users")
export class UserModel {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public username: string;

  @Column()
  public password: string;

  @Column()
  public role: string;

  @OneToOne(() => PersonModel)
  @JoinColumn({ name: "id_person" })
  public person: PersonModel; 

  @CreateDateColumn({ name: "created_at" })
  public createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  public updatedAt: Date;

  constructor(
    username: string,
    password: string,
    role: string,
    person: PersonModel,
    id: number = 0,
    createdAt: Date = new Date(),
    updatedAt: Date = new Date()
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.role = role;
    this.person = person;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }



  public getUsername(): string {
    return this.username;
  }

  public getPassword(): string {
    return this.password;
  }

  public getRole(): string {
    return this.role;
  }




  public setId(id: number): void {
    this.id = id;
  }

  public setUsername(username: string): void {
    this.username = username;
  }

  public setPassword(password: string): void {
    this.password = password;
  }

  public setRole(role: string): void {
    this.role = role;
  }



  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public getPerson(): PersonModel {
    return this.person;
  }

  public setPerson(person: PersonModel): void {
    this.person = person;
  }
  

}
