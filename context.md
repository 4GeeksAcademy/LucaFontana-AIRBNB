# Descripción de las tres páginas

## Página de inicio

La página de inicio debe tener una barra de navegación superior, la cuál cuenta con un logo, campo de búsqueda e íconos del menú de usuario. El campo de búsqueda debe hacer uso de useState para almacenar el input del usuario y que se vayan filtrando las tarjetas visibles en tiempo real a medida que el usuario está ingresando texto. La lista de tarjetas es un estado local por lo que hay que actualizarla cada vez que el usuario escribe.

## Vista de catálogo

La vista de catálogo debe mostrar en su cabecera la cantidad de resultados y un botón para ordenar en ascendente/descendente teniendo en cuenta el precio. Para esto, se utiliza useState para guardar el orden seleccionado por el usuario. A la derecha de las tarjetas debe de haber un componente mapa (como placeholder, que diga “Mapa” ya funciona) por defecto y que en móviles este mapa esté abajo de todas las tarjetas

## Página de detalle de habitación

La página de detalle de habitación utiliza un useEffect para cargar los datos de la habitación cuando el componente se monta, utilizando el ID de la URL. Tiene implementado una galería de fotos en la parte superior con useState para almacenar el índice de la foto actualmente visible y hay dos botones de Anterior / Siguiente para navegar un array de placeholders de fotos. Hay una cabecera de alojamiento con título, valoración con estrellas, número de reseñas y ubicación. Hay una sección de servicios como una cuadrícula de pares ícono + etiqueta. Hay una tarjeta de reserva con precio por noche, contador de huéspedes con useState para manipular la cantidad de huéspedes con un min/max y un botón CTA. Por último, incluye una fila de información del anfitrión con un placeholder de su avatar, su nombre y su cantidad de años como anfitrión.

# Componentes principales de cada página

## Home:

- Componente de la barra de navegación
- Tarjetas para cada apartamento

## Catálogo

- Componente de la barra de navegación
- Tarjetas para cada apartamento
- Mapa
- Cabecera de resultados

## Detalle de habitación

- Componente de la barra de navegación
- Carrusel con galería de fotos
- Sección de servicios
- Tarjeta de reserva

# Párrafo que describa la intención del usuario

```text
Como usuario, quiero poder buscar apartamentos introduciendo información de los mismos en una barra de búsqueda, quiero poder ordenar los resultados según el precio (asc/desc) y poder ver la ubicación de los apartamentos en un mapa. Además, quiero que al seleccionar un apartamento pueda ver toda su información detallada incluyendo servicios disponibles, costo por noche/huéspedes, imágenes del apartamento e información del anfitrión de la casa.
```
