
import "reflect-metadata"
import UserMysqlTypeormImpDatasource from "../infrastructure/datasources/userMysqlTypeormImp.datasource";
import UserRepository from "../infrastructure/repositories/user.repository";
import DataSourceSingle from "../infrastructure/datasources/db/mysql.connection";
import Server from "./server";





//Configura middlewares globales y la inicialización general
console.log("Hola mundo");


    // agregar un user de prueba

      /* const userRepository:UserRepository = new UserRepository(new MySqlInscriptosImpDatasource());
      userRepository.addUser(user).then((user:User) => {
          console.log(user);
      }).catch((error:Error) => {
          console.log(error);
      }); */

 const userRepository:UserRepository = new UserRepository(new UserMysqlTypeormImpDatasource());
 const datasource = DataSourceSingle.getInstance();
 const startApp = async () => {
  try {
    // Inicializa la conexión
    await datasource.initialize();
    console.log('Conexión a la base de datos establecida correctamente.');

    
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error); 
  }
};
startApp().then(() => {
  console.log('Aplicación inicializada correctamente.');
  
}).catch((error) => {
  console.error('Error al inicializar la aplicación:', error);

});

/* 
startApp().then(() => {
  console.log('Aplicación inicializada correctamente.');
  userRepository.addUser(user).then((usuario:User) => {
  console.log(usuario);
}).catch((error:Error) => {
  console.log(error);
});
}
).catch((error) => {
  console.error('Error al inicializar la aplicación:', error);
}); */
const server = new Server(3000);
server.start(() => {
  console.log('Servidor corriendo en el puerto 3000');
});


