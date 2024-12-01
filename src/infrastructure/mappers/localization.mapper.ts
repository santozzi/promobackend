import LocalizationEntity from "../../domain/entities/users/localization.entity";
import LocalizationModel from "../models/user/localization.model";


export const localizationModelToLocalizationEntity = (localizationModel: LocalizationModel): LocalizationEntity => {
    return new LocalizationEntity(localizationModel.country, localizationModel.state, localizationModel.city, localizationModel.id, localizationModel.createdAt, localizationModel.updatedAt);
}   

export const localizationEntityToLocalizationModel = (localizationEntity: LocalizationEntity): LocalizationModel => {
    return new LocalizationModel(localizationEntity.getCountry(), localizationEntity.getState(), localizationEntity.getCity(), localizationEntity.id, localizationEntity.createdAt, localizationEntity.updatedAt);
}