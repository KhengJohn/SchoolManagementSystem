/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getToken() {
    var currentUrl = window.location.href;
    let params = (new URL(currentUrl)).searchParams;
    document.getElementById('token').value = params.get('token') // "n1"
}


function handleFormSubmit(event) {
    event.preventDefault();
    var token = document.getElementById("token").value;
    $(document).ajaxStart(function () {
        $("#loading").show();
    });

    $.ajax({
        url: "https://schoorm.herokuapp.com/confirmationRegistration/" + token,
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        data: null,
        success: function (data) {
            alert(data);
            window.location.replace("index.html");
        },
        error: function (xhr, status, errorThrown) {
            //Here the status code can be retrieved like;
            xhr.status;
            alert("Network Issue!");
            window.location.replace("index.html");
        }
    });
}

const form = document.querySelector('.post-form');
form.addEventListener('submit', handleFormSubmit);

$(document).ajaxStop(function () {
    $("#loading").hide();
});