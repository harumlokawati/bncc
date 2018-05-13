HourTraffic([]);
function makeGoodBad(set){
    var ctx = document.getElementById("myChart");
    var GoodBad = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Good", "Bad"],
            datasets: [{
                label: '# of Votes',
                data: set,
                backgroundColor: [
                    '#20c997',
                    '#dc3545'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
}
function HourTraffic(set){
    var Hours = [
    ];
    var ctx = document.getElementById("myChart");
    var GoodBad = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['', '', '', '', '', '', ''],
            datasets: [{
                label: 'Overall',
                borderColor: '#dc3545',
                backgroundColor: '#dc3545',
                data: [10, 30, 46, 2, 8, 50, 0],
                fill: false,
            }]
        },
        options: {
            responsive: true
        }
    });
}
