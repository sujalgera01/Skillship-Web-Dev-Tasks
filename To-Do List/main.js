// INCOMPLETE

const input = document.querySelector('input');
const btn = document.querySelector('.input-container > button');

btn.addEventListener('click',add);

function add(e){
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

}	