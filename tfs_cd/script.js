"use strict";

//navigation menu

var navigationButtons = ["home", "services", "ourWork"];
var displayContent;

function navigateMenu(menuTab) {
    displayContent = menuTab;
    toggleMenu();
}

function toggleMenu() {
    var i, menuTab, content;
    for (i = 0; i < navigationButtons.length; i++) {
        menuTab = navigationButtons[i];
        content = document.getElementById(menuTab);
        if (displayContent === menuTab) {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    }
}


/*aquire data from JSON file: banner.json*/

fetch('banner.json')
    .then(function (output) {
        return output.json();
    })
    .then(function (data) {
        showJSON(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function showJSON(data) {

    // timer
    var offerTimer = setInterval(function () {

        //get date from "banner.json"
        var dateTo = data[0].schedule.to;
        var dateFrom = data[0].schedule.from;

        var getTimeDateTo = new Date(dateTo).getTime();
        var getTimeDateFrom = new Date(dateFrom).getTime();

        // Find the time elapsed
        var timeElapsed = getTimeDateFrom - getTimeDateTo;
        if (timeElapsed >= 0) {
            var hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

            // Output if offer is active            
            document.getElementById("banner").innerHTML = data[0].content[0].text + " " + " <span id='offerCode'>" + data[0].content[1].text + "</span>" + " <span class='timerspan'>" + hours + ":" + minutes + ":" + seconds + "</span>";
            if (data[0].content[1].text) {
                document.getElementById("offerCode").classList.add("colorOfferCode");
            } else {
                document.getElementById("offerCode").classList.remove("colorOfferCode");
            }

        } else {
            // Output if offer expires
            clearInterval(offerTimer);          
            document.getElementById("banner").innerHTML = data[0].content[0].text + " <span id='offerCode'>" + data[0].content[1].text + "</span>" + " <span class='timerspan'> 00:00:00 </span>";
            if (data[0].content[1].text) {
                document.getElementById("offerCode").classList.add("colorOfferCode");
            } else {
                document.getElementById("offerCode").classList.remove("colorOfferCode");
            }
        }
    }, 1000);


    //redirect to webpage
    document.getElementById("banner").onclick = function () { redirect() };
  
   function redirect() {
       location.href=data[0].href;
    }

}


