import PersonEntity from "../../domain/entities/users/person.entity";
import PersonModel from "../models/user/person.model";


export const personModelToPersonEntity = (personModel:PersonModel) => {
    return new PersonEntity(
        personModel.name, 
        personModel.lastName, 
        personModel.email, 
        personModel.phone,
        personModel.avatar,
        personModel.gender,
        personModel.country,
        personModel.state,
        personModel.city, 
        personModel.id, personModel.createdAt, personModel.updatedAt);
}

export const personEntityToPersonModel = (personEntity:PersonEntity) => {
    return new PersonModel(
        personEntity.getName(), 
        personEntity.getLastName(), 
        personEntity.getEmail(), 
        personEntity.getPhone(),
        personEntity.getAvatar(),
        personEntity.getGender(),
        personEntity.getCountry(),
        personEntity.getState(),
        personEntity.getCity(), 
        personEntity.id, personEntity.createdAt, personEntity.updatedAt);
}