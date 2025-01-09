import 'reflect-metadata';
import { DataSource } from 'typeorm';
import dataBaseConfig from '../../../config/dataBase.config';


class DataSourceSingle  extends DataSource{
  private static instance: DataSourceSingle;

  private constructor(){
    super({
      type: 'mysql',
      host: dataBaseConfig.MYSQL_HOST,
      port: dataBaseConfig.MYSQL_PORT,
      username: dataBaseConfig.MYSQL_USER,
      password:   dataBaseConfig.MYSQL_PASSWORD,
      database: dataBaseConfig.MYSQL_DATABASE,
      entities: ['src/infrastructure/models/*.ts'],
      synchronize: true,
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




