
import "reflect-metadata"
import DataSourceSingle from "../infrastructure/datasources/db/mysql.connection";
import Server from "./server";
import UserEntity from "../domain/entities/user.entity";

import UserRepositoryImp from "../infrastructure/repositories/user.repository";
import UserDatasorceImp from "../infrastructure/datasources/user/typeorm/mysql/userImp.datasource";







//Configura middlewares globales y la inicialización general
console.log("Hola mundo");






 const startApp = async () => {
  try {
    //base de datos
    const data = DataSourceSingle.getInstance();
    const datasource = await data.initialize();
    
    // Inicializa el servidor
    const server = new Server(3000);
    server.start(()=>{});

    //crea un nuevo usuario

    //localizationModel

    //crear el repositorio
    //const localizationRepository = datasource.getRepository(LocalizationModel);
    //crear loalization
    //const localization = await localizationRepository.save(localizationModel);
    



    //console.log(localization);
    

    //crear nueva persona
    const personEntity = new UserEntity("Sergio","Gonzalez","masculino@gmail.com","123456789","avatar","masculino","Argentina","Buenos Aires","Lanus","sergio","1234","admin");
    const personDatasource = new UserDatasorceImp();
    const personRepository = new UserRepositoryImp(personDatasource);
    const person = await personRepository.add(personEntity);


    
    //crear el repositorio
    //const personRepository = datasource.getRepository(PersonModel);
    //crear persona
    //const  person = await personRepository.save(personModel);

  
    console.log(person);
    

    //crear el repositorio
    //const userRepository = datasource.getRepository(UserModel);
    //crear usuario
    //await userRepository.save(userModel);
  
  }catch(error){
      console.error('Error al crear un nuevo usuario:', error);
  }
  
  
  }

    






    









startApp().then(()=>{console.log("Aplicación iniciada")}).catch((error)=>{console.error("Error al iniciar la aplicación", error)});

