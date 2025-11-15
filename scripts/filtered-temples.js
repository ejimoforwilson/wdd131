// -------------------------------
// ARRAY OF TEMPLE OBJECTS
// -------------------------------
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  // ---------------------------
  // YOUR 3 ADDITIONAL TEMPLES
  // ---------------------------
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana/accra-ghana-temple-lds-144857-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 12",
    area: 40000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy/rome-italy-temple-lds-2082929-wallpaper.jpg"
  },
{
  templeName: "Johannesburg South Africa",
  location: "Johannesburg, South Africa",
  dedicated: "1985, August, 24",
  area: 19350,
  imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-1028008-wallpaper.jpg"
},
{
  templeName: "Paris France",
  location: "Le Chesnay, France",
  dedicated: "2017, May, 21",
  area: 44175,
  imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-1833697.jpg"
},
{
  templeName: "Hong Kong China",
  location: "Hong Kong, China",
  dedicated: "1996, May, 26",
  area: 51921,
  imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/400x250/hong-kong-lds-temple-1077063-wallpaper.jpg"
}

]

// -----------------------------------------------
// FUNCTION TO DISPLAY TEMPLES
// -----------------------------------------------
function displayTemples(list) {
  const container = document.querySelector("#temple-container");
  container.innerHTML = ""; // clear previous results

  list.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} sq ft</p>
      <img loading="lazy" src="${temple.imageUrl}" alt="${temple.templeName}">
    `;

    container.appendChild(card);
  });
}

// Display all temples on load
displayTemples(temples);

// -----------------------------------------------
// FILTER BUTTONS
// -----------------------------------------------
document.querySelector("#home").addEventListener("click", () => displayTemples(temples));
document.querySelector("#old").addEventListener("click", () =>
  displayTemples(temples.filter(t => parseInt(t.dedicated) < 1900))
);
document.querySelector("#new").addEventListener("click", () =>
  displayTemples(temples.filter(t => parseInt(t.dedicated) > 2000))
);
document.querySelector("#large").addEventListener("click", () =>
  displayTemples(temples.filter(t => t.area > 90000))
);
document.querySelector("#small").addEventListener("click", () =>
  displayTemples(temples.filter(t => t.area < 10000))
);

// -----------------------------------------------
// FOOTER DATE + LAST MODIFIED
// -----------------------------------------------
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#modified").textContent = document.lastModified;
