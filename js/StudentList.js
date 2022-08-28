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
                        $('#eduClassIdMod').append(newOption);
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

function loadClass() {
    $("#eduClassId").empty();

    var request = new XMLHttpRequest();
    var classNo = document.getElementById("classNo").value;
    var urlClassType = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getAllClassByClassName/" + classNo + "/" + userDataObject.token;
    try {
        request.onreadystatechange = function () {
            if (request.readyState === 4 || request.readyState === 200) {
                var val = JSON.parse(request.responseText);
                var newOption = $('<option/>');
                newOption.text("All Class Group");
                newOption.attr('value', "0");
                $('#eduClassId').append(newOption);
                for (var j = 0; j < val.length; j++) {
                    newOption = $('<option/>');
                    newOption.text(val[j].className + " ==> " + val[j].arm);
                    newOption.attr('value', val[j].id);
                    $('#eduClassId').append(newOption);
                }
            }
        };
        request.open("GET", urlClassType, true);
        request.send();
    } catch (e) {
        alert(e);
    }
}

function spoolStudentList() {
    var classNo = document.getElementById("classNo").value;
    var eduClassId = document.getElementById("eduClassId").value;
    var stillInSchool = document.getElementById("stillInSchool").value;
    var urlSchoolStudent;
    $("#studentTable").empty();

    if (stillInSchool === "All") {
        if (classNo === "0") {
            urlSchoolStudent = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getAllStudents/" + userDataObject.token;
            displayStudentTable(urlSchoolStudent);
        } else {
            if (eduClassId === "0") {
                urlSchoolStudent = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getStudentsInClassGroup/" + classNo + "/" + userDataObject.token;
                displayStudentTable(urlSchoolStudent);
            } else {
                urlSchoolStudent = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getAllStudentsInClassRoom/" + eduClassId + "/" + userDataObject.token;
                displayStudentTable(urlSchoolStudent);
            }
        }
    } else {
        if (classNo === "0") {
            urlSchoolStudent = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getAllStudentsWithStillInSchool/" + stillInSchool + "/" + userDataObject.token;
            displayStudentTable(urlSchoolStudent);
        } else {
            if (eduClassId === "0") {
                urlSchoolStudent = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getStudentsInClassGroupWithStillInSchool/" + stillInSchool + "/" + classNo + "/" + userDataObject.token;
                displayStudentTable(urlSchoolStudent);
            } else {
                urlSchoolStudent = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getAllStudentsInClassRoomWithStillInSchool/" + stillInSchool + "/" + eduClassId + "/" + userDataObject.token;
                displayStudentTable(urlSchoolStudent);
            }
        }
    }

}

function displayClassName(dbClassName) {
    var className;
    switch (dbClassName) {
        case "DAYCARE":
            className = "Daycare";
            break;
        case "PRE_NURSERY_ONE":
            className = "Pre-Nursery One";
            break;
        case "PRE_NURSERY_TWO":
            className = "Pre-Nursery Two";
            break;
        case "PRE_NURSERY_THREE":
            className = "Pre-Nursery Three";
            break;
        case "NURSERY_ONE":
            className = "Nursery One";
            break;
        case "NURSERY_TWO":
            className = "Nursery Two";
            break;
        case "NURSERY_THREE":
            className = "Nursery Three";
            break;
        case "PRIMARY_ONE":
            className = "Primary One";
            break;
        case "PRIMARY_TWO":
            className = "Primary Two";
            break;
        case "PRIMARY_THREE":
            className = "Primary Three";
            break;
        case "PRIMARY_FOUR":
            className = "Primary Four";
            break;
        case "PRIMARY_FIVE":
            className = "Primary Five";
            break;
        case "PRIMARY_SIX":
            className = "Primary Six";
            break;
        case "JUNIOR_SECONDARY_SCHOOL_ONE":
            className = "Junior Secondary School One";
            break;
        case "JUNIOR_SECONDARY_SCHOOL_TWO":
            className = "Junior Secondary School Two";
            break;
        case "JUNIOR_SECONDARY_SCHOOL_THREE":
            className = "Junior Secondary School Three";
            break;
        case "SENIOR_SECONDARY_SCHOOL_ONE":
            className = "Senior Secondary School One";
            break;
        case "SENIOR_SECONDARY_SCHOOL_TWO":
            className = "Senior Secondary School Two";
            break;
        case "SENIOR_SECONDARY_SCHOOL_THREE":
            className = "Senior Secondary School Three";
            break;
        case "TUTORIAL":
            className = "Daycare";
            break;
    }
    return className;
}

