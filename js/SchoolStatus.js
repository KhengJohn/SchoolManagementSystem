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

$(document).ready(function() {
    var request = new XMLHttpRequest();
    var urlSchool = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getSchoolStatus/" + userDataObject.token;
    try {
        request.onreadystatechange = function() {
            if (request.readyState === 4 || request.readyState === 200) {
                var val = JSON.parse(request.responseText);
                document.getElementById("currentStatus").value = val;
            }
        }
        request.open("GET", urlSchool, true);
        request.send();
    } catch (e) {
        alert(e);
    }
});


function handleFormSubmit(event) {
    event.preventDefault();
    var currentStatus = document.getElementById("currentStatus").value;
    
    $(document).ajaxStart(function() {
        $("#loading").show();
    });

    $.ajax({
        url: "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/modifySchoolStatus/" + currentStatus + "/" + userDataObject.token,
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        data: '',
        success: function() {
            alert("School Status Successfully Modified");
            //Go to the shop's login page
            window.location.replace("SchoolStatus.html");
        },
        error: function(xhr, status, errorThrown) {
            //Here the status code can be retrieved like;
            xhr.status;
            //The message added to Response object in Controller can be retrieved as following.
            alert(xhr.responseText);
        }
    });
}

const form = document.querySelector('.post-form');
form.addEventListener('submit', handleFormSubmit);

$(document).ajaxStop(function() {
    $("#loading").hide();
});