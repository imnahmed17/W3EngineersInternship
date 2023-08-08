const slider = document.getElementById('slider');
const applyBtn1 = document.getElementById('applyBtn1');

let min = 0;
let max = 0;



applyBtn1.addEventListener("click", function () {
    slider.noUiSlider.on('update', function (values){
        min = values[0]
        max = values[1]
    });
    console.log(min, max)
});

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }, 
    tooltips: [
        {
            to: function (value) {
                return `<i class="fi fi-rs-bangladeshi-taka-sign" style="font-size: 14px;"></i> ${parseInt(value)}`
            }
        },
        {
            to: function (value) {
                return `<i class="fi fi-rs-bangladeshi-taka-sign" style="font-size: 14px;"></i> ${parseInt(value)}`
            }
        }
    ]
});