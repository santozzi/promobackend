import BaseEntity from "../base.entity";


class PersonEntity extends BaseEntity{

    constructor(
        protected name: string,
        protected lastName: string,
        protected email: string,
        protected phone: string,
        protected avatar:string,
        protected gender:string,
        protected country: string,
        protected state: string,
        protected city: string,
       
        id: number=0,
        createdAt: Date= new Date(),
        updatedAt: Date= new Date()
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

    public getCountry(): string {
        return this.country;
    }
    public setCountry(country: string): void {
        this.country = country;
    }
    public getState(): string {
        return this.state;
    }
    public setState(state: string): void {
        this.state = state;
    }
    public getCity(): string {
        return this.city;
    }
    public setCity(city: string): void {
        this.city = city;
    }

}
export default PersonEntity;