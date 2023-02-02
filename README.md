# Regalería Vane 
# Proyecto e-commerce en React js 
## CODERHOUSE 

**Regalería Vane** es un sitio web *e-commerce*, Su objetivo es vender productos varios, por ejemplo: Artículos de librería, cocina, juguetes, etc. Además existen artículos que están en ofertas, los cuales tienen un icono distintivo.
Se pueden agregar varios productos al carrito con la cantidad de unidades que el cliente especifico.
![Image Main](https://github.com/correa92/regaleriaVane/blob/main/main.png)

## Dependencias
Para el proyecto se necesitaron las siguientes dependencias:
   - **"@mui/icons-material": "^5.11.0"**, (Iconos de Material UI)
   - **"@mui/material": "^5.11.1"**, (Elementos de Material UI)
   - **"bootstrap": "^5.2.3"**, (Elementos de bootstrap)
   - **"firebase": "^9.16.0"**, (Servicios de firebase)
   - **"luxon": "^3.2.1"**, (Coloca fecha en pie de página)
   - **"react": "^18.2.0"**, (Elementos de React)
   - **"react-bootstrap": "^2.7.0"**, (Elementos específicos de Bootstrap hacia React js)
   - **"react-dom": "^18.2.0"**, (Sirve como punto de entrada al DOM y los procesadores de servidor para React.)
   - **"react-router-dom": "^6.6.2"**, (Contiene enlaces para usar React Router en aplicaciones web)
   - **"react-scripts": "5.0.1"**, (Incluye scripts y configuración utilizados por Create React App)
   - **"react-spinners": "^0.13.7"**, (Colección de spinners de carga )
   - **"sweetalert2": "^11.7.0"**, (Cuadros emergentes con estilos bonitos)
   - **"sweetalert2-react-content": "^5.0.7"**, (Adapta el cuadro emergente a un componente)
   - **"uuid": "^9.0.0"** (Genera un código aleatorio para el ticket ajeno a firebase)

## Instalación

Para acceder al repositorio del proyecto puede hacerlo a través del link [Github](https://github.com/correa92/regaleriaVane.git).
Otra opción es escribir el siguiente comando en la consola de **GIT**. 
```bash
git clone https://github.com/correa92/regaleriaVane.git
```

Una vez clonado el repositorio se deben instalar las dependencias del proyecto. En la terminal del editor elegido se debe ejecutar el siguiente comando para windows.

```bash
npm install
```

Una vez instalado las dependencias necesarias se inicializa el proyecto en el servidor local. Para ello se debe ejecutar el siguiente comando:
 ```bash
npm run start
```

Listo ya puede comenzar a utilizar el sitio web.
## Uso


- Una vez que inicie el sitio web se puede ver el catálogo de productos completos. Luego puede desplegar la lista de categorías donde podrá filtrar los productos si así lo desea.  
- Encontrará otras páginas para navegar en el nav **(Nosotros, Contacto, Carrito)**  
- Una vez que seleccione un producto puede **ver los detalles** de este.
- Encontrara el *precio*, la *descripción*, las *cantidad de cuotas* y el valor de estas. 
- Podrá seleccionar la cantidad de productos que desea comprar, en el caso que no lo convence el producto puede volver a la página principal o ir al carrito.
- En caso que quiera el producto deberá presionar el botón de agregar el producto al carrito.
- Una vez que finalizo la selección de producto en el carrito puede acceder a este para finalizar la compra.
- En el carrito de comprar puede observar los detalles de los productos seleccionados junto con el detalle de su compra, tal como el precio unitario, cantidad de productos y el subtotal de la compra, En caso que no desee un producto puede eliminarlo del carrito o  incluso vaciarlo por completo.
- En caso de aceptar el carrito el siguiente paso es registrar la cuenta (por el momento es una simulación de registro de cuenta)
- Una vez completado los campos podrá ingresar a la cuenta y la cuenta pasará a estar **activa** (Parte superior derecha) 
- Una vez registrada la cuenta se habilitará el botón de comprar
- Si presiona el botón de comprar automáticamente inicia el proceso de compra, el cual se registrará la compra en la base de datos de firebase y entregará el ID de la transacción.
- Luego de la transacción el carrito se vaciará por completo y lo llevara a inicio del sitio web.
- En caso que quiera iniciar una comprar nueva con otro usuario deberá recargar la página. (Por el momento no se realizo una autenticación de usuario).


## Developer
Hola soy Correa Alejandro, desarrollador front-end en React js. 
Pueden encontrar más información de mis trabajos en [Github](https://github.com/correa92)