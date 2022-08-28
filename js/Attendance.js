var userData = {
    storeUserDataInSession: function(userData) {
        var userObjectString = JSON.stringify(userData);
        window.sessionStorage.setItem('userObject', userObjectString);
    },
    getUserDataFromSession: function() {
        var userData = window.sessionStorage.getItem('userObject');
        return JSON.parse(userData);
    }
};

$(document).ready(function() {
    var request = new XMLHttpRequest();
    var urlClassType = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/allClassType/" + userDataObject.token;
    try {
        request.onreadystatechange = function() {
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
                } else {
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
        request.onreadystatechange = function() {
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
    var eduClassId = document.getElementById("eduClassId").value;
    var stillInSchool = 1;
    var urlSchoolStudent;
    $("#studentTable").empty();

    urlSchoolStudent = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getAllStudentsInClassRoomWithStillInSchool/" + stillInSchool + "/" + eduClassId + "/" + userDataObject.token;

    var request = new XMLHttpRequest();
    try {
        request.onreadystatechange = function() {
            if (request.readyState === 4 || request.readyState === 200) {
                var val = JSON.parse(request.responseText);

                var tbl = $("<table/>").attr("id", "studentTable").attr("class", "table table-hover table-responsive");
                $("#tableDiv").append(tbl);
                var thead = "<thead> " +
                    "<tr>" +
                    "<th scope=\"col\">S/N</th>" +
                    "<th scope=\"col\">Names</th>" +
                    "<th scope=\"col\">Gender</th>" +
                    "<th scope=\"col\">Class</th>" +
                    "<th scope=\"col\">Arm</th>" +
                    "<th scope=\"col\">Mark (If present)</th>" +
                    "<th scope=\"col\">Attendance Date<input type=\"date\" class=\"form-control form-control-user\" id=\"attendanceDate\"></th>" +
                    "<th scope=\"col\"><button class=\"btn-sm btn-success\" id=\"submitBtn\" onclick=\"markRegister()\" type=\"button\">Submit</button></th>" +
                    "</tr> " +
                    "</thead>";
                var tbody = "<tbody id=\"myTable\">";
                var tbodyEnd = "</tbody>";
                var count = 0;

                $("#studentTable").append(thead + tbody);
                for (var i = 0; i < val.length; i++) {
                    var count = count + 1;
                    var tr = "<tr class=\"studentBtn\">";
                    // var tdId = "<input type=\"hidden\" id=\"eduClassId\" value=\"" + val[i]["studentClass"]["id"] + "\"/>"
                    var td1 = "<td>" + count + "</td>";
                    var td2 = "<td id=\"studentNameTbl\">" + val[i]["firstName"] + " " + val[i]["middleName"] + " " + val[i]["lastName"] + "</td>";
                    var td3 = "<td id=\"phoneTbl\">" + val[i]["gender"] + "</td>";
                    var td4 = "<td id=\"flagTbl\">" + displayClassName(val[i]["studentClass"]["className"]) + "</td>";
                    var td5 = "<td id=\"flagTbl\">" + val[i]["studentClass"]["arm"] + "</td>";
                    var td6 = "<td style=\"text-align: center;\"><input type=\"checkbox\" name=\"studReg\" class=\"btn btn-primary\" value=\"" + val[i]["id"] + "\" /></td>";

                    $("#studentTable").append(tr + td1 + td2 + td3 + td4 + td5 + td6);
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

function markRegister() {
    var studentIdArrayStr = document.getElementsByName('studReg');
    var studentIdArray = [];
    for (var i = 0; i < studentIdArrayStr.length; i++) {
        if (studentIdArrayStr[i].checked) {
            var studentId = studentIdArrayStr[i].value;
            studentIdArray.push(studentId);
        }
    }

    var eduClassId = document.getElementById("eduClassId").value;
    var attendanceDate = document.getElementById("attendanceDate").value;
    if (attendanceDate === '' || attendanceDate === null) {
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        var today = year + "-" + month + "-" + day;

        attendanceDate = today;
    }

    const data = new FormData();
    data.append('termType', document.getElementById("termType").value);
    data.append('schoolSession', document.getElementById("schoolSession").value);
    data.append('attendanceDate', attendanceDate);
    const formJSON = Object.fromEntries(data.entries());

    $.ajax({
        url: "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/markClassAttendance/" + eduClassId + "/" + studentIdArray + "/" + userDataObject.token,
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(formJSON, null, 2),
        success: function(response) {
            console.log(response);
            alert('Attendance Marked');
            window.location.replace("Attendance.html");
        },
        error: function(xhr, status, errorThrown) {
            //Here the status code can be retrieved like;
            xhr.status;
            //The message added to Response object in Controller can be retrieved as following.
            alert(xhr.responseText);
        }
    });

}

$(document).ajaxStart(function() {
    $("#loading").show();
});


$(document).ajaxStop(function() {
    $("#loading").hide();
});