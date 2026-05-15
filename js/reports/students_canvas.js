

let activeStudents = 0
let inactiveStudents = 0

firebase.database().ref('userDetails').once("value", function(snapshot) {

    snapshot.forEach(function(childSnapshot) {
        let data = childSnapshot.val()
        if (data.Status === "active" && data.Role == "Student") {
            activeStudents ++
        }
        else if (data.Status === "inactive" && data.Role == "Student") {
            inactiveStudents ++
        }
    })
    drawStudentsLineChart()
})


function drawStudentsLineChart() {
    const canvasbarGraph = document.getElementById('studentsLineChart');
        new Chart(canvasbarGraph, {
            type: 'line',
            data: {
                labels: ['Active Students', 'Inactive Students'],
                datasets: [{
                    label: 'Students',
                    data: [activeStudents, inactiveStudents],
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