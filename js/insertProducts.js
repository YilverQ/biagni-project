import products from "./data.js";

const boxProducts = document.querySelector('.boxProducts');
products.forEach( (item, key) => {
	//Creamos un elemento product. 
	let div_product = document.createElement('DIV');
	div_product.classList.add('product');

	//Elementos ocultos.
	let div_heart = document.createElement('DIV');
	div_heart.classList.add('heart');
	let i_fa_heart = document.createElement('I');
	i_fa_heart.classList.add('fa-regular');
	i_fa_heart.classList.add('fa-heart');


	let img_product__img = document.createElement('IMG');
	img_product__img.classList.add('product__img');
	img_product__img.src = products[key].img;

	let h2_product__title = document.createElement('H2');
	h2_product__title.classList.add('product__title');
	h2_product__title.innerHTML = products[key].title;

	let b_product__price = document.createElement('B');
	b_product__price.classList.add('product__price');
	b_product__price.innerHTML = products[key].price + '$';

	let span_shoppingCartButton = document.createElement('SPAN');
	span_shoppingCartButton.classList.add('shoppingCartButton');

	let i_fa_shoppingCartButton = document.createElement('I');
	i_fa_shoppingCartButton.classList.add('fa-solid');
	i_fa_shoppingCartButton.classList.add('fa-cart-shopping');


	//Anidamos los elementos HTML
	span_shoppingCartButton.appendChild(i_fa_shoppingCartButton);
	div_heart.appendChild(i_fa_heart);

	div_product.appendChild(div_heart);
	div_product.appendChild(img_product__img);
	div_product.appendChild(h2_product__title);
	div_product.appendChild(b_product__price);
	div_product.appendChild(span_shoppingCartButton);

	boxProducts.appendChild(div_product)
});