import BaseEntity from "../base.entity";
import PersonEntity from "./person.entity";


class UserEntity {
    

    constructor(
        public username: string, 
        public password:string, 
        public role:string,
        public person: PersonEntity,
        public id: number = 0,
        public createdAt: Date = new Date(),
        public updatedAt: Date = new Date()
      ){ }
     
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
