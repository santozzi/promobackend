import LocalizationEntity from "../entities/users/localization.entity";


export interface LocalizationRepository {
   add(localization: LocalizationEntity): Promise<LocalizationEntity>;
}
export default LocalizationRepository ;