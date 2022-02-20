// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let formProd = document.forms[0];
let btn = document.getElementById('btn');
let productKey = 'product';
localStorage.setItem(productKey, JSON.stringify([]));

btn.onclick = () => {
    let inputName = formProd[0].value;
    let inputPrice = +formProd[2].value;
    let inputCount = +formProd[1].value;
    let img = formProd[3].value;
    let prod = {
        name: inputName,
        price: inputPrice,
        count: inputCount,
        img: img,
    };
    let product = JSON.parse(localStorage.getItem(productKey));
    product.push(prod);
    localStorage.setItem(productKey, JSON.stringify(product));
};
