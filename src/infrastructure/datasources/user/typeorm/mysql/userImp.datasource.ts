import UserDataSource from "../../../../../domain/datasources/user.datasource";
import UserEntity from "../../../../../domain/entities/users/user.entity";
import { userEntityToUserModel, userModelToUserEntity } from "../../../../mappers/user.mapper";
import { UserModel } from "../../../../models/user/user.model";
import DataSourceSingle from "../../../db/mysql.connection";


class UserImpDatasource implements UserDataSource {

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

      throw new Error("User not found");
    

   // await this.userRepository.update(usuario.getId(), userToUserModel(user));
  }

  getUserByEmail(email: string): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  getUserByDni(dni: string): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }

  async add(user: UserEntity): Promise<UserEntity> {
    const usuario = await this.userRepository.save(userEntityToUserModel(user));

    return userModelToUserEntity(usuario);
 
  }

  deleteUser(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async updateUser(inscripto: UserEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
export default UserImpDatasource;
