interface UserAttributes {
    id: number;
    name: string;
    lastName: string;
    dni: string;
    email: string;
    phone: string;
    password:string;
    createdAt?: Date;
    updatedAt?: Date;
}
export default UserAttributes;