const checkIn = document.getElementById('checkIn');
const checkOut = document.getElementById('checkOut');

var picker1 = new Pikaday({
    field: checkIn,
    format: 'YYYY-MM-DD',
    toString(date, format) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
    },
    onSelect: function() {
        console.log(this.getMoment().format('Do MMMM YYYY'));
    }
});

var picker2 = new Pikaday({
    field: checkOut,
    format: 'YYYY-MM-DD',
    toString(date, format) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
    },
    onSelect: function() {
        console.log(this.getMoment().format('Do MMMM YYYY'));
    }
});