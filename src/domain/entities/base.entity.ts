class BaseEntity{
    public id: number;
    public createdAt: Date;
    public updatedAt: Date;
    constructor(id: number = 0, createdAt: Date= new Date(), updatedAt: Date=new Date()){
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
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
export default BaseEntity;