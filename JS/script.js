"use strict"

document.addEventListener('DOMContentLoaded', function(){
const form__login=document.getElementById('Form__login');
form__login.addEventListener('submit',formSend);
async function formSend (e){
	e.preventDefault();
	let error=formValidate(form__login);
}
function formValidate(form__login){
let error=0;
let form__req=document.querySelectorAll('._req');
for (let index =0;index< form__req.length; index++) {
	const input=form__req[index];
	input.classList.remove('_error');
		if (input.value === '') {
			formAddError(input);
			error++;
		}
	
}
}
function formAddError(input){
	input.parentElement.classList.add('_error');
	input.classList.add('_error');
}
function formRemoveError(input){
	input.parentElement.classList.remove('_error');
	input.classList.remove('_error');
}
});


document.addEventListener('DOMContentLoaded', function(){
	const form__register=document.getElementById('form__register');
	form__register.addEventListener('submit',formSend);
	async function formSend (e){
		e.preventDefault();
		let error=formValidate(form__register);
	}
	function formValidate(form__register){
	let error=0;
	let form__reqr=document.querySelectorAll('._reqr');
	for (let index =0;index< form__reqr.length; index++) {
		const input=form__reqr[index];
		input.classList.remove('_error');
			if (input.value === '') {
				formAddError(input);
				error++;
			}
		
	}
	}
	function formAddError(input){
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input){
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	});