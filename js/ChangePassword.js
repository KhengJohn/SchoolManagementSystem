var password = document.getElementById("password"),
    confirm_password = document.getElementById("confirm_password");

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
    storeUserDataInSession: function(userData) {
        var userObjectString = JSON.stringify(userData);
        window.sessionStorage.setItem('userObject', userObjectString)
    },
    getUserDataFromSession: function() {
        var userData = window.sessionStorage.getItem('userObject')
        return JSON.parse(userData);
    }
};

var userDataObject = userData.getUserDataFromSession();

function handleFormSubmit(event) {
    event.preventDefault();
    var password = document.getElementById("password").value;
    // const data = new FormData(event.target);

    // data.append('token', userDataObject.token);
    // data.append('newPassword', password);
    // const formJSON = Object.fromEntries(data.entries());
    

    $.ajax({
        url: "https://schoorm.herokuapp.com/" + userDataObject.staff.shop.shopCode + "/changePassword/" + password + "/" + userDataObject.token,
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        data: '',
        success: function(data) {
            //Go to the shop's login page
            console.log(data);
            alert(data);
            logout();
        },
        error: function(xhr, status, errorThrown) {
            //Here the status code can be retrieved like;
            xhr.status;
            //The message added to Response object in Controller can be retrieved as following.
            document.getElementById("message").innerHTML = "Network Issues!";
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



function logout() {
    // var ipAddress = document.getElementById("ipAddress").value;
    // var browserInfo = document.getElementById("browserInfo").value;
    const data = new FormData();
    $.ajax({
        url: "https://schoorm.herokuapp.com/logout/" + userDataObject.token,
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data: '',
        success: function () {
            //Go to the shop's login page
            window.sessionStorage.clear();
            window.location.replace("index.html");
        },
        error: function (xhr, status, errorThrown) {
            //Here the status code can be retrieved like;
            xhr.status;
            //The message added to Response object in Controller can be retrieved as following.
            window.sessionStorage.clear();
            window.location.replace("index.html");
        }
    });
}