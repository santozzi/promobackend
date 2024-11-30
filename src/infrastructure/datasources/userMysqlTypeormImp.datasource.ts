import UserDataSource from "../../domain/datasources/user.datasource";
import UserEntity from "../../domain/entities/users/user.entity";
import { userModelToUser, userToUserModel } from "../mappers/user.mapper";
import { UserModel } from "../models/user/user.model";
import DataSourceSingle from "./db/mysql.connection";

class UserMysqlTypeormImpDatasource implements UserDataSource {
  datasource = DataSourceSingle.getInstance();
  userRepository = this.datasource.getRepository(UserModel);

  // Ejemplo: Crear un nuevo usuario

  getUsers(): Promise<UserEntity[]> {
    throw new Error("Method not implemented.");
  }
  getUser(id: number): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  async updateUserByDni(dni: string, user: UserEntity): Promise<void> {
    
    const usuario = await this.userRepository.findOne({ where: { role: dni } });
    if (!usuario) {
      throw new Error("User not found");
    }

   // await this.userRepository.update(usuario.getId(), userToUserModel(user));
  }

  getUserByEmail(email: string): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  getUserByDni(dni: string): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  async addUser(inscripto: UserEntity): Promise<UserEntity> {
    const newUser = this.userRepository.create(userToUserModel(inscripto));
    const user = await this.userRepository.save(newUser);
    return userModelToUser(user);
  }

  deleteUser(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async updateUser(inscripto: UserEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
export default UserMysqlTypeormImpDatasource;
