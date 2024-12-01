import LocalizationDataSource from "../../../../../domain/datasources/localization.datasource";
import LocalizationEntity from "../../../../../domain/entities/users/localization.entity";
import { localizationEntityToLocalizationModel, localizationModelToLocalizationEntity } from "../../../../mappers/localization.mapper";
import LocalizationModel from "../../../../models/user/localization.model";
import DataSourceSingle from "../../../db/mysql.connection";

class LocalizationDatasorceImp implements LocalizationDataSource {
    datasource = DataSourceSingle.getInstance();
    localizationRepository = this.datasource.getRepository(LocalizationModel);

    async add(localization: LocalizationEntity): Promise<LocalizationEntity> {
        const local = await this.localizationRepository.save(localizationEntityToLocalizationModel(localization));
        return localizationModelToLocalizationEntity(local);
    }




}
export default LocalizationDatasorceImp;