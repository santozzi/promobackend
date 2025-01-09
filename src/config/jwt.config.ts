import dotenv from 'dotenv';
dotenv.config();

export interface JWTConfig {
    SECRET_WORD:string;
    JWT_EXPIRED?:string;

}


if(!process.env.SECRET_WORD){
    throw new Error('Secret word must be provided');
}
if(!process.env.JWT_EXPIRED){
    throw new Error('JWT_EXPIRED must be provided');
}



const jwtConfig: JWTConfig = {
    SECRET_WORD: process.env.SECRET_WORD,
    JWT_EXPIRED: process.env.JWT_EXPIRED
};


export default jwtConfig;