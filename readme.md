# Cube Summation Challenge

## Frameworks

Para el desarrollo de la aplicación se hizo uso de: 
-Laravel (Backend)
-ReactJS (Frontend)
-Laravel MIX (Wrapper para Webpack)
-SASS (Preprocesador CSS)
-Bootstrap (CSS)

-Se hizo uso de Pattern Repository uno de los patrones SOLID en la ingenieria de software

## Capas de la aplicación

### Cliente

La capa del cliente es la encargada de brindar la interacción con el usuario, en ella se hacen las validaciones y peticiones correspondientes al flujo de la aplicación

En esta capa se encuentran:
- ReactJS: Encargado de renderizar las vistas dinamicamente y realizar las peticiones al servidor
- Bootstrap: Encargado de facilitar la maquetación del sitio
- SASS : Encargado de preprocesar el css para obtener mayor beneficio en el desarrollo
- Laravel MIX: Encargado de compilar los archivos jsx y entregar un solo archivo compilado y minificado
- Axios: Librería encargada de realizar las peticiones AJAX

### Servidor

La capa del servidor es la que se encarga de renderizar el html y dar respuesta a todas las peticiones que vengan del lado del cliente a traves de una pequeña API

### Datos
La capa de datos es la encargada de persitir los datos que son enviados desde el servidor.
- Se utilizó Laravel Session


## Instalación

Ruta de Bienvenida Laravel (/)
Ruta de Home (/home/)

git clone https://github.com/joseomar10/cube-summation.git
cd cube-summation
composer install && npm install
npm run watch (Terminal 1)
php artisan serve (Terminal 2)