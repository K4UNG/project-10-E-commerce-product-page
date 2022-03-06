const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu-close');
const nav = document.querySelector('nav');
const filter = document.querySelector('.filter');
const back = document.querySelector('.previous');
const next = document.querySelector('.next');
let photo = document.querySelector('.photo');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
let quantity = document.querySelector('.quantity');
const cart = document.querySelector('.cart');
let popup = document.querySelector('.popup');

menu.onclick = () => {
    nav.classList.add('shown');
    filter.style.opacity = 1;
    filter.style['pointer-events'] = 'all';
}

menuClose.onclick = () => {
    nav.classList.remove('shown');
    filter.style.opacity = 0;
    filter.style['pointer-events'] = 'none';
}

back.onclick = () => {
    let left = back.dataset.dest;
    let right = next.dataset.dest;

    left--;
    right--;

    left = (left == 0 ? 4 : left);
    right = (right == 0 ? 4 : right);
    photo.setAttribute('src', `images/image-product-${back.dataset.dest}.jpg`);

    back.setAttribute('data-dest', left);
    next.setAttribute('data-dest', right);
}

next.onclick = () => {
    let left = back.dataset.dest;
    let right = next.dataset.dest;

    left++;
    right++;

    left = (left == 5 ? 1 : left);
    right = (right == 5 ? 1 : right);
    photo.setAttribute('src', `images/image-product-${next.dataset.dest}.jpg`);

    back.setAttribute('data-dest', left);
    next.setAttribute('data-dest', right);
}

minus.onclick =  () => {
    let amount = quantity.textContent;
    if (amount != 0) {
        amount--;
        quantity.textContent = amount;
    }
}

plus.onclick = () => {
    let amount = quantity.textContent;
    amount++;
    quantity.textContent = amount;
}

cart.onclick = () => {
    cart.classList.toggle('active');
    popup.classList.toggle('popup-shown');
}