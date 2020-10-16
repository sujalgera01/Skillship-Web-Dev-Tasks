const input = document.querySelector('input');
const inputcontainer = document.querySelector('.input-container > button');

inputcontainer.addEventListener('click',addList);
input.addEventListener('keyup',(e)=>{
	(e.keyCode === 13 ? addList(e) : null);
})

function addList(e){
	const incomplete = document.querySelector('.incomplete');
	const Complete = document.querySelector('.Complete');

	const newLi = document.createElement('li');
	const checkbtn = document.createElement('button');
	const delbtn = document.createElement('button');

	checkbtn.innerHTML = '<i class="fas fa-check">';
	delbtn.innerHTML = '<i class="fas fa-trash">';

	if(input.value !== ''){
		newLi.textContent = input.value;
		input.value = '';
		newLi.appendChild(newLi);
		newLi.appendChild(checkbtn);
		newLi.appendChild(delbtn);
	}

	checkbtn.addEventListener('click',function(){
		const parent = this.parentNode;
		parent.remove();
		Complete.appendChild(parent);
		checkbtn.style.display = 'none';
	});

	delbtn.addEventListener('click',function(){
		const parent = this.parentNode;
		parent.remove();
	});

}	