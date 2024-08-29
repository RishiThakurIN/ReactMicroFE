import { mount as productMount } from 'productsApp/ProductsIndex';
import { mount as cartMount } from 'cartApp/CartIndex';

console.log('container')

productMount(document.querySelector('#dev-products-place'));
cartMount(document.querySelector('#dev-cart-place'))