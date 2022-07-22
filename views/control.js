const section = document.querySelector("#section");
const serverUrl = "http://127.0.0.1:2209/api/v1";

// ==== Fetching All Quotes ====
async function getQuotes() {
  try {
    const response = await fetch(`${serverUrl}/quote`);
    if (response.status === 200) {
      const json = await response.json();
      displayAllQuotes(json.data);
    }
  } catch (error) {
    console.log(error);
    alert("Failed to fetch all quote");
  }
}

function displayAllQuotes(data) {
  if (data.length === 0) {
    section.innerHTML = "<p>No Quote Created</p>";
  }
  data.forEach((element) => {
    section.innerHTML += `
        <div class="user-1">
        <div class="user-1_first">
        <div>${element.first_name} ${element.last_name}</div>
        <div>${element.content}</div>
    </div>
    <div class="user-1_second">
        <button id="${element.id}" onclick="updateQuoteStatus('approved', this)">Approve</button>
        <button id="${element.id}" onclick="updateQuoteStatus('declined', this)">Decline</button>
        </div></div>
        `;
  });
}

getQuotes();

async function updateQuoteStatus(status, element) {
  try {
    let response = await fetch(`${serverUrl}/quote/${element.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status,
      }),
    });

    response = await response.json();

    if (response.code === 200 && response.status === "success") {
      alert(response.message);
      window.location.reload();
    }
  } catch (error) {
    console.log(error);
  }
}
