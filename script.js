let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const saveInputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
let ulEl = document.getElementById("ul-el");

saveInputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});
for (let i = 0; i < myLeads.length; i++) {
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
}
