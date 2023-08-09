const searchBtn = document.getElementById("searchBtn");
const resultDiv = document.getElementById("resultDiv");

searchBtn.addEventListener("click", function () {
    if (search.value.trim() === '' || checkIn.value.trim() === '' || checkOut.value.trim() === '' || guests.value.trim() === '' || priceRange.value.trim() === '') {
        alert("Please fill up all input fields!");
    } else {
        const div = document.createElement('div');
        div.innerHTML = `
            <p>Search: ${search.value}</p>
            <p>Check-in: ${checkIn.value}</p>
            <p>Check-out: ${checkOut.value}</p>
            <p>Guests: ${guests.value}</p>
            <p>Price range: ${priceRange.value}</p>
        `;
        resultDiv.appendChild(div);
    }
});