
"use strict";

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~color theme change*/

function switchTheme(cssTheme) {
    document.getElementById('themeCss').setAttribute('href', cssTheme);
}

/*light theme button*/

$("#lightCss").click(function () {
  switchTheme('css/light.css');
});

/*dark theme button*/

$("#darkCss").click(function () {
    switchTheme('css/dark.css');
});




/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~data aquisition from URL */



$.get("https://frontendtest.mainlinemenswear.co.uk/products", function (data) {

/*first product*/

    $(".productInfo1_json").html(data[0].name);
    $(".productId1_json").html(data[0].product_id);
    $(".productPrice1_json").html("<span>&#163;</span>" + data[0].rrp_price +".00");
    $(".productOffer1_json").html("<span>SALE &#163;</span>" + data[0].sale_price + ".00");


/*second product*/

    $(".productInfo2_json").html(data[1].name);   
    $(".productPrice2_json").html("<span>&#163;</span>" + data[1].rrp_price + ".00");  

/*third product*/

    $(".productInfo3_json").html(data[2].name);   
    $(".productPrice3_json").html("<span>&#163;</span>" + data[2].rrp_price + ".00");

    /* productId */

    let $aquireId = $("#aquireId").html();
    $('#productIdValue').attr('value', $aquireId); 
   
});




/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~form validation */


/*aquire inputs for validation*/

let $username = $("#fullname");
let $userMail = $("#mail");
let $urlAdress = $("#competitorUrl");
let $enquiryMessage = $("#enquiry");

/*mathes name(s)/surname(s) format*/

let textPattern = /[a-zA-Z]{2,}\s[a-zA-Z]{2,}/g;


/*email regular expression*/

let emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

/*matches url pattern*/

let urlPattern = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;


/*hide evaluation hint*/

$(".message").hide();




/*compare name to regex*/

function nameValidity() {
    return $username.val().match(textPattern); 
}


/*if name has wrong format show hint else hide it*/

function nameCheck() {
    if (!nameValidity()) {
        $(".messageName").show();
    } else {
        $(".messageName").hide();
    }
}

/*validation starts on focusout at the spacific input*/

$username.focusout(nameValidity).focusout(nameCheck);


/*competitor url input toggle */

$("#yes").click(function () {
    $(".urlContainer").show();
    $("#competitorUrl").prop("required", true);

});
$("#no").click(function () {
    $(".urlContainer").hide();
    $("#competitorUrl").prop("required", false);
});


/*compare url to regex*/

function urlValidity() {
    return $urlAdress.val().match(urlPattern);
}

/*if url has correct format hide hint else show it*/


function urlCheck() {
    if (urlValidity()) {
        $(".messageUrl").hide();
    } else {
        $(".messageUrl").show();
    }
}


/*validation starts on focusout at the spacific input*/

$urlAdress.focusout(urlValidity).focusout(urlCheck);


/*compare mail to regex*/

function mailValidity() {
    return $userMail.val().match(emailPattern);
}



/*if email has correct format hide hint else show it*/

function mailCheck() {

    if (mailValidity()) {

        $(".messageMail").hide();
    } else {

        $(".messageMail").show();
    }
}


/*validation starts on focusout at the spacific input*/

$userMail.focusout(mailCheck);


/*enquiry message min/max characters*/


let maxLength = 200;
$("#enquiry").keyup(function () {
    let numberOfCharacters = maxLength - $(this).val().length;
    $("#charCount").text(numberOfCharacters);
});



function enquiryValidity() {    
    if (!$enquiryMessage.val()) {
        $(".messageCount").show();
    } else {
        $(".messageCount").hide();
    }
}

/*validation starts on focusout at the spacific input*/

$enquiryMessage.focusout(enquiryValidity);


/* submit form if inputs are vaild*/

function formInputValidity() {
    return nameValidity() && mailValidity() && enquiryValidity();
}


$('#enquiryForm').on('submit', function (e) {

    let sizeChoice = $("input[name='sizeSelected']:checked").val();
    if (!formInputValidity() && !sizeChoice) {
        e.preventDefault();
    }
       
    });


/*go to summary of enquiry after form sumbission */

$("#enquiryForm").on('submit',function () {
    window.location.assign('lightSummaryOfEnquiry.html');

});
  



