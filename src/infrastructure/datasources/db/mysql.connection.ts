import 'reflect-metadata';
import { DataSource } from 'typeorm';
import dataBaseConfig from '../../../config/dataBase.config';


class DataSourceSingle  extends DataSource{
  private static instance: DataSourceSingle;

  private constructor(){
    super({
      type: 'mysql',
      host: 'mariadb',
      port: 3306,
      username:'root',
      password: '123456',
      database: 'thebestbuy',
      entities: ['src/infrastructure/models/user/*.ts'],
    });
  }
  public static  getInstance(): DataSourceSingle {
    if(!DataSourceSingle.instance){
      DataSourceSingle.instance = new DataSourceSingle();
    }
    return DataSourceSingle.instance;
  }
}
export default DataSourceSingle;



