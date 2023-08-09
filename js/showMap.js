const showMapBtn = document.getElementById('showMapBtn');
const mapDiv = document.getElementById('map');

const properties = [
    {
        name: "Hotel 1",
        price: "1000"
    },
    {
        name: "Hotel 2",
        price: "1200"
    },
    {
        name: "Hotel 3",
        price: "1400"
    },
    {
        name: "Hotel 4",
        price: "1700"
    },
    {
        name: "Hotel 5",
        price: "2000"
    },
    {
        name: "Hotel 6",
        price: "2100"
    },
    {
        name: "Hotel 7",
        price: "2400"
    },
    {
        name: "Hotel 8",
        price: "2600"
    },
    {
        name: "Hotel 9",
        price: "3000"
    },
    {
        name: "Hotel 10",
        price: "3300"
    },
    {
        name: "Hotel 11",
        price: "3500"
    },
    {
        name: "Hotel 12",
        price: "3600"
    },
    {
        name: "Hotel 13",
        price: "3800"
    },
    {
        name: "Hotel 14",
        price: "4000"
    },
    {
        name: "Hotel 15",
        price: "4200"
    }
];

function getRandomValue(inputValue, range) {
    var lowerBound = inputValue - (range / 2);
    var upperBound = inputValue + (range / 2);

    var randomValue = inputValue;
    while (randomValue === inputValue) {
      randomValue = Math.random() * (upperBound - lowerBound) + lowerBound;
      randomValue = parseFloat(randomValue.toFixed(5)); 
    }
  
    return randomValue;
}

showMapBtn.addEventListener("click", function (e) {
    if (search.value.trim() === '' || checkIn.value.trim() === '' || checkOut.value.trim() === '' || guests.value.trim() === '' || priceRange.value.trim() === '') {
        alert("Please provide neccessary informations!")
    } else {
        var map = null;
        if (map === null) {
            console.log('hello');
            mapDiv.classList.add('absolute', 'top-0', 'left-0');
            mapDiv.classList.remove('hidden');
            fetch('./data/city.json')
            .then((response) => response.json())
            .then((data) => {
                const cities = data.cities;
                const singleCity = cities.find(el => el.name === search.value);
                const min = parseInt(priceRange.value.split(" - ")[0]);
                const max = parseInt(priceRange.value.split(" - ")[1]);

                map = L.map('map').setView([singleCity.latitude, singleCity.longitude], 16);

                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                var listBtn = L.control({
                    position: 'bottomright'
                });

                listBtn.onAdd = function () {
                    const div = L.DomUtil.create('div');
                    div.innerHTML = '<button class="bg-black text-white px-4 h-9 rounded-full flex items-center gap-2">Show List <i class="fi fi-rr-list flex items-center"></i></button>';
                    div.firstChild.addEventListener("click", function () {
                        mapDiv.classList.add('hidden');
                        showMapBtn.classList.remove('hidden');
                    });
                    return div;
                }

                listBtn.addTo(map);

                properties.filter(el => el.price <= max && el.price >= min).forEach((property) => {
                    var customIcon = L.divIcon({
                        className: 'custom-icon',
                        html: `<div class="custom-marker w-14 py-0.5 bg-white text-black text-center font-semibold rounded-full">$${property.price}</div>`
                    });
                    const marker = L.marker(getRandomLatLng(), { icon: customIcon }).addTo(map);
                    marker.bindPopup(`<strong>${property.name}</strong><br>Price: $${property.price}`);
                    // marker.bindTooltip(`<strong>${property.name}</strong><br>Price: $${property.price}`);
                });

                function getRandomLatLng() {
                    var lat = getRandomValue(singleCity.latitude, 0.00600);
                    var lng = getRandomValue(singleCity.longitude, 0.01500);
                    return [lat, lng];
                }

                showMapBtn.classList.add('hidden');
            });
        } else {
            map.remove();
            map = null;
        }
    }
});