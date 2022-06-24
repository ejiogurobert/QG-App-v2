const categorySelect = document.getElementById("category");
const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
const spinner = document.querySelector(".spinner");
const generateBtn = document.querySelector(".btn-generate");
const displayBox = document.querySelector(".generated-quote_section");
const body = document.querySelector("body");
const dropdown = document.querySelector(".dropdown");
const cancelButton = document.querySelector('.exit-container');
const serverUrl = 'http://127.0.0.1:1918/api/v1';
const share = document.querySelector('.share');

let selectedOption;

categorySelect.addEventListener("click", quoteOptions);
generateBtn.addEventListener("click", showDisplay);
cancelButton.addEventListener('click', cancel);


function quoteOptions(e) {
  selectedOption = e.target.value;
}

// ==== When Trump category is selected ====
async function showDisplay() {
  if (!selectedOption) {
    alert("You need to select a category");
    return;
  }

  console.log(selectedOption);

  if (selectedOption === "trump") {
    //    Fetching Random Trump Quote
    spinner.classList.remove('hidden');
    // spinner.style.color = 'white';
    try {
      const response = await fetch(endpoint);
      if (response.status === 200) {
        const json = await response.json();
        console.log(json);
        displayTrumpQuote(json);
        const facebook = document.querySelector('#fb');
        const linkedin = document.querySelector('#li');
        const twitter = document.querySelector('#tw');
        console.log('facebook', facebook.data);
        facebook.dataText = json.message;
      }  
    } catch (error) {
      console.log(error);
      alert("Failed to fetch new quote");
      spinner.classList.add('hidden')
    }
  }

  if (selectedOption === "users") {
    //    Fetching Random Users Quote
    spinner.classList.remove('hidden');
    // spinner.style.color = 'white';
    try {
      const response = await fetch(`${serverUrl}/random-quote`);
      if (response.status === 200) {
        const json = await response.json();
        console.log(json);
        displayUsersQuote(json);
      }  
    } catch (error) {
      console.log(error);
      alert("Failed to fetch new quote");
      spinner.classList.add('hidden')
    }
  }


};


// ==== Displaying Trump Quote on the page ====
function displayTrumpQuote(data) {
  const quoteText = document.querySelector("#js-quote-text");
  quoteText.innerHTML = `<p id="quoteContent">${data.message}</p>`;
   displayBox.style.display = 'block';
   body.style.background = 'rgba(0, 0, 0, 0.5)';
   dropdown.style.background = 'rgba(0, 0, 0, 0)';
   dropdown.style.border = '2px solid rgba(0, 0, 0, 0.2)';
   dropdown.style.boxShadow = 'none';
   spinner.classList.add('hidden')
};


// ==== Displaying Users Quote on the page ====
function displayUsersQuote(data) {
  const quoteText = document.querySelector("#js-quote-text");
  quoteText.innerHTML = `<p id="quoteContent">${data.data.content}</p>`;
   displayBox.style.display = 'block';
   body.style.background = 'rgba(0, 0, 0, 0.5)';
   dropdown.style.background = 'rgba(0, 0, 0, 0)';
   dropdown.style.border = '2px solid rgba(0, 0, 0, 0.2)';
   dropdown.style.boxShadow = 'none';
   spinner.classList.add('hidden')
};

// ==== Remove Display Button ==== 
function cancel() {
    displayBox.style.display = 'none';
    body.style.background = 'white'
    dropdown.style.background = 'white'
}

async function copyText () {
  const quoteText = document.querySelector("#quoteContent").innerHTML;
  await navigator.clipboard.writeText(quoteText);
  alert('Copied to clipboard successfully!');
}



