
let destinations = JSON.parse(localStorage.getItem("destinations")) || [];

function renderDestinations(list = destinations) {
  const container = document.getElementById("destinationList");
  container.innerHTML = "";
  list.forEach((dest, index) => {
    container.innerHTML += `
      <div class="col-md-4 mb-3">
        <div class="card">
          <img src="${dest.image}" class="card-img-top" alt="${dest.name}">
          <div class="card-body text-center">
            <h5 class="card-title">${dest.name}</h5>
            <button class="btn btn-orange btn-sm me-2" onclick="editDestination(${index})">Edit</button>
            <button class="btn btn-dark btn-sm" onclick="deleteDestination(${index})">Delete</button>
          </div>
        </div>
      </div>
    `;
  });
}

// Add new destination from dropdown
function addDestination() {
  const select = document.getElementById("citySelect");
  const cityName = select.options[select.selectedIndex].text;
  const cityImage = select.value;

  if(cityName && cityImage){
    destinations.push({name: cityName, image: cityImage});
    localStorage.setItem("destinations", JSON.stringify(destinations));
    select.selectedIndex = 0; // reset dropdown
    renderDestinations();
  } else {
    alert("Please select a city!");
  }
}

// Edit destination
function editDestination(index) {
  const newName = prompt("Enter new destination name:", destinations[index].name);
  const newImage = prompt("Enter new image URL:", destinations[index].image);
  if(newName && newImage){
    destinations[index] = {name: newName, image: newImage};
    localStorage.setItem("destinations", JSON.stringify(destinations));
    renderDestinations();
  }
}

// Delete destination
function deleteDestination(index) {
  if(confirm("Are you sure you want to delete this destination?")){
    destinations.splice(index, 1);
    localStorage.setItem("destinations", JSON.stringify(destinations));
    renderDestinations();
  }
}

// Search destinations
function searchDestinations() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = destinations.filter(dest => dest.name.toLowerCase().includes(query));
  renderDestinations(filtered);
}

// Initial render
renderDestinations();