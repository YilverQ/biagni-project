const tags = document.querySelectorAll('.tag');


tags.forEach( (tag, key) =>{
	tag.addEventListener('click', ()=>{
		tags.forEach( (item) =>{
			item.classList.remove('tag--selected');
		});
		tag.classList.toggle('tag--selected');
	});
});

