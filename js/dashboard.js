
let idTotalStudents = document.getElementById('idTotalStudents')
let idTotalCourses = document.getElementById('idTotalCourses')
let idTotalLecturers = document.getElementById('idTotalLecturers')
let idTotalPendingApprovals = document.getElementById('idTotalPendingApprovals')
let totalStudents = document.getElementById('totalStudents')

firebase.database().ref('userDetails').once("value", function(snapshot) {
    let total = 0
    snapshot.forEach(function(childSnapshot) {
        let data = childSnapshot.val()
        total ++
    })
    idTotalStudents.innerHTML = total
})

firebase.database().ref('Courses').once("value", function(snapshot) {
    let total = 0
    snapshot.forEach(function(childSnapshot) {
        let data = childSnapshot.val()
        total ++
    })
    idTotalCourses.innerHTML = total
})

firebase.database().ref('userDetails').once("value", function(snapshot) {
    let total = 0
    snapshot.forEach(function(childSnapshot) {
        let data = childSnapshot.val()
        if (data.Role == "Admin"){
            total ++
        }
    })
    idTotalLecturers.innerHTML = total
})

firebase.database().ref('userDetails').once("value", function(snapshot) {
    let total = 0
    snapshot.forEach(function(childSnapshot) {
        let data = childSnapshot.val()
        if (data.Status === "inactive") {
            total ++
        }
    })
    idTotalPendingApprovals.innerHTML = total
})

firebase.database().ref('userDetails').once("value", function(snapshot) {
    let total = 0
    snapshot.forEach(function(childSnapshot) {
        let data = childSnapshot.val()

        if (data.Role == "Student") {
            total ++
        }
    })
    totalStudents.innerHTML = total
})