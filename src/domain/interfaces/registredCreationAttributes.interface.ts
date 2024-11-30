import { Optional } from "sequelize";
import UserAttributes from "./user.interface";

interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export default UserCreationAttributes;