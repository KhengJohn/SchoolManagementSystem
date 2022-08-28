/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var password = document.getElementById("password")
        , confirm_password = document.getElementById("confirm_password");

function validatePassword() {
    if (password.value !== confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

var userData = {
    storeUserDataInSession: function (userData) {
        var userObjectString = JSON.stringify(userData);
        window.sessionStorage.setItem('userObject', userObjectString);
    },
    getUserDataFromSession: function () {
        var userData = window.sessionStorage.getItem('userObject');
        return JSON.parse(userData);
    }
};

var userDataObject = userData.getUserDataFromSession();

function handleFormSubmit(event) {
    var password = document.getElementById("password").value;
    
    $.ajax({
        url: "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/changePassword/" + password + "/" + userDataObject.token,
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        data: '',
        success: function (data) {
            //Go to the school's login page
            console.log(data);
            alert(data);
            window.location.replace("index.html");
        },
        error: function (xhr, status, errorThrown) {
            //Here the status code can be retrieved like;
            xhr.status;
            //The message added to Response object in Controller can be retrieved as following.
            document.getElementById("message").innerHTML = xhr.responseText;
        }
    });
}

const form = document.querySelector('.post-form');
form.addEventListener('submit', handleFormSubmit);

$(document).ajaxStop(function() {
    $("#loading").hide();
});

$(document).ajaxStart(function() {
    $("#loading").show();
});