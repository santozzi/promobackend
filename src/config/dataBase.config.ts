import dotenv from 'dotenv';
dotenv.config();

export interface DataBaseConfig {
    MYSQL_HOST:string;
    MYSQL_PORT:number;
    MYSQL_USER:string;
    MYSQL_PASSWORD:string;
    MYSQL_DATABASE:string;
}

if(!process.env.MYSQL_HOST){
    throw new Error('MYSQL_HOST must be provided');
}
if(!process.env.MYSQL_PORT){
    throw new Error('MYSQL_PORT must be provided');
}
if(!process.env.MYSQL_USER){
    throw new Error('MYSQL_USER must be provided');
}
if(!process.env.MYSQL_PASSWORD){
    throw new Error('MYSQL_PASSWORD must be provided');
}
if(!process.env.MYSQL_DATABASE){
    throw new Error('MYSQL_DATABASE must be provided');
}


const dataBaseConfig: DataBaseConfig = {
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_PORT: Number(process.env.MYSQL_PORT),
    MYSQL_USER: process.env.MYSQL_USER ,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE ,
};
export default dataBaseConfig;