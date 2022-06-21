const submitButton = document.querySelector('.btn-submit');
const serverUrl = 'http://127.0.0.1:1918/api/v1';


submitButton.addEventListener('click', submitQuote);

// ==== Submit Quote Button ====
async function submitQuote() {
  try {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const content = document.getElementById('user-quote').value;

        // ==== create post request ====
      let response = await fetch(`${serverUrl}/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          content: content,
        }),
      });
      response = await response.json();
      console.log(response);
      if (response.code === 201 && response.status === 'success') {
        alert(response.message);
        window.location = '/';
      }
  } catch (error) {
    console.log(error);
  }
   
} 

 