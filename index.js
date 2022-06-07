const categorySelect = document.getElementById("category");
const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
const spinner = document.querySelector(".spinner");
const generateBtn = document.querySelector(".btn-generate");
const displayBox = document.querySelector(".generated-quote_section");
const cancelButton = document.querySelector('.exit-container');
let selectedOption;

categorySelect.addEventListener("click", quoteOptions);
generateBtn.addEventListener("click", showDisplay);
cancelButton.addEventListener('click', cancel)

function quoteOptions(e) {
  selectedOption = e.target.value;
}

async function showDisplay(e) {
  if (!selectedOption) {
    alert("You need to select a category");
    return;
  }

  console.log(selectedOption);

  if (selectedOption === "trump") {
    //    Fetching Random Trump Quote
    spinner.classList.remove('hidden')
    try {
      const response = await fetch(endpoint);
      if (response.status === 200) {
        const json = await response.json();
        console.log(json);
        displayTrumpQuote(json);
      }  
    } catch (error) {
      console.log(error);
      alert("Failed to fetch new quote");
      spinner.classList.add('hidden')
    }
  }
}

// Displaying Trump Quote on the page
function displayTrumpQuote(data) {
  const quoteText = document.querySelector("#js-quote-text");
  quoteText.innerHTML = `<p>${data.message}</p>`;
   displayBox.style.display = 'block';
   spinner.classList.add('hidden')
}

// Remove Display Button 
function cancel(params) {
    displayBox.style.display = 'none'
}