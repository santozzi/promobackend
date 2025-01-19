

class UserEntity{

    constructor(
        public name: string,
        public  lastName: string,
        public  email: string,
        public  phone: string,
        public  avatar:string,
        public  gender:string,
        public  country: string,
        public  state: string,
        public  city: string,
        public  username: string, 
        public  password:string, 
        public  role:string,
        public  id: number=0,
        public  createdAt: Date= new Date(),
        public  updatedAt: Date= new Date()
    ) {
        
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
    public getUsername(): string {
        return this.username;
    }
    public setUsername(username: string): void {
        this.username = username;
    }
    public getPassword(): string {
        return this.password ;
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
    public getId(): number {
        return this.id;
    }
    public setId(id: number): void {
        this.id = id;
    }
    public getCreatedAt(): Date {
        return this.createdAt;
    }
    public setCreatedAt(createdAt: Date): void {
        this.createdAt = createdAt;
    }
    public getUpdatedAt(): Date {
        return this.updatedAt;
    }
    public setUpdatedAt(updatedAt: Date): void {
        this.updatedAt = updatedAt;
    }

    


}
export default UserEntity;