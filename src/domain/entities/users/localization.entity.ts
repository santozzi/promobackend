import BaseEntity from "../base.entity";

class LocalizationEntity extends BaseEntity {

   constructor(
    protected country: string,
    protected state: string,
    protected city: string,
    id: number,
    createdAt: Date,
    updatedAt: Date
    
){
    super(id, createdAt, updatedAt);
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
export default LocalizationEntity;