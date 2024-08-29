import faker from "faker";


const mount = (el) =>
{
    let content = "";
    content += "<h3>Cart</h3><hr/>";
    content += `<p>You have ${faker.random.number()} products in your cart.</p>`

    //document.querySelector("#dev-cart").innerHTML = content;
    el.innerHTML = content;
}

if (process.env.NODE_ENV === 'development')
{
    const el = document.querySelector("#dev-cart");
    if (el)
    {
        mount(el);
    }
}

export { mount };