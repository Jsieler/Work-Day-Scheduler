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
    $("#9am-row").addClass("future");
} else if (currentHour > hour9AM) {
    $("#9am-row").addClass("past");
} else if (currentHour = hour9AM) {
    $("9am-row").addClass("present")
}
// 10PM Time-Block
if (currentHour < hour10AM) {
    $("#10am-row").addClass("future");
} else if (currentHour > hour10AM) {
    $("#10am-row").addClass("past");
} else if (currentHour = hour10AM) {
    $("10am-row").addClass("present")
}
// 11PM Time-Block
if (currentHour < hour11AM) {
    $("#11am-row").addClass("future");
} else if (currentHour > hour11AM) {
    $("#11am-row").addClass("past");
} else if (currentHour = hour11AM) {
    $("11am-row").addClass("present")
}
// 12PM Time-Block
if (currentHour < hour12AM) {
    $("#12am-row").addClass("future");
} else if (currentHour > hour12AM) {
    $("#12am-row").addClass("past");
} else if (currentHour = hour12AM) {
    $("12am-row").addClass("present")
}
// 1PM Time-Block
if (currentHour < hour1PM) {
    $("#1pm-row").addClass("future");
} else if (currentHour > hour1PM) {
    $("#1pm-row").addClass("past");
} else if (currentHour = hour1PM) {
    $("1pm-row").addClass("present")
}
// 2PM Time-Block
if (currentHour < hour2PM) {
    $("#2pm-row").addClass("future");
} else if (currentHour > hour2PM) {
    $("#2pm-row").addClass("past");
} else if (currentHour = hour2PM) {
    $("2pm-row").addClass("present")
}
// 3PM Time-Block
if (currentHour < hour3PM) {
    $("#3pm-row").addClass("future");
} else if (currentHour > hour3PM) {
    $("#3pm-row").addClass("past");
} else if (currentHour = hour3PM) {
    $("#3pm-row").addClass("present")
}
// 4PM Time-Block
if (currentHour < hour4PM) {
    $("#4pm-row").addClass("future");
} else if (currentHour > hour4PM) {
    $("#4pm-row").addClass("past");
} else if (currentHour = hour4PM) {
    $("4pm-row").addClass("present")
}
// 5PM Time-Block
if (currentHour < hour5PM) {
    $("#5pm-row").addClass("future");
} else if (currentHour > hour5PM) {
    $("#5pm-row").addClass("past");
} else if (currentHour = hour5PM) {
    $("5pm-row").addClass("present")
}

