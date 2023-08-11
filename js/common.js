const searchBtn = document.getElementById("searchBtn");
const resultDiv = document.getElementById("resultDiv");

searchBtn.addEventListener("click", function () {
    if (search.value.trim() === '' || checkIn.value.trim() === '' || checkOut.value.trim() === '' || guests.value.trim() === '' || priceRange.value.trim() === '') {
        alert("Please fill up all input fields!");
    } else {
        resultDiv.classList.remove('hidden');
        resultDiv.innerHTML = `
            <div class="mx-auto md:p-8">
                <h2 class="text-2xl font-bold mb-4">Searched Result</h2>
                <ul class="space-y-4">
                    <li class="bg-white rounded shadow flex flex-col md:flex-row justify-between">
                        <div>
                            <h3 class="text-lg font-semibold mb-2">${search.value}</h3>
                            <p class="text-gray-600">Booked Date: ${checkIn.value} to ${checkOut.value}</p>
                        </div>
                        <div class="flex flex-col justify-center">
                            <p class="text-gray-600">Price Range: $${parseInt(priceRange.value.split(" - ")[0])} - $${parseInt(priceRange.value.split(" - ")[1])}</p>
                            <p class="text-gray-600">Guests: ${guests.value < 10 ? `0${guests.value}` : guests.value}</p>
                        </div>
                    </li>
                </ul>
            </div>
        `;
    }
});