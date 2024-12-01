import LocalizationEntity from "../entities/users/localization.entity";


interface LocalizationDataSource {
    add(localization: LocalizationEntity): Promise<LocalizationEntity>;


}
export default LocalizationDataSource;