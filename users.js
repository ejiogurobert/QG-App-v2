const submitButton = document.querySelector('.btn-submit');


submitButton.addEventListener('click', submitQuote);

// ==== Submit Quote Button ====
function submitQuote() {
  const firstName = document.getElementById('first-name').value;
const lastName = document.getElementById('last-name').value;
const content = document.getElementById('user-quote').value;
    console.log( firstName, lastName, content);
  } 