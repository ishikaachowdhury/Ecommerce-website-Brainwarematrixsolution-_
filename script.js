const cartLink = document.querySelector('.cart-link');
const cartCount = 0;

cartLink.addEventListener('click', () => {
    alert(`You have ${cartCount} items in your cart.`);
});

const addToCartButtons = document.querySelectorAll('.btn');

addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        cartCount++;
        cartLink.textContent = `Cart (${cartCount})`;
    });
});