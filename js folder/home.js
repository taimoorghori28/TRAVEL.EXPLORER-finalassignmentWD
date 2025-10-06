// CITY NAMES AND IMAGES PATHS AS ARRAYS IN  HTML,BS AND JS  ALSO
const cities = [
  { name: "Karachi", image: "images/karachi.jpg" },
  { name: "Lahore", image: "images/lahore.jpg" },
  { name: "Islamabad", image: "images/islamabad.jpg" },
  { name: "Multan", image: "images/multan.jpg" },
  { name: "Muree", image: "images/muree.jpg" },
  { name: "Faisalabad", image: "images/faisalabad.jpg" },
  { name: "Peshawar", image: "images/peshawar.jpg" },
  { name: "Quetta", image: "images/quetta.jpg" },
  { name: "Gilgit", image: "images/gilgit.jpg" }
];//END OF CITIES IMAGES ARRAY

// SHOW CITIES AS CARDS
function renderCities() {
  const container = document.getElementById('citiesContainer'); 
  if (!container) return; //STOP IF CITY CONTAINER NOT FOUND

  container.innerHTML = ''; // clear old cards

  //MAKING CARDS FOR EACH CITY
  cities.forEach(city => {
    const div = document.createElement('div'); 
    div.className = 'col-md-4 mb-3';//USES BS

    //ADD CITY CARD HTML USING BOOTSTRAP
    div.innerHTML = `
      <div class="card">
        <a href="${city.image}" target="_blank" rel="noopener">
          <img src="${city.image}" class="card-img-top" alt="${city.name}">
        </a>
        <div class="card-body text-center">
          <h5 class="card-title">${city.name}</h5>
        </div>
      </div>
    `;

    container.appendChild(div); // add card to container
  });
}
//FINALLY RUNS 
document.addEventListener('DOMContentLoaded', renderCities);
