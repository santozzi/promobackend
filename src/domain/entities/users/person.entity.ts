import BaseEntity from "../base.entity";
import LocalizationEntity from "./localization.entity";

class PersonEntity extends BaseEntity{

    constructor(
        protected name: string,
        protected lastName: string,
        protected email: string,
        protected phone: string,
        protected avatar:string,
        protected gender:string,
        protected localization: LocalizationEntity,
       
        id: number,
        createdAt: Date,
        updatedAt: Date
    ) {
        super(id, createdAt, updatedAt);
    }
    
    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }
    public getAvatar(): string {
        return this.avatar;
    }
    public setAvatar(avatar: string): void {
        this.avatar = avatar;
    }
    public getGender(): string {
        return this.gender;
    }
    public setGender( gender: string): void {
        this.gender = gender;
    }
    public getLocalization(): LocalizationEntity {
        return this.localization;
    }
    public setLocalization(localization: LocalizationEntity): void {
        this.localization = localization;
    }

    public getLastName(): string {
        return this.lastName;
    }
    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }
    public getEmail(): string {
        return this.email;
    }
    public setEmail(email: string): void {
        this.email = email;
    }
    public getPhone(): string {
        return this.phone;
    }
    public setPhone(phone: string): void {
        this.phone = phone;
    }


}
export default PersonEntity;