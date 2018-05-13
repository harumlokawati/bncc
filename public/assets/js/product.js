makeGoodBad([10,50]);
makeInfluencer([35,60]);
makeHourly([10,10,20,30,40,50,10,80,10,70,80,90,10,100,50,30,50,60,10,80,29,44,35,29]);
function makeGoodBad(set){
    var ctx = document.getElementById("goodbadchart");
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
function makeInfluencer(set){
    var ctx = document.getElementById("influencerchart");
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
function makeHourly(set){
    var ctx = document.getElementById("hourlychart");
    var GoodBad = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["0AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM","11AM","12AM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM","10PM","11PM"],
            datasets: [{
                label: '# of Attention',
                data: set,
                backgroundColor: [
                    '#ffc107','#ffc107','#ffc107','#ffc107','#ffc107','#ffc107','#ffc107','#ffc107','#ffc107','#ffc107','#ffc107','#ffc107','#ffc107',
                    '#007bff','#007bff','#007bff','#007bff','#007bff','#007bff','#007bff','#007bff','#007bff','#007bff','#007bff','#007bff','#007bff'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}