import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";
import PersonModel from "./person.model";

@Entity("users")
export class UserModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ name: "last_name", type: "varchar" })
  password: string;

  @Column()
  role: string;

  @OneToOne(() => PersonModel)
  @JoinColumn({ name: "id_person" })
  person: PersonModel;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

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
}
