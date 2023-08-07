const checkInMd = document.getElementById('checkInMd');
const checkInSm = document.getElementById('checkInSm');
const checkOutMd = document.getElementById('checkOutMd');
const checkOutSm = document.getElementById('checkOutSm');

var picker1 = new Pikaday({
    field: checkInMd,
    format: 'YYYY-MM-DD',
    toString(date, format) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}-${month < 10 ? `0${month}` : month}-${day}`;
    },
    onSelect: function() {
        console.log(this.getMoment().format('Do MMMM YYYY'));
    }
});

var picker2 = new Pikaday({
    field: checkInSm,
    format: 'YYYY-MM-DD',
    toString(date, format) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}-${month < 10 ? `0${month}` : month}-${day}`;
    },
    onSelect: function() {
        console.log(this.getMoment().format('Do MMMM YYYY'));
    }
});

var picker3 = new Pikaday({
    field: checkOutMd,
    format: 'YYYY-MM-DD',
    toString(date, format) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}-${month < 10 ? `0${month}` : month}-${day}`;
    },
    onSelect: function() {
        console.log(this.getMoment().format('Do MMMM YYYY'));
    }
});

var picker4 = new Pikaday({
    field: checkOutSm,
    format: 'YYYY-MM-DD',
    toString(date, format) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}-${month < 10 ? `0${month}` : month}-${day}`;
    },
    onSelect: function() {
        console.log(this.getMoment().format('Do MMMM YYYY'));
    }
});