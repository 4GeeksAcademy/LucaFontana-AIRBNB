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

# Descripción de los componentes en /components (AI Generated)

## components/layout

### TopNav

Este componente renderiza la barra de navegación superior compartida por toda la aplicación. Incluye el logo con enlace al inicio, el campo de búsqueda controlado por props, un enlace directo al catálogo y dos botones visuales para idioma y menú de usuario.

- Se importa en `app/page.tsx`.
- Se utiliza en la vista Home para capturar el texto de búsqueda y filtrar alojamientos en tiempo real.
- Se importa en `app/catalog/page.tsx`.
- Se utiliza en la vista Catálogo para buscar por nombre o ciudad dentro del listado.
- Se importa en `app/rooms/[id]/page.tsx`.
- Se utiliza en la vista de detalle de habitación como cabecera global de navegación y búsqueda.

## components/home

### CategoryRow

Este componente muestra una fila horizontal de categorías seleccionables. Recibe la lista de categorías, resalta la categoría activa y dispara `onSelect` cuando el usuario pulsa una opción para filtrar los alojamientos.

- Se importa en `app/page.tsx`.
- Se utiliza únicamente en la vista Home para filtrar los alojamientos por categoría.

## components/shared

### AccommodationCard

Este componente representa la tarjeta visual de un alojamiento. Muestra una portada placeholder, título, ubicación, precio por noche, valoración y un enlace hacia la vista de detalle de la habitación correspondiente.

- Se importa en `app/page.tsx`.
- Se utiliza en la vista Home para renderizar cada alojamiento filtrado.
- Se importa en `app/catalog/page.tsx`.
- Se utiliza en la vista Catálogo para renderizar cada resultado ordenado por precio.

### AccommodationCardSkeleton

Este componente renderiza un placeholder con animación de carga que simula la estructura de una tarjeta de alojamiento mientras los datos aún no están disponibles.

- Se importa en `app/page.tsx`.
- Se utiliza únicamente en la vista Home mientras el estado `loading` sigue activo.

## components/catalog

### CatalogHeader

Este componente muestra la cabecera funcional del catálogo. Enseña el total de resultados disponibles y un selector para cambiar el orden ascendente o descendente según el precio.

- Se importa en `app/catalog/page.tsx`.
- Se utiliza únicamente en la vista Catálogo para mostrar el conteo de resultados y controlar el ordenamiento.

### MapPlaceholder

Este componente renderiza un bloque lateral que actúa como placeholder del mapa. Incluye un título, una breve descripción y un área visual reservada para la futura vista geográfica de alojamientos.

- Se importa en `app/catalog/page.tsx`.
- Se utiliza únicamente en la vista Catálogo, a la derecha del grid en escritorio y debajo del listado en móviles.

## components/room

### PhotoGallery

Este componente implementa la galería de fotos de la habitación. Mantiene con `useState` el índice de la foto activa y permite navegar entre imágenes con los botones Anterior y Siguiente.

- Se importa en `app/rooms/[id]/page.tsx`.
- Se utiliza únicamente en la vista de detalle de habitación para mostrar el carrusel superior de fotos.

### RoomHeader

Este componente muestra la información principal de la habitación: nombre, valoración, número de reseñas, ciudad, país y coordenadas geográficas.

- Se importa en `app/rooms/[id]/page.tsx`.
- Se utiliza únicamente en la vista de detalle de habitación como cabecera informativa del alojamiento.

### HostInfo

Este componente renderiza el bloque de información del anfitrión. Presenta un avatar placeholder, el nombre del anfitrión y los años que lleva hospedando.

- Se importa en `app/rooms/[id]/page.tsx`.
- Se utiliza únicamente en la vista de detalle de habitación para mostrar los datos del anfitrión.

### AmenitiesGrid

Este componente muestra la lista de servicios de la habitación en formato de cuadrícula. Cada servicio aparece como un ítem con un icono de verificación y su etiqueta.

- Se importa en `app/rooms/[id]/page.tsx`.
- Se utiliza únicamente en la vista de detalle de habitación para listar los servicios disponibles.

### ReservationCard

Este componente renderiza la tarjeta de reserva lateral. Muestra el precio por noche, un contador de huéspedes con mínimo y máximo controlados por estado local, y el botón principal de reserva.

- Se importa en `app/rooms/[id]/page.tsx`.
- Se utiliza únicamente en la vista de detalle de habitación como CTA de reserva junto a la información principal del alojamiento.

## Nota

El archivo `components/shared/mockData.ts` también está dentro de `/components`, pero no es un componente visual. Su función es servir datos simulados (`ACCOMMODATIONS` y `CATEGORIES`) para las vistas Home, Catálogo y Detalle de habitación.
