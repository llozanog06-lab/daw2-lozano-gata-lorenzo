# Estructuras
-------------

## Arrays
----------
Los arrays permiten almacenar una colección de datos a los que permite acceder de forma aleatoria

### Creación

Para crear un array en JavaScript basta con escribir: const miArray = ["elemento1", "elemento2", "elemento3"]

### Métodos

| Método | Función | Descripción |
|--------|---------|-------------|
| Array.push() | Añadir un elemento al final | El elemento que se introduce en los parentesis es añadido al final del array |
| Array.length | Conocer la longitud de un array | Su ejecución devuelve el valor numerico correspondiente a la longitud del array |
| Array.splice() | Añadir o eliminar elementos | MiArray.splice(0, 1, "reemplazaLa0"), MiArray.splice(0, 0, "añadeEn0") |
|Array.find() | Obeter el valor almacenado de una posición | Buscamos el valor de la posición del array introducida en los paréntesis |
| Array.filter() |  Obtener un array con todos los elementos que cumplen la condición | La sentencia devuelve un nuevo array con los elementos que cumplen la condición |
| Array.sort() | Ordenar el array | El array se ordena según el numero unicode de cada elemento del array |
| Array.find() | Buscar el elemento que pasa la prueba| MiArray.find(condición) devuelve el elemento del array que cumple la condición |

---------
## Mapas
---------

### Creación

Para crear un mapa en JavaScript debemos ejecutar: const map = new Map()

### Métodos

| Método | Función | Descripción |
|--------|---------|-------------|
| map.clear() | Limpia todos los objetos del mapa | Mimapa.clear() limpia todo el mapa |
| map.delete() | Borra la clave introducida | Mimapa.delete(clave1) Borra la clave 1 |
| map.entries() | Devuelve un objeto mapa modo iterador que contiene [clave, valor]|const iterador = Map.entries() |
| map.get() | Devuelve el valor de la clave introducida | Mimapa.get(clave) devuelve el valor|
| map.has() | Devuelve un booleano en función de si existe o no la clave | Mimapa.has(clave1) devuelve true si clave1 existe |
| map.set() | Añade una nueva entrada al mapa | Mimapa.set(clave2, valor2) |
| map.size() | Devuelve el tamaño del mapa | Mimapa.size() |
| map.values() | Devuelve un iterador con los valores del mapa | const iterador = Map.values() |
| map.keys() | Devuelve un iterador con las claves del mapa | const iterador = Map.keys() |

-------
## Sets
-------

### Creación

Para crear un set en JavaScript debemos ejecutar: const miset = new Set ([elemento1, elemento2, elemento3]).

### Métodos

| Método | Función | Descripción |
|--------|---------|-------------|
| set.add() | Añade un valor al set | miset.add(valor) |
| set.delete() | Borra un valor específico del set | miset.delete(valor) |
| set.has() | Devuelve un booleano en función de si existe o no el valor en el set | miset.has(valor1) devuelve true si existe valor1 |
| set.size() | Devuelve el tamaño del set | miset.size() |
| set.union() | Sirve para unir sets | const miset = new Set ([1, 2, 3])  const miset2 = new Set ([ 4, 5, 6])  miset.union(miset2) = [ 1, 2, 3, 4, 5, 6 ] |
| set.values() | Crea un iterador con los valores del set | const iterador = miset.values() |
