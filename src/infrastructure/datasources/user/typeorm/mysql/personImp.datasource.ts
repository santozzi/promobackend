import PersonDataSource from "../../../../../domain/datasources/person.datasource";
import PersonEntity from "../../../../../domain/entities/users/person.entity";
import { personEntityToPersonModel, personModelToPersonEntity } from "../../../../mappers/person.mapper";
import PersonModel from "../../../../models/user/person.model";
import DataSourceSingle from "../../../db/mysql.connection";

class PersonDatasorceImp implements PersonDataSource {
    datasource = DataSourceSingle.getInstance();
    PersonRepository = this.datasource.getRepository(PersonModel);

    async add(Person: PersonEntity): Promise<PersonEntity> {
        const persona = await this.PersonRepository.save(personEntityToPersonModel(Person));
        return personModelToPersonEntity(persona);
    }




}
export default PersonDatasorceImp;