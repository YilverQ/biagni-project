const shoppingCarts = document.querySelectorAll('.shoppingCartButton');
const iconShoppingCarts = document.querySelectorAll('.fa-cart-shopping');


shoppingCarts.forEach( (item, key) => {
	item.addEventListener('click', ()=>{
		iconShoppingCarts[key].classList.toggle('fa-cart-shopping');
		iconShoppingCarts[key].classList.toggle('fa-circle-check');
		item.classList.toggle('shoppingCartButton--checked')
	});
});