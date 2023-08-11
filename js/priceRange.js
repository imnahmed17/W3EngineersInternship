const slider = document.getElementById('slider');
const applyBtn1 = document.getElementById('applyBtn1');
const priceRange = document.getElementById('priceRange');
const priceRangeDiv = document.getElementById("priceRangeDiv");
const downArrow2 = document.getElementById("downArrow2");

let min = 0;
let max = 0;

noUiSlider.create(slider, {
    start: [0, 5749],
    connect: true,
    range: {
        'min': 0,
        'max': 5749
    }, 
    tooltips: [
        {
            to: function (value) {
                return `<i class="fi fi-rs-bangladeshi-taka-sign" style="font-size: 14px;"></i> ${parseInt(value)}`;
            }
        },
        {
            to: function (value) {
                return `<i class="fi fi-rs-bangladeshi-taka-sign" style="font-size: 14px;"></i> ${parseInt(value)}`;
            }
        }
    ]
});

priceRange.addEventListener("click", function () {
    priceRangeDiv.classList.remove('hidden');

    slider.noUiSlider.on('update', function (values) {
        min = parseInt(values[0]);
        max = parseInt(values[1]);
    });

    applyBtn1.addEventListener("click", function () {
        priceRange.value = `${min} - ${max}`;
        priceRangeDiv.classList.add('hidden');
        downArrow2.classList.add('hidden');
    });

    document.addEventListener('click', function (event) {
        if (!priceRange.contains(event.target) && !priceRangeDiv.contains(event.target)) {
            priceRangeDiv.classList.add('hidden');
        }
    });
});

priceRange.addEventListener('input', function () {
    if (priceRange.value.trim() === '') {
        downArrow2.classList.remove('hidden');
    }
});