// Contact Us Modal =========================

// Open Contact Us Modal
// Get button contact
const contactButton = document.querySelector('a#contact');

// Event to open contact us modal
contactButton.addEventListener('click', function () {
	const modalContact = document.querySelector('#contact-us-modal');
	modalContact.classList.add('modal-container--open');
})

// Close Contact Us Modal
// Get close button
const closeModalButton = document.querySelector('.modal__close-button');

// Event to close contact us modal
closeModalButton.addEventListener('click', function () {
	const modalInstance = document.querySelector('.modal-container--open');
	modalInstance.classList.remove('modal-container--open');
})

// End of Contact Us Modal =====================

// Form ==========================

// Submit form Contact Us
const submitButton = document.querySelector('#contact-us-modal button.button');

submitButton.addEventListener('click', function (e) {
	e.preventDefault();
	// Do whatever you need todo to the form submision.
	// Ex : serialize, setup ajax, etc
	// Code here ....


	// Start animation
	const stateInfo = document.querySelector('#contact-us-modal .loading-state');
	stateInfo.classList.add('loading-state__show');

	// Need to wait envelope animation to finish.
	setTimeout(function() {
		const envelope = document.querySelector('#contact-us-modal .loading-state svg.envelope');
		envelope.classList.add('envelope--fly')
	},500)
	
	// Showing Message Success
	setTimeout(function() {
		const envelope = document.querySelector('#contact-us-modal .loading-state svg.envelope');
		envelope.style.display= "none";

		// Change message status
		const stateInfo = document.querySelector('.state__info.loading-state__info--loading');
		stateInfo.classList.add('loading-state__info--success');
		
		//show success illustration
		const successIllustration = document.querySelector('.success-illustration');
		successIllustration.classList.add('success-illustration--show');
	},5800)
})
