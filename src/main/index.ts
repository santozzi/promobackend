
import "reflect-metadata"
import DataSourceSingle from "../infrastructure/datasources/db/mysql.connection";
import Server from "./server";









//Configura middlewares globales y la inicialización general
console.log("Hola mundo");

 const startApp = async () => {
  try {
    //base de datos
    const data = DataSourceSingle.getInstance();
    await data.initialize();
    
    // Inicializa el servidor
    const server = new Server(3000);
    server.start(()=>{});
    
  }catch(error){
      console.error('Error al crear un nuevo usuario:', error);
  }
  
  
  }

    






    









startApp().then(()=>{console.log("Aplicación iniciada")}).catch((error)=>{console.error("Error al iniciar la aplicación", error)});

