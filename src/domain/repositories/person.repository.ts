import PersonEntity from "../entities/users/person.entity";


export interface PersonRepository {
   add(localization: PersonEntity): Promise<PersonEntity>;
}
export default PersonRepository ;