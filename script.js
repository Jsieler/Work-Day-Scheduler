
// Gets Headers Current Date
var currentDay = document.querySelector("#currentDay")
var currentTime = moment();
currentDay.textContent = currentTime.format("dddd, MMMM Do YYYY")
// Gets Current Hour
var currentHour = moment().format('H')

// Hour Values for Timeblocks
var hour9AM = 9
var hour10AM = 10
var hour11AM = 11
var hour12AM = 12
var hour1PM = 13
var hour2PM = 14
var hour3PM = 15
var hour4PM = 16
var hour5PM = 17


// 9AM Time-Block
if (currentHour < hour9AM) {
    $("#hour9").addClass("future");
} else if (currentHour > hour9AM) {
    $("#hour9").addClass("past");
} else if (currentHour = hour9AM) {
    $("hour9").addClass("present")
}
// 10PM Time-Block
if (currentHour < hour10AM) {
    $("#hour10").addClass("future");
} else if (currentHour > hour10AM) {
    $("#hour10").addClass("past");
} else if (currentHour = hour10AM) {
    $("#hour10").addClass("present")
}
// 11PM Time-Block
if (currentHour < hour11AM) {
    $("#hour11").addClass("future");
} else if (currentHour > hour11AM) {
    $("#hour11").addClass("past");
} else if (currentHour = hour11AM) {
    $("#hour11").addClass("present")
}
// 12PM Time-Block
if (currentHour < hour12AM) {
    $("#hour12").addClass("future");
} else if (currentHour > hour12AM) {
    $("#hour12").addClass("past");
} else if (currentHour = hour12AM) {
    $("#hour12").addClass("present")
}
// 1PM Time-Block
if (currentHour < hour1PM) {
    $("#hour1").addClass("future");
} else if (currentHour > hour1PM) {
    $("#hour1").addClass("past");
} else if (currentHour = hour1PM) {
    $("#hour1").addClass("present")
}
// 2PM Time-Block
if (currentHour < hour2PM) {
    $("#hour2").addClass("future");
} else if (currentHour > hour2PM) {
    $("#hour2").addClass("past");
} else if (currentHour = hour2PM) {
    $("#hour2").addClass("present")
}
// 3PM Time-Block
if (currentHour < hour3PM) {
    $("#hour3").addClass("future");
} else if (currentHour > hour3PM) {
    $("#hour3").addClass("past");
} else if (currentHour = hour3PM) {
    $("#hour3").addClass("present")
}
// 4PM Time-Block
if (currentHour < hour4PM) {
    $("#hour4").addClass("future");
} else if (currentHour > hour4PM) {
    $("#hour4").addClass("past");
} else if (currentHour = hour4PM) {
    $("#hour4").addClass("present")
}
// 5PM Time-Block
if (currentHour < hour5PM) {
    $("#hour5").addClass("future");
} else if (currentHour > hour5PM) {
    $("#hour5").addClass("past");
} else if (currentHour = hour5PM) {
    $("#hour5").addClass("present")
}

// Gets Textarea Text From LocalStorage 
let hour9 = document.querySelector("#hour9")
hour9.value = localStorage.getItem("hour9text")

let hour10 = document.querySelector("#hour10")
hour10.value = localStorage.getItem("hour10text")

let hour11 = document.querySelector("#hour11")
hour11.value = localStorage.getItem("hour11text")

let hour12 = document.querySelector("#hour12")
hour12.value = localStorage.getItem("hour12text")

let hour1 = document.querySelector("#hour1")
hour1.value = localStorage.getItem("hour1text")

let hour2 = document.querySelector("#hour2")
hour2.value = localStorage.getItem("hour2text")

let hour3 = document.querySelector("#hour3")
hour3.value = localStorage.getItem("hour3text")

let hour4 = document.querySelector("#hour4")
hour4.value = localStorage.getItem("hour4text")

let hour5 = document.querySelector("#hour5")
hour5.value = localStorage.getItem("hour5text")


// Saves Textarea Text In Local Storage
hour9.addEventListener("keyup", event => {
    localStorage.setItem("hour9text", event.target.value)
})

hour10.addEventListener("keyup", event => {
    localStorage.setItem("hour10text", event.target.value)
})

hour11.addEventListener("keyup", event => {
    localStorage.setItem("hour11text", event.target.value)
})

hour12.addEventListener("keyup", event => {
    localStorage.setItem("hour12text", event.target.value)
})

hour1.addEventListener("keyup", event => {
    localStorage.setItem("hour1text", event.target.value)
})

hour2.addEventListener("keyup", event => {
    localStorage.setItem("hour2text", event.target.value)
})

hour3.addEventListener("keyup", event => {
    localStorage.setItem("hour3text", event.target.value)
})

hour4.addEventListener("keyup", event => {
    localStorage.setItem("hour4text", event.target.value)
})

hour5.addEventListener("keyup", event => {
    localStorage.setItem("hour5text", event.target.value)
})

// Delete Button Function To Clear Textarea
function deleteHour9() {
    document.getElementById("hour9", hour9).value = ""
}

function deleteHour10() {
    document.getElementById("hour10").value = "";
}

function deleteHour11() {
    document.getElementById("hour11").value = "";
}

function deleteHour12() {
    document.getElementById("hour12").value = "";
}

function deleteHour1() {
    document.getElementById("hour1").value = "";
}

function deleteHour2() {
    document.getElementById("hour2").value = "";
}

function deleteHour3() {
    document.getElementById("hour3").value = "";
}

function deleteHour4() {
    document.getElementById("hour4").value = "";
}

function deleteHour5() {
    document.getElementById("hour5").value = "";
}

// Clears All Local Storage
function clearLocalStorage() {
    localStorage.clear();
}