// JS by Dan Høegh
// UCN MMD 2021


// Comments section

const myCheckbox = document.querySelector('#hasComments');
const commentSection = document.querySelector('#commentsection');

myCheckbox.addEventListener('change', function(){
	if (myCheckbox.checked) {
		commentSection.classList.add('visible');
	} else {
		commentSection.classList.remove('visible');
	}
});

// submit button

const acceptTerms = document.querySelector('#acceptTerms');
const submitBtn = document.querySelector('#submitBtn');

acceptTerms.addEventListener('change', function(){
	if (acceptTerms.checked) {
		submitBtn.disabled = false;
	} else {
		submitBtn.disabled = true;
	}
});


// Select value

const showLink = document.querySelector('#showLink');

showLink.addEventListener('click', function(event){
	event.preventDefault();
	const theValue = document.querySelector('#mySelect').value;
	document.querySelector('#selectResult').innerHTML = theValue;
});


// select do something to all input elements

const inputs = document.querySelectorAll('input');

for (var i = 0; i < inputs.length; i++) {
	inputs[i].classList.add('dark');	
}
	