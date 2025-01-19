import UserEntity from "../user.entity";
import CartItemEntity from "./cartItem.entity";
//PROXIMAMENTE
class CartEntity{
    id?:number;
    user:UserEntity;
    items:CartItemEntity[];
    created_at?:Date;
    updated_at?:Date;

    constructor(user:UserEntity,items:CartItemEntity[],id:number=0,created_at:Date=new Date(),updated_at:Date=new Date()){
        this.id=id;
        this.user=user;
        this.items=items;
        this.created_at=created_at;
        this.updated_at=updated_at;
    }
}
export default CartEntity;