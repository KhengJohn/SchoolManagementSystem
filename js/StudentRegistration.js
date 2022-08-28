/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    var request = new XMLHttpRequest();
    var urlClassType = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/allClassType/" + userDataObject.token;
    try {
        request.onreadystatechange = function () {
            if (request.readyState === 4 || request.readyState === 200) {
                var val = JSON.parse(request.responseText);
                if (val.length >= 1) {
                    for (var j = 0; j < val.length; j++) {
                        var newOption = $('<option/>');
                        newOption.text(val[j].className + " ==> " + val[j].arm);
                        newOption.attr('value', val[j].id);
                        $('#eduClassId').append(newOption);
                    }
                }else{
                    alert('Student can not be registered - Admin is yet to create class');
                    window.location.replace("Dashboard.html");
                }

            }
        };
        request.open("GET", urlClassType, true);
        request.send();
    } catch (e) {
        alert(e);
    }
});

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
    var eduClassId = document.getElementById("eduClassId").value

    $.ajax({
        url: "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/addStudent/" + eduClassId + "/" + userDataObject.token,
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(formJSON, null, 2),
        success: function (response) {
            attachPhoto(response.id);
        },
        error: function (xhr, status, errorThrown) {
            //Here the status code can be retrieved like;
            xhr.status;
            //The message added to Response object in Controller can be retrieved as following.
            alert('Kindly reduce photo size...');
        }
    });
}

const form = document.querySelector('.post-form');
form.addEventListener('submit', handleFormSubmit);

function attachPhoto(studentId) {
    document.getElementById("student-page").style.display = 'none';
    document.getElementById("studentId").value = studentId;
    alert('Nice! Please attach student photo');
    document.getElementById("post-upload-page").style.display = 'block';
    return studentId;
}

function handleUploadFormSubmit(event) {
    event.preventDefault();
    var studentId = document.getElementById("studentId").value;

    const data = new FormData(event.target);
    data.append('studentPic', document.forms.uploadForm.studentPics.files[0]);


    $.ajax({
        url: "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/addStudentPics/" + studentId + "/" + userDataObject.token,
        type: "POST",
        data: data,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        success: function (response) {
            implementSubjects();
        },
        error: function (xhr, status, errorThrown) {
            //Here the status code can be retrieved like;
            xhr.status;
            //The message added to Response object in Controller can be retrieved as following.
            alert(xhr.responseText);
        }
    });
}
const formOrder = document.querySelector('.post-upload-form');
formOrder.addEventListener('submit', handleUploadFormSubmit);

function implementSubjects() {
    document.getElementById("student-page").style.display = 'none';
    alert('Finally! Please add offered subjects');
    document.getElementById("post-upload-page").style.display = 'none';
    document.getElementById("post-subject-page").style.display = 'block';
}

function submitStudentSubjects() {
    var studentId = document.getElementById("studentId").value;
    var subjects = $('#subjects option:selected').toArray().map(item => item.value).join(",");
    var termType = document.getElementById("termType").value;
    var schoolSession = document.getElementById("schoolSession").value;
    console.log(subjects);

    $.ajax({
        url: "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/addStudentSubjects/" + studentId + "/" + subjects + "/" + termType + "/" + schoolSession + "/" + userDataObject.token,
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data: '',
        success: function (response) {
            alert('Student subjects succesfully added');
            window.location.replace("StudentRegistration.html");
        },
        error: function (xhr, status, errorThrown) {
            //Here the status code can be retrieved like;
            xhr.status;
            //The message added to Response object in Controller can be retrieved as following.
            alert(xhr.responseText);
        }
    });
}

$(function () {
    $(":file").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });
});

function imageIsLoaded(e) {
    $('#myImg').attr('src', e.target.result);
}

function loadClassSubjects() {
    var eduClassId = document.getElementById("eduClassId").value;

    var request = new XMLHttpRequest();
    var urlClassTypeSpool = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getClassInfo/" + eduClassId + "/" + userDataObject.token;
    try {
        request.onreadystatechange = function () {
            if (request.readyState === 4 || request.readyState === 200) {
                var val = JSON.parse(request.responseText);
                document.getElementById("subjectList").value = val.subjects;
                offeredSubject();
            }
        };
        request.open("GET", urlClassTypeSpool, true);
        request.send();
    } catch (e) {
        alert(e);
    }
}

function displaySubjects() {
    var subjectsSelHTML = $('#subjects option:selected').toArray().map(item => item.text).join(", ");
    document.getElementById("displaySelText").innerHTML = subjectsSelHTML;
}

function offeredSubject() {
    clearSelected();
    var offeredSubjects = document.getElementById("offeredSubjects").value;
    if (offeredSubjects === "Elected") {
        document.getElementById("custom-subject").style.display = "block";
        var optionsToSelect = document.getElementById("subjectList").value.split(",");

        var select = document.getElementById('subjects');

        for (var i = 0, l = select.options.length, o; i < l; i++) {
            o = select.options[i];
            if (optionsToSelect.indexOf(o.value) != -1) {
                o.selected = true;
            }
        }
        displaySubjects();
    } else {
        document.getElementById("custom-subject").style.display = "none";
        var optionsToSelect = document.getElementById("subjectList").value.split(",");

        var select = document.getElementById('subjects');

        for (var i = 0, l = select.options.length, o; i < l; i++) {
            o = select.options[i];
            if (optionsToSelect.indexOf(o.value) != -1) {
                o.selected = true;
            }
        }
        displaySubjects();
    }
}

function clearSelected() {
    var elements = document.getElementById("subjects").options;

    for (var i = 0; i < elements.length; i++) {
        elements[i].selected = false;
    }
}

$(document).ajaxStart(function () {
    $("#loading").show();
});


$(document).ajaxStop(function () {
    $("#loading").hide();
});