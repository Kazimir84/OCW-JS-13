let btnDell = document.getElementById('dell');
let productKey = 'product';
let product = JSON.parse(localStorage.getItem(productKey));
let container = document.createElement('DIV');
document.body.append(container);

btnDell.onclick = () => {
    localStorage.removeItem(productKey);
};

product.forEach((prod) => {
    let btn = document.createElement('button');
    btn.innerText = 'Remove Product';
    let prodDiv = document.createElement('DIV');
    prodDiv.className = 'product';
    let card = document.createElement('DIV');
    card.className = 'card';
    card.innerHTML = `Name: ${prod.name} 
                      Count: ${prod.count}шт. 
                      Price: ${prod.price}грн. 
                      <img src="${prod.img}">`;
    prodDiv.append(card, btn);
    container.append(prodDiv);

    btn.onclick = () => {
        prodDiv.remove(card, btn);
    }
})