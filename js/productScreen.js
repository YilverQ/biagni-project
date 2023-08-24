let products = document.querySelectorAll(".productBox");
const xMark = document.getElementById('xMark');
let childrenProductBox = null;

products.forEach( (item) =>{
	item.addEventListener('click', ()=>{
		item.classList.add("productBox--screen");
		xMark.classList.remove("xMark--hidden");
		childrenProductBox = item.children;
		childrenProductBox[0].classList.remove("hidden");
		childrenProductBox[1].classList.add("product__img--big");
	});
});

xMark.addEventListener('click', ()=>{
	xMark.classList.add("xMark--hidden");
	products.forEach( (item) =>{
		item.classList.remove('productBox--screen');
		childrenProductBox = item.children;
		childrenProductBox[0].classList.add("hidden");
		childrenProductBox[1].classList.remove("product__img--big");
	})
});