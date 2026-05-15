
let totalAdmins = 0
let totalStudents = 0

firebase.database().ref('userDetails').once("value", function(snapshot) {
    let total = 0
    snapshot.forEach(function(childSnapshot) {
        let data = childSnapshot.val()
        if (data.Role == "Admin"){
            totalAdmins ++
        }
        if (data.Role == "Student"){
            totalStudents ++
        }
    })
    drawBarGraph()

    console.log("Total Admins: " + totalAdmins)
    console.log("Total Students: " + totalStudents)
})


let activeCourses = 0
let inactiveCourses = 0

firebase.database().ref('Courses').once("value", function(snapshot) {
    let total = 0
    snapshot.forEach(function(childSnapshot) {
        let data = childSnapshot.val()
        if (data.Status == "active") {
            activeCourses ++
        }
        if (data.Status == "inactive") {
            inactiveCourses ++
        }
    })
    drawCourseBarGraph()
})



function drawCourseBarGraph() {
    const canvasbarGraph = document.getElementById('coursesPieChart');
        new Chart(canvasbarGraph, {
            type: 'pie',
            data: {
                labels: ['Active Courses', 'Inactive Courses'],
                datasets: [{
                    label: 'Courses',
                    data: [activeCourses, inactiveCourses],
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



function drawBarGraph() {
    const canvasbarGraph = document.getElementById('totalUsersChart');
        new Chart(canvasbarGraph, {
            type: 'bar',
            data: {
                labels: ['Admins', 'Students'],
                datasets: [{
                    label: 'System Users',
                    data: [totalAdmins, totalStudents],
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