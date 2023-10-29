const products = document.querySelectorAll('.product');
const hearts = document.querySelectorAll('.heart');


function changeColorHeart(heart) {
	heart.classList.toggle('hearted')
}


products.forEach( (product, key) => {
	product.addEventListener('dblclick', () => {
		changeColorHeart(hearts[key])
	});
});
hearts.forEach( (heart, key) =>{
	heart.addEventListener('click', ()=>{
		changeColorHeart(heart);
	});
});