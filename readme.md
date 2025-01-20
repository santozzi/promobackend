## Instalación

### Con Docker  <img src="https://skillicons.dev/icons?i=docker" width="25px"/>

 1. Instalar Docker
 2. Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:
  ```env
     # docker host
     MYSQL_HOST=mariadb
     # local host
     # MYSQL_HOST=localhost
     MYSQL_PORT=3306
     MYSQL_USER=root
     MYSQL_PASSWORD=123456
     MYSQL_DATABASE=thebestbuy

     SECRET_WORD=(palabra secreta)
```
 3. Ejecutar Docker
 4. En la ruta del proyecto ejecutar el comando:

 ```bash
    docker compose up --build
```
 5. Una vez iniciado se tendra la base de datos vacia, para reinicar la base con los datos predeterminado ir al siguiente endopoint:

```bash
   http://localhost:3001/restart
```

### Con Node y MySQL <img src="https://skillicons.dev/icons?i=nodejs" width="25px"/><img src="https://skillicons.dev/icons?i=mysql" width="25px"/> ( NO ESTA PROBADO )
 1. Instalar MySQL, configurarlo para el ```puerto 3007```,  sea el predeterminado, password de root 123456, y crear una base de datos llamada ```thebestbuy```

 2. Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:
  ```env
     # docker host
     #MYSQL_HOST=localhost
     # local host
     MYSQL_HOST=localhost
     MYSQL_PORT=3306
     MYSQL_USER=root
     MYSQL_PASSWORD=123456
     MYSQL_DATABASE=thebestbuy

     SECRET_WORD=(palabra secreta)
```
 3. En la ruta del proyecto ejecutar el comando:

 ```bash
    npm install
```
 4. Una vez iniciado se tendra la base de datos vacia, para reinicar la base con los datos predeterminado ir al siguiente endopoint:

```bash
   http://localhost:3001/restart
```
## Uso

Con el servidor en funcionamiento, puedes utilizar herramientas como Postman o cURL para interactuar con la API. A continuación se describen algunos de los endpoints disponibles:

### Usuarios

- **`POST`** /users/login: Autenticar un usuario y obtener un token JWT.
- **`GET /users/`**: Obtener la lista de usuarios (requiere autenticación).
- **`GET /users/user/:id`**: Obtener los detalles de un usuario por ID (requiere autenticación).
- **`PUT users/:id`**: Actualizar los detalles de un usuario por ID (requiere autenticación).

### Productos
- **`POST /products/product`**: Crear un nuevo producto(requiere autenticación).
- **`GET /products`**: Obtener la lista de productos.
- **`GET /products/:id`**: Obtener los detalles de un producto por ID.
- **`PUT /products/product/:id`**: Actualizar los detalles de un producto por ID (requiere autenticación).

### Categorías
- **`POST /categories/category`**: Crear una nueva categoría de productos (requiere autenticación)..
- **`GET /api/categories`**: Obtener la lista de categorías de productos.
- **`GET /api/categories/:id`**: Obtener los detalles de una categoría por ID.
- **`PUT /categories/category/:id`**: Actualizar los detalles de una categoría por ID (requiere autenticación).

### Reiniciar datos
- **`GET /restart`**: Reinicia todos los datos de la base de datos, borra todo lo nuevo y deja solo lo inicial.