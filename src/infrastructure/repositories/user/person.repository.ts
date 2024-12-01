import PersonDataSource from "../../../domain/datasources/person.datasource";
import PersonEntity from "../../../domain/entities/users/person.entity";
import PersonRepository from "../../../domain/repositories/person.repository";



class PersonRepositoryImp implements PersonRepository{
    
    personDataSource: PersonDataSource;
    constructor(personDataSource: PersonDataSource){
        this.personDataSource = personDataSource;
    }


    add(person: PersonEntity): Promise<PersonEntity> {
       return this.personDataSource.add(person);
    }

}
export default PersonRepositoryImp;