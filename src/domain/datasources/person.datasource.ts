
import PersonEntity from "../entities/users/person.entity";


interface PersonDataSource {
    add(localization: PersonEntity): Promise<PersonEntity>;


}
export default PersonDataSource;