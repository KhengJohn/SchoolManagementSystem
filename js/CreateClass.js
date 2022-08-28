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

$(document).ready(function () {
  var request = new XMLHttpRequest();
  var urlStaff = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getAllSchoolStaff/" + userDataObject.token;
  try {
      request.onreadystatechange = function () {
          if (request.readyState === 4 || request.readyState === 200) {
              var val = JSON.parse(request.responseText);
              for (var j = 0; j < val.length; j++) {
                  var newOption = $('<option/>');
                  if (val[j]["role"] === "teacher") {
                      newOption.text( val[j]["firstName"] + " " + val[j]["middleName"] + " " + val[j]["lastName"]);
                      newOption.attr('value', val[j].id);
                      $('#teacher_staff_id').append(newOption);
                  }

              }
          }
      }
      request.open("GET", urlStaff, true);
      request.send();
  } catch (e) {
      alert(e);
  }
});

function displaySubjects(){
    var subjectsSelHTML = $('#subjects option:selected').toArray().map(item => item.text).join(", ");
    document.getElementById("displaySelText").innerHTML = subjectsSelHTML;
}

function createClass() {    
    var classTeacherStaffId = document.getElementById("teacher_staff_id").value;
    var classNo = document.getElementById("classNo").value;
    var arm = document.getElementById("arm").value;
    var subjects = $('#subjects').val();

    const data = new FormData();
    data.append("arm", arm);
    data.append("subjects", subjects);
    const formJSON = Object.fromEntries(data.entries());
    console.log(JSON.stringify(formJSON, null, 2));

    $.ajax({
        url: "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/setClassType/" + classTeacherStaffId + "/" + classNo + "/" + userDataObject.token,
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(formJSON, null, 2),
        success: function (data) {
            console.log(data);
            alert("Successfully Created");
            //Go to the school's login page
            window.location.replace("CreateClass.html");
        },
        error: function (xhr, status, errorThrown) {
            //Here the status code can be retrieved like;
            xhr.status;
            //The message added to Response object in Controller can be retrieved as following.
            alert(xhr.responseText);
        }
    });
}


$(document).ajaxStart(function () {
    $("#loading").show();
});


$(document).ajaxStop(function () {
    $("#loading").hide();
});