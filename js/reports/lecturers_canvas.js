

let activeLecturers = 0
let inactiveLecturers = 0

firebase.database().ref('userDetails').once("value", function(snapshot) {

    snapshot.forEach(function(childSnapshot) {
        let data = childSnapshot.val()
        if (data.Role == "Admin" && data.Status == "active"){
            activeLecturers ++
        }
        if (data.Role == "Admin" && data.Status == "inactive"){
            inactiveLecturers ++
        }
    })
    drawLecturerBarGraph()
})



function drawLecturerBarGraph() {
    const canvasbarGraph = document.getElementById('lecturersDoughnutChart');
        new Chart(canvasbarGraph, {
            type: 'doughnut', //radar, doughnut, pie, bar, line
            data: {
                labels: ['Active Lecturers', 'Inactive Lecturers'],
                datasets: [{
                    label: 'Lecturers',
                    data: [activeLecturers, inactiveLecturers],
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