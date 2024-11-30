import BaseEntity from "../base.entity";
import PersonEntity from "./person.entity";


class UserEntity extends BaseEntity{
    

    constructor(
        protected username: string, 
        protected password:string, 
        protected role:string,
        protected person: PersonEntity,
        id: number,
        createdAt: Date,
        updatedAt: Date
      ){ super(id, createdAt, updatedAt); }
     
      public getUsername(): string {
        return this.username;
      }
        public setUsername(username: string): void {
            this.username = username;
        }
        public getPassword(): string {
            return this.password;
        }
        public setPassword(password: string): void {
            this.password = password;
        }
        public getRole(): string {
            return this.role;
        }
        public setRole(role: string): void {
            this.role = role;
        }
        public getPerson(): PersonEntity {
            return this.person;
        }
        public setPerson(person: PersonEntity): void {
            this.person = person;
        }
        

    }

export default UserEntity;
