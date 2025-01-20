## Uso

Con el servidor en funcionamiento, puedes utilizar herramientas como Postman o cURL para interactuar con la API. A continuación se describen algunos de los endpoints disponibles:

### Usuarios

- `POST /users/login`: Autenticar un usuario y obtener un token JWT.
- `GET /users/`: Obtener la lista de usuarios (requiere autenticación).
- `GET /users/user/:id`: Obtener los detalles de un usuario por ID (requiere autenticación).
- `PUT users/:id`: Actualizar los detalles de un usuario por ID (requiere autenticación).

### Productos
- `POST /products/product`: Crear un nuevo producto(requiere autenticación).
- `GET /products`: Obtener la lista de productos.
- `GET /products/:id`: Obtener los detalles de un producto por ID.
- `PUT /products/product/:id`: Actualizar los detalles de un producto por ID (requiere autenticación).

### Categorías
- `POST /categories/category`: Crear una nueva categoría de productos (requiere autenticación)..
- `GET /api/categories`: Obtener la lista de categorías de productos.
- `GET /api/categories/:id`: Obtener los detalles de una categoría por ID.
- `PUT /categories/category/:id`: Actualizar los detalles de una categoría por ID (requiere autenticación).

### Reiniciar datos
- `GET /restart`: Reinicia todos los datos de la base de datos, borra todo lo nuevo y deja solo lo inicial.