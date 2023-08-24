let tags = document.querySelectorAll(".tagItem");
let tagEnabled = null;
let products   = document.querySelectorAll('.productBox');

console.log(tags[0]);

tags.forEach( (item) =>{
	item.addEventListener('click', ()=>{
		tags.forEach( (disabledItem) =>{
			disabledItem.classList.remove('tagItem__img--checked');
		});

		item.classList.add('tagItem__img--checked');
		tagEnabled = item.classList[1];
		tagEnabled = tagEnabled.replace('tagItem--', '');
		
		if (tagEnabled == "All") {
			showAllTags();
			tags[0].classList.add('tagItem__img--checked');
		}
		else{
			tags[0].classList.remove('tagItem__img--checked');
			showOnlyTag(tagEnabled);
		}

	});
});


function showOnlyTag(showTag){
	let className = "productBox--" + showTag;

	products.forEach( (item) =>{
		if (!(item.classList.contains(className))) {
			item.classList.add("hidden");
		}
		else{
			item.classList.remove("hidden");
		}
	});
}

function showAllTags(){
	products.forEach( (item) =>{
		item.classList.remove("hidden");
	});
}