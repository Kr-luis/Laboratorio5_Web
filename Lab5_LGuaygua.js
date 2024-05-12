// Asincronismo
const url = 'https://dog.ceo/api/breeds/image/random';

async function obtenerDatos() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('La solicitud no fue exitosa.');
        }
        
        const datos = await response.json();
        console.log('Datos obtenidos:', datos);
    } catch (error) {
        console.error('Error al obtener los datos:', error.message);
    }
}

obtenerDatos();


