let myLeads = [];

const saveInputBtn = document.getElementById("input-btn");
let inputEl = document.getElementById("input-el");
let ulEl = document.getElementById("ul-el");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

saveInputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
  console.log(localStorage.getItem("myLeads"));
});

function renderLeads() {
  let listItems = "";

  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
    `;
  }

  ulEl.innerHTML = listItems;
}
