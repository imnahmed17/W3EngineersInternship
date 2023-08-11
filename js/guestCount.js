const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const applyBtn = document.getElementById("applyBtn");
const guests = document.getElementById("guests");
const textValue = document.getElementById("textValue");
const guestDiv = document.getElementById("guestDiv");
const downArrow1 = document.getElementById("downArrow1");

let counter = 0;

plusBtn.addEventListener("click", function () {
    counter++;
    textValue.innerText = counter < 10 ? `0${counter}` : counter;
});

minusBtn.addEventListener("click", function () {
    if (counter > 0) {
        counter--;
        textValue.innerText = counter < 10 ? `0${counter}` : counter;
    }
});

guests.addEventListener("click", function () {
    guestDiv.classList.remove('hidden');
    
    textValue.innerText = counter < 10 ? `0${counter}` : counter;

    applyBtn.addEventListener("click", function () {
        guests.value = parseInt(textValue.innerText);
        guestDiv.classList.add('hidden');
        downArrow1.classList.add('hidden'); 
    });

    document.addEventListener('click', function (event) {
        if (!guests.contains(event.target) && !guestDiv.contains(event.target)) {
            guestDiv.classList.add('hidden');
        }
    });
});

guests.addEventListener('input', function () {
    if (guests.value.trim() === '') {
        downArrow1.classList.remove('hidden');
    }
});