
"use strict";

/* create dates */

function createCalendarDates(openingDate, currentDate) {
    var aquireYears = "";
    for (var year = openingDate; year <= currentDate; year++) {
        aquireYears += "<option value='" + year + "'>" + year + "</option>";
    }
    return aquireYears;
}

/*declare day montnh year */

var presentDay = new Date();
var presentMonth = presentDay.getMonth();
var presentYear = presentDay.getFullYear();
var selectedYear = document.getElementById("selectedYear");
var selectedMonth = document.getElementById("selectedMonth");


/*display current year */

var showCurrentYear = createCalendarDates( 1970, presentYear );


document.getElementById("selectedYear").innerHTML = showCurrentYear;

var calendarTableContent = document.getElementById("calendarTableContent");

/* populating months/days arrays to fill callendar table */

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var daysLabel = "<tr>";
for (var day in days) {
    daysLabel += "<th data-days='" + days[day] + "'>" + days[day] + "</th>";
}
daysLabel += "</tr>";

document.getElementById("weekDays").innerHTML = daysLabel;


presentDate = document.getElementById("presentDate");

/*navigate to next date */

function nextDate() {
    presentYear = (presentMonth === 11) ? presentYear + 1 : presentYear;
    presentMonth = (presentMonth + 1) % 12;
    displayDate(presentMonth, presentYear);
}

/*navigate to previous date */

function previousDate() {
    presentYear = (presentMonth === 0) ? presentYear - 1 : presentYear;
    presentMonth = (presentMonth === 0) ? 11 : presentMonth - 1;
    displayDate(presentMonth, presentYear);
}

/*current month/year */

function goToDate() {
    presentYear = parseInt(selectedYear.value);
    presentMonth = parseInt(selectedMonth.value);
    displayDate(presentMonth, presentYear);
}

/*display the date in the calendar*/

function displayDate(month, year) {

    var starterDate = (new Date(year, month)).getDay();

   var daysOfMonth = document.getElementById("daysOfMonth");

    daysOfMonth.innerHTML = "";

    presentDate.innerHTML = months[month] + " " + year;
    selectedYear.value = year;
    selectedMonth.value = month;

/* check that the number of days in a month are correct*/

    function monthlyDays(setMonth, setYear) {
        return 32 - new Date(setYear, setMonth, 32).getDate();
    }

/*populating cells with date data */

    var date = 1;
    for (var i = 0; i < 6; i++) {
        var dayNumberContainer = document.createElement("tr");

        for (var j = 0; j < 7; j++) {
            if (i === 0 && j < starterDate) {
                var dayNumber = document.createElement("td");
                var createdNumber = document.createTextNode("");
                dayNumber.appendChild(createdNumber);
                dayNumberContainer.appendChild(dayNumber);
            } else if (date > monthlyDays(month, year)) {
                break;
            } else {
                dayNumber = document.createElement("td");
                dayNumber.setAttribute("data-currentDate", date);
                dayNumber.setAttribute("data-currentMonth", month + 1);
                dayNumber.setAttribute("data-currentYear", year);
                dayNumber.setAttribute("data-monthName", months[month]);
                dayNumber.className = "userSelection";
                dayNumber.innerHTML = "<span>" + date + "</span>";

                if (date === presentDay.getDate() && year === presentDay.getFullYear() && month === presentDay.getMonth()) {
                    dayNumber.className = "userSelection selected";
                }
                dayNumberContainer.appendChild(dayNumber);
                date++;
            }


        }

        daysOfMonth.appendChild(dayNumberContainer);
    }

}


displayDate(presentMonth, presentYear);


