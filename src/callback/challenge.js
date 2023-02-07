const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//llamado a nuestra API
const API = 'https://api.escuelajs.co/api/v1';

/**
 * Se crea una función la cual nos va a permitir a nosotros recibir la Url en este caso la API
 * que tenemos y el callback que será una función anónima para recibir la solicitud que nos 
 * esté entregando el llamado a esta API.
 */
function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    /*
     * Hacemos un open para abrir una conexión en este caso a nuestra API 
     * Por lo tanto en los argumentos que va a recibir el primer elemento sería el tipo de petición
     * que vamos a hacer ---> GET | el segundo elemento será la url que va a utilizar --> urlApi
     * y  después vamos a pasar el valor de true para habilitarlo; con esto ya tenemos un primer recurso*/
    xhttp.open('GET', urlApi, true);

    /**
     * Vamos a volver a utilizar xhttp con onreadystatechange, en este caso es partede los elementos 
     * que me entrega el recurso de XMLHttpRequest para escuchar diferentes estados que tiene 
     * la solicitud y con esto saber si está disponible la información*/
    xhttp.onreadystatechange = function(event) {
        if(xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            }else {
                const error = new Error('Error' + urlApi);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

/**
 * se invoca el metodo fetchData() pasandole como argumentos la varible API 
 * concatenada con la cadena 'products' para acceder a la URL de la API deseada, 
 * y una función anónima que recibe 2 parámetros 
 * (un objeto de error y un arreglo que almacena todos los objetos traidos por la API).
 */
fetchData(`${API}/products`, function(error1, data1) {
    //se valida si existe un error, en caso de que exista se detiene el proceso y se imprime el error
    if(error1) return console.error(error1);

    /**
     * se invoca nuevamente la funorción fetchData con el fin 
     * de acceder a un objeto puntual del arreglo data1, se envia como parámetros 
     * la url de la API apuntando al atributo del primer objeto de arreglo data1 y 
     * nuevamente una función anónima.
     */
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
        if(error2) return console.error(error2);   
        
        /**
         * Se invoca nuevamente la funcion fetchData con el fin de acceder a la categoria, se envían 
         * como parametros la url de la API con la concatenación de 'Categories' y el atributo Id de categoria 
         * del objeto data2 de la función anterior en este caso puntual se hace uso de Optional Caining 
         * el cual hace una evalucación de las propiedades de un objeto y en vez de arrojar un error 
         * devuelve undefined en caso que la propiedad no exista o sea null. 
         * igual que las anteriores e envia una funcion anonima con 2 argumentos, 
         * un objeto Error y un objeto de datos
         */
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
            if(error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            //Se imprime el nombre de la categoria a la que pertenece el objeto que se consultó en la seguna invocación del método.
            console.log(data3.name);
        });
    });
});
