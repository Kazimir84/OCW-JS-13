let btnDell = document.getElementById('dell');
let productKey = 'product';
let product = JSON.parse(localStorage.getItem(productKey));
let container = document.createElement('div');
document.body.append(container);

btnDell.onclick = () => {
    localStorage.removeItem(productKey);
};

product.forEach((prod) => {
    let btn = document.createElement('button');
    btn.innerText = 'Remove Product';
    let prodDiv = document.createElement('div');
    prodDiv.className = 'product';
    let card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `Name: ${prod.name} 
                      Count: ${prod.count}шт. 
                      Price: ${prod.price}грн. 
                      <img src="${prod.img}" alt="logo">`;
    prodDiv.append(card, btn);
    container.append(prodDiv);

    btn.onclick = (e) => {
        let ident = prod.name
        for (let i = 0; i < product.length; i++) {
            let productElement = product[i];
            if (productElement.name === ident) {
                product.splice(i,1);
                localStorage.product = JSON.stringify(product);
            };
        };
        prodDiv.remove(card, btn);
    };
});
