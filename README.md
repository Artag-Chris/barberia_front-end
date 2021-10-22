sitio creado con React y axios registra, borra, busca y actualiza  clientes, citas, y barberos hace llamadas a la api que también esta en Artag-Chris/repositorios  
por cuestión de facilitar el acceso a administrador y ver sus opciones se creo una opción de administrador en /registro donde al solo dar click se entrar a una ventana donde se podrán consultar los datos 
de clientes barberos y las citas todo traído desde la api.

el proyecto tiene mucho para mejorar como un mejor uso de los estados con useState y los useEffect incluso pensé en un hook llamado useContext para no tener que pasar tantos props
también se deben mejorar en la parte visual ya que hay vistas que no están en responsive como la de /administrador y unas partes de /reservar 
hay un bug en la parte de /administrador cuando esto pase ir a la root "/" y de hay seguir normal la ruta hasta administrador 
estos bugs y diseño no se han corregido hasta la fecha por falta de tiempo.

recordar usar los comandos npm install (npm i) para instalar las dependencias y después npm start para correr la aplicación
