import faker from "faker";

const mount = (el) =>
{
    let products = '';
    products += '<h2>Product List</h2>';
    products += '<hr/>';
    products += '<ol>';
    for (let i = 0; i < 5; i++)
    {
        const name = faker.commerce.productName();
        products += `<li><div>${name}</div></li>`;
    }
    products += '</ol>';
    //document.querySelector('#dev-products').innerHTML = products;
    el.innerHTML = products;
}


if (process.env.NODE_ENV === 'development')
{
    const el = document.querySelector('#dev-products');
    if (el)
    {
        mount(el);
    }
}

export { mount };