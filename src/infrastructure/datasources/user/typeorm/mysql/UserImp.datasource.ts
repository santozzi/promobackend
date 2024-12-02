import UserDataSource from "../../../../../domain/datasources/user.datasource";
import UserEntity from "../../../../../domain/entities/user.entity";
import { personEntityToPersonModel, personModelToPersonEntity } from "../../../../mappers/user.mapper";
import UserModel from "../../../../models/user.model";
import DataSourceSingle from "../../../db/mysql.connection";

class UserDatasorceImp implements UserDataSource {

    datasource = DataSourceSingle.getInstance();
    userRepository = this.datasource.getRepository(UserModel);

    async add(user: UserEntity): Promise<UserEntity> {
        const persona = await this.userRepository.save(personEntityToPersonModel(user));
        return personModelToPersonEntity(persona);
    }

    async getAll(): Promise<UserEntity[]> {
        return (await this.userRepository.find()).map(personModelToPersonEntity);
    }



}
export default UserDatasorceImp;