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
    event.preventDefault();
    const data = new FormData(event.target);
    const formJSON = Object.fromEntries(data.entries());

    $.ajax({
        url: "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/createStaff/" + userDataObject.token,
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(formJSON, null, 2),
        success: function(response) {
            alert("Staff Successfully Created \n" +
                "Staff ID - " + response.staffId + "\n" +
                "Password - Password@123");
            //Go to the shop's login page
            window.location.replace("CreateStaff.html");
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