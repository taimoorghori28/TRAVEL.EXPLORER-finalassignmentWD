//FOLOWWING LINES CONNECT JS TO HTML BUTTONS
const destListEl = document.getElementById("destinationList");
const citySelect = document.getElementById("citySelect");
const addBtn = document.getElementById("addBtn");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const customTitle = document.getElementById("customTitle");//END OF BUTTONS

//SAVES DESTINATIONS TO LOCAL STORAGE
const getDestinations = () => JSON.parse(localStorage.getItem("destinations")) || [];             
const saveDestinations = (list) => localStorage.setItem("destinations", JSON.stringify(list));   //END OF LOCAL STORAGE 


//USED FOR DESTINATION CARDS USING HTML,BS
function renderDestinations(list) {
  destListEl.innerHTML = list.length
    ? list.map((d, i) => `
      <div class="col-md-4">
        <div class="card mb-3 shadow-sm">
         <img src="${d.image}" class="card-img-top" alt="${d.name}">
                  <div class="card-body text-center">
            <h5 class="card-title">${d.name}</h5>
    <div class="d-flex justify-content-center gap-2">
        <button class="btn btn-orange btn-sm" onclick="editDestination(${i})">Edit</button>
                      <button class="btn btn-dark btn-sm" onclick="deleteDestination(${i})">Delete</button>
            </div>
                  </div>
     </div>
      </div>
    `).join("")
    : '<div class="col-12 text-center text-muted">No destinations yet.</div>'}//END OF DESTINATIONS CARDS


    // ADDS DESTINATIONS AS CRUDS
function addDestination() {
  const image = citySelect.value;
  if (!image) return alert("Select a city first!");

  const name = customTitle.value.trim() || citySelect.options[citySelect.selectedIndex].text;
  const list = [...getDestinations(), { name, image }];
  saveDestinations(list);
  customTitle.value = "";
  citySelect.selectedIndex = 0;
  renderDestinations(list);
} //ENDS ADDING DESTINATIONS

//DELETES DESTINATIONS AS CRUDS
function deleteDestination(i) {
  if (!confirm("Delete this destination?")) return;
  const list = getDestinations();
  list.splice(i, 1);
  saveDestinations(list);
  renderDestinations(list);
} //END OF DELETIION

//EDITS DESTIONATIONS AS CRUDS
function editDestination(i) {
  const list = getDestinations();
  const item = list[i];
  const newName = prompt("Enter new name:", item.name);
  const newImage = prompt("Enter new image path:", item.image);
  if (newName && newImage) {
    list[i] = { name: newName, image: newImage };
    saveDestinations(list);
    renderDestinations(list);
  }
}//END OF EDITING



// Run functions after page loads and handle button actions
document.addEventListener("DOMContentLoaded", () => {
  renderDestinations(getDestinations());
  addBtn.onclick = addDestination;
  searchBtn.onclick = searchDestinations;
  searchInput.onkeydown = (e) => e.key === "Enter" && searchDestinations();
});//END OF PAGE LOAD FUNCTIONS
// THIS WHOLE PAGE CONTAINS CRUD OPERATIONS FOR DESTINATIONS PAGE AND SAVES IT TO LOCAL STORAGE //THE END