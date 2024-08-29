import faker from "faker";

let products = '';
products+='<h2>Product List</h2>';
products+='<hr/>';
products+='<ol>';
for (let i = 0; i <5; i++)
{
    const name = faker.commerce.productName();
    products += `<li><div>${name}</div></li>`;
}
products+='</ol>';
document.querySelector('#dev-products').innerHTML = products;