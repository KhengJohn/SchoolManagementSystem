/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function handleFormSubmit(event) {
    event.preventDefault();
    //                const url = "https://schoolrm.herokuapp.com";
    const data = new FormData(event.target);
    const formJSON = Object.fromEntries(data.entries());
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
    
    $.ajax({
        url: "https://schoolrm.herokuapp.com/login",
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(formJSON, null, 2),
        success: function (data) {
            try {
                userData.storeUserDataInSession(data);
                if (data.staff.flag === 'New') {
                    window.location.replace("ChangePassword.html");
                } else {
                    if (data.staff.role === 'superuser' || data.staff.role === 'admin') {
                        window.location.replace("Dashboard.html");
                    } else {
                        window.location.replace("WelcomePage.html");
                    }
                }

            } catch (err) {
                alert("Error after staff");
            }
        },
        error: function (xhr, status, errorThrown) {
            //Here the status code can be retrieved like;
            xhr.status;
            if (xhr.status === 400) {
                //The message added to Response object in Controller can be retrieved as following.
                document.getElementById("message").innerHTML = xhr.responseText;
            } else {
                document.getElementById("message").innerHTML = "Network Error";
            }
        }
    });
}

const form = document.querySelector('.post-form');
form.addEventListener('submit', handleFormSubmit);

$(document).ajaxStart(function () {
    $("#loading").show();
});


$(document).ajaxStop(function () {
    $("#loading").hide();
});

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