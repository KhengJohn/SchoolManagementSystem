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

function handleFormSubmit(event) {
    event.preventDefault();
//                const url = "https://schoolrm.herokuapp.com";
    const data = new FormData(event.target);
    const formJSON = Object.fromEntries(data.entries());

    $.ajax({
        url: "https://schoolrm.herokuapp.com/signup",
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(formJSON, null, 2),
        success: function (data) {
            alert(data);
            //Go to the school's login page
            window.location.replace("LoginPage.html");
        },
        error: function (xhr, status, errorThrown) {
            //Here the status code can be retrieved like;
            xhr.status;
            //The message added to Response object in Controller can be retrieved as following.
            alert(xhr.responseText);
        }
    });
}

const form = document.querySelector('.post-form');
form.addEventListener('submit', handleFormSubmit);

$(document).ready(function () {
    $("#toggle-password").on('click', function (event) {
        if ($('#password').attr("type") === "text") {
            $('#password').attr('type', 'password');
            $('#password-eye').addClass("fa-eye-slash");
            $('#password-eye').removeClass("fa-eye");
        } else if ($('#password').attr("type") === "password") {
            $('#password').attr('type', 'text');
            $('#password-eye').removeClass("fa-eye-slash");
            $('#password-eye').addClass("fa-eye");
        }
    });
});

$(document).ajaxStart(function () {
    $("#loading").show();
});

$(document).ajaxStop(function () {
    $("#loading").hide();
});
