class CartEntity{
    id?:number;
    userId:number;
    items:CartItemEntity[];
    created_at?:Date;
    updated_at?:Date;

    constructor(userId:number,items:CartItemEntity[],id:number=0,created_at:Date=new Date(),updated_at:Date=new Date()){
        this.id=id;
        this.userId=userId;
        this.items=items;
        this.created_at=created_at;
        this.updated_at=updated_at;
    }
}