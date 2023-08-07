const searchInput = document.getElementById('search');
const cityList = document.getElementById('cityList');

fetch('./data/city.json')
.then((response) => response.json())
.then((data) => {
    const cities = data.cities;
    
    searchInput.addEventListener('input', function () {
        const inputText = this.value.trim().toLowerCase();

        if (inputText.length >= 3) {
            const filteredCities = cities.filter((city) => city.toLowerCase().includes(inputText));
            cityList.innerHTML = '';

            filteredCities.forEach((city) => {
                const li = document.createElement('li');
                const hr = document.createElement('hr');
                const icon = document.createElement('i');

                li.innerText = city;
                li.classList.add('px-2', 'py-2', 'cursor-pointer', 'hover:bg-blue-100', 'flex', 'items-center');
                icon.classList.add('fi', 'fi-sr-marker', 'mr-2', 'text-blue-400', 'flex', 'items-center');

                li.prepend(icon);
                cityList.appendChild(li);
                cityList.appendChild(hr);
    
                li.addEventListener('click', function () {
                    searchInput.value = this.innerText;
                    cityList.innerHTML = '';
                });
            });

            cityList.classList.remove('hidden');
        } else {
            cityList.innerHTML = '';
            cityList.classList.add('hidden');
        }
    });

    document.addEventListener('click', function (event) {
        if (!searchInput.contains(event.target) && !cityList.contains(event.target)) {
            cityList.innerHTML = '';
            cityList.classList.add('hidden');
        }
    });
});