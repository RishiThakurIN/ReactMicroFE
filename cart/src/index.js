import faker from "faker";
let content = "";
content += "<h3>Cart</h3><hr/>";
content += `<p>You have ${faker.random.number()} products in your cart.</p>`

document.querySelector("#dev-cart").innerHTML = content;