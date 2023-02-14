import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1/';

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

//función que se encarga de hacer la solicitud a todos los productos a un producto en particular
//y a la categoría de este producto para luego mostrarlos en consola
const anotherFunction = async(urlApi) => {
    try {
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        
        console.log(products);
        console.log(product.title);
        console.log(product.name);

    }catch (error) {
        console.error(error);
    }
}

anotherFunction(API);