function displayStudentTable(urlSchoolStudent) {
    var request = new XMLHttpRequest();
    try {
        request.onreadystatechange = function () {
            if (request.readyState === 4 || request.readyState === 200) {
                var val = JSON.parse(request.responseText);

                var tbl = $("<table/>").attr("id", "studentTable").attr("class", "table table-hover table-responsive");
                $("#tableDiv").append(tbl);
                var thead = "<thead> " +
                    "<tr>" +
                    "<th scope=\"col\">S/N</th>" +
                    "<th scope=\"col\">Names</th>" +
                    "<th scope=\"col\">D.O.B</th>" +
                    "<th scope=\"col\">Gender</th>" +
                    "<th scope=\"col\">Phone No.</th>" +
                    "<th scope=\"col\">Email</th>" +
                    "<th scope=\"col\">Class</th>" +
                    "<th scope=\"col\">Arm</th>" +
                    "<th scope=\"col\">In School</th>" +
                    "<th scope=\"col\"></th>" +
                    "<th scope=\"col\"></th>" +
                    "<th scope=\"col\"></th>" +
                    "</tr> " +
                    "</thead>";
                var tbody = "<tbody id=\"myTable\">";
                var tbodyEnd = "</tbody>";
                var count = 0;

                $("#studentTable").append(thead + tbody);
                for (var i = 0; i < val.length; i++) {
                    var count = count + 1;
                    var tr = "<tr class=\"studentBtn\">";
                    var tdId = "<input type=\"hidden\" id=\"eduClassId\" value=\"" + val[i]["studentClass"]["id"] + "\"/>"
                    var td1 = "<td>" + count + "</td>";
                    var td2 = "<td id=\"studentNameTbl\">" + val[i]["firstName"] + " " + val[i]["middleName"] + " " + val[i]["lastName"] + "</td>";
                    var td3 = "<td id=\"staffIdTbl\">" + val[i]["dateOfBirth"] + "</td>";
                    var td4 = "<td id=\"phoneTbl\">" + val[i]["gender"] + "</td>";
                    var td5 = "<td id=\"roleTbl\">" + val[i]["phone"] + "</td>";
                    var td6 = "<td id=\"flagTbl\">" + val[i]["email"] + "</td>";
                    var td7 = "<td id=\"flagTbl\">" + displayClassName(val[i]["studentClass"]["className"]) + "</td>";
                    var td8 = "<td id=\"flagTbl\">" + val[i]["studentClass"]["arm"] + "</td>";

                    var stillInSchoolReq;
                    if (val[i]["stillInSchool"]) {
                        stillInSchoolReq = "Yes";
                    } else {
                        stillInSchoolReq = "No";
                    }

                    var td9 = "<td id=\"flagTbl\">" + stillInSchoolReq + "</td>";


                    var td10 = "<td><button type=\"button\" class=\"btn btn-primary\" data-id=\"" + val[i]["id"] + "\" data-toggle=\"modal\" data-target=\"#modOtherInfo\">Other Info</button></td>";
                    var td11 = "<td><button type=\"button\" class=\"btn btn-outline-success\" data-id=\"" + val[i]["id"] + "\" data-toggle=\"modal\" data-target=\"#modClass\">Modify Class</button></td>";
                    var td12 = "<td><button type=\"button\" class=\"btn btn-outline-secondary\" data-id=\"" + val[i]["id"] + "\" data-toggle=\"modal\" data-target=\"#modRegSubjects\">Reg Subjects</button></td></tr>";

                    $("#studentTable").append(tr + tdId + td1 + td2 + td3 + td4 + td5 + td6 + td7 + td8 + td9 + td10 + td11 + td12);
                }

                $("#studentTable").append(tbodyEnd);
            }
        }
        request.open("GET", urlSchoolStudent, true);
        request.send();
    } catch (e) {
        alert(e);
    }
}

$(document).on("click", ".studentBtn", function() {
    var eventId = $(this).find("button").data('id');
    var studentName = $(this).find("#studentNameTbl").html();
    var eduClassId = $(this).find("#eduClassId").val();    

    $('#studentId').val(eventId);
    $('#studentNameSubject').val(studentName); 
    $('#studentNameClass').val(studentName);    
    loadClassSubjects(eduClassId)

});


function loadClassSubjects(eduClassId) {
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

function submitStudentSubjects() {
    var studentId = document.getElementById("studentId").value;
    var subjects = $('#subjects option:selected').toArray().map(item => item.value).join(",");
    var termType = document.getElementById("termType").value;
    var schoolSession = document.getElementById("schoolSession").value;

    $.ajax({
        url: "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/modifyStudentSubjects/" + studentId + "/" + subjects + "/" + termType + "/" + schoolSession + "/" + userDataObject.token,
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        data: '',
        success: function (response) {
            alert('Student subjects succesfully added');
            window.location.replace("StudentList.html");
        },
        error: function (xhr, status, errorThrown) {
            //Here the status code can be retrieved like;
            xhr.status;
            //The message added to Response object in Controller can be retrieved as following.
            alert(xhr.responseText);
        }
    });
}

function modifyClass() {
    var studentId = document.getElementById("studentId").value;
    var eduClassId = document.getElementById("eduClassIdMod").value;

    $.ajax({
        url: "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/modifyStudentClass/" + studentId + "/" + eduClassId + "/" + userDataObject.token,
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        data: '',
        success: function (response) {
            alert(response);
            window.location.replace("StudentList.html");
        },
        error: function (xhr, status, errorThrown) {
            //Here the status code can be retrieved like;
            xhr.status;
            //The message added to Response object in Controller can be retrieved as following.
            alert(xhr.responseText);
        }
    });
}