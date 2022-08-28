function resetSubmit(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;

    const data = new FormData(event.target);
    const formJSON = Object.fromEntries(data.entries());

    $(document).ajaxStart(function () {
        $("#loading").show();
    });

    $.ajax({
        url: "https://schoolrm.herokuapp.com/resetPassword/" + email,
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(formJSON, null, 2),
        success: function (response) {
            alert(response);
            window.location.replace("index.html");
        },
        error: function (xhr, status, errorThrown) {
            //Here the status code can be retrieved like;
            xhr.status;
            //The message added to Response object in Controller can be retrieved as following.
            alert(xhr.responseText);
            window.location.replace("index.html");
        }
    });
}

$(document).ajaxStop(function () {
    $("#loading").hide();
});

const form = document.querySelector('.post-form');
form.addEventListener('submit', resetSubmit);