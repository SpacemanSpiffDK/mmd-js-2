// JS by Dan Høegh
// UCN MMD 2018

window.onload = function() {

	// Comments section

	let myCheckbox = document.querySelector('#hasComments');
	let commentSection = document.querySelector('#commentsection');

	myCheckbox.addEventListener('change', function(){
		if (myCheckbox.checked) {
			commentSection.classList.add('visible');
		} else {
			commentSection.classList.remove('visible');
		}
	});

	// submit button

	let acceptTerms = document.querySelector('#acceptTerms');
	let submitBtn = document.querySelector('#submitBtn');

	acceptTerms.addEventListener('change', function(){
		if (acceptTerms.checked) {
			submitBtn.disabled = false;
		} else {
			submitBtn.disabled = true;
		}
	});


	// Select value

	let showLink = document.querySelector('#showLink');

	showLink.addEventListener('click', function(event){
		event.preventDefault();
		let theValue = document.querySelector('#mySelect').value;
		document.querySelector('#selectResult').innerHTML = theValue;
	});
}