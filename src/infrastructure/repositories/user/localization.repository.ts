import LocalizationDataSource from "../../../domain/datasources/localization.datasource";
import LocalizationEntity from "../../../domain/entities/users/localization.entity";
import LocalizationRepository from "../../../domain/repositories/localization.repository";

class LocalizationRepositoryImp implements LocalizationRepository {
    localizationDataSource: LocalizationDataSource;
    
    constructor(localizationDataSource: LocalizationDataSource){
        this.localizationDataSource = localizationDataSource;
    }

    add(localization: LocalizationEntity): Promise<LocalizationEntity> {
        return this.localizationDataSource.add(localization);
    }

}
export default LocalizationRepositoryImp;