

let activeGPS = 0
let inactiveGPS = 0

firebase.database().ref('GpsVenus').once("value", function(snapshot) {

    snapshot.forEach(function(childSnapshot) {
        let data = childSnapshot.val()
        if (data.Status === "active") {
            activeGPS ++
        }
        else if (data.Status === "inactive") {
            inactiveGPS ++
        }
    })
    console.log("Active GPS: " + activeGPS)
    console.log("Inactive GPS: " + inactiveGPS)
    drawGpsRadarChart()
})



function drawGpsRadarChart() {
    const canvasRadarChart = document.getElementById('gpsRadarChart');
        new Chart(canvasRadarChart, {
            type: 'radar',
            data: {
                labels: ['Active GPS', 'Inactive GPS'],
                datasets: [{
                    label: 'GPS',
                    data: [activeGPS, inactiveGPS],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        })
}