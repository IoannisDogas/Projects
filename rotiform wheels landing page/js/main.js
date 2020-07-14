"use strict";

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~form validation */


/*aquire inputs for validation*/
var $username = $("#username");
var $userMail = $("#userMail");
var $userMailRepeat = $("#userMailRepeat");


/*mathes special characters and numbers*/
var textPattern = /\W+|\d+/g;

/*email regular expression*/
var emailPattern =/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;



/*hide evaluation hint*/

$("form span").hide();

/*compare text to regex*/

function textValidity() {
    return $username.val().match(textPattern);
}

/*if text has correct format hide hint else show it*/

function textCheck() {    
    if (!textValidity()) {        
        $username.next().hide();
    } else {       
        $username.next().show();
    }
}

/*validation starts on focusout at the spacific input*/

$username.focusout(textValidity).focusout(textCheck);



/*compare mail to regex*/

function mailValidity() {
   return $userMail.val().match(emailPattern);
}


/*if email has correct format hide hint else show it*/

function mailCheck() {
     
    if (mailValidity()) {
        
        $userMail.next().hide();
    } else {
     
        $userMail.next().show();
    }
}


/*validation starts on focusout at the spacific input*/

$userMail.focusout(mailCheck);



/*since no real submission is required submit button is disabled*/
$("#submit").click(function (event) {
    event.preventDefault(); 
});


/*newsletter show/hide */

let newsButton=document.getElementById("newsButton");
let formContainer=document.getElementById("formDisplay");

newsButton.addEventListener("click",function(){
    formContainer.classList.toggle("displayNone");
});