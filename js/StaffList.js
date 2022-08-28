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
    var urlSchoolStaff = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getAllSchoolStaff/" + userDataObject.token;
    try {
        request.onreadystatechange = function() {
            if (request.readyState === 4 || request.readyState === 200) {
                var val = JSON.parse(request.responseText);

                var tbl = $("<table/>").attr("id", "staffTable").attr("class", "table table-hover table-responsive");
                $("#tableDiv").append(tbl);
                var thead = "<thead> " +
                    "<tr>" +
                    "<th scope=\"col\">S/N</th>" +
                    "<th scope=\"col\">Names</th>" +
                    "<th scope=\"col\">Staff Id</th>" +
                    "<th scope=\"col\">Phone No.</th>" +
                    "<th scope=\"col\">Role</th>" +
                    "<th scope=\"col\">Status</th>" +
                    "<th scope=\"col\"></th>" +
                    "<th scope=\"col\"></th>" +
                    "</tr> " +
                    "</thead>";
                var tbody = "<tbody id=\"myTable\">";
                var tbodyEnd = "</tbody>";
                var count = 0;

                $("#staffTable").append(thead + tbody);
                for (var i = 0; i < val.length; i++) {
                    if (val[i]["staffId"] !== 'syst0000' && val[i]["staffId"] !== 'TECH0000') {
                        var count = count + 1;
                        var tr = "<tr class=\"staffBtn\">";
                        var tdId = "<input type=\"hidden\" id=\"schoolIdTbl\" value=\"" + val[i]["school"]["id"] + "\"/>"
                        var td1 = "<td>" + count + "</td>";
                        var td2 = "<td id=\"staffNameTbl\">" + val[i]["firstName"] + " " + val[i]["middleName"] + " " + val[i]["lastName"] + "</td>";
                        var td3 = "<td id=\"staffIdTbl\">" + val[i]["staffId"] + "</td>";
                        var td4 = "<td id=\"phoneTbl\">" + val[i]["phoneNumber"] + "</td>";
                        var td5 = "<td id=\"roleTbl\">" + val[i]["role"] + "</td>";
                        var td6 = "<td id=\"flagTbl\">" + val[i]["flag"] + "</td>";
                        var td7 = "<td><button type=\"button\" class=\"btn btn-primary\" data-id=\"" + val[i]["id"] + "\" data-toggle=\"modal\" data-target=\"#modStaffRole\">Role</button></td>";
                        var td8 = "<td><button type=\"button\" class=\"btn btn-outline-success\" data-id=\"" + val[i]["id"] + "\" data-toggle=\"modal\" data-target=\"#modStaffAccess\">Access</button></td></tr>";

                    }

                    $("#staffTable").append(tr + tdId + td1 + td2 + td3 + td4 + td5 + td6 + td7 + td8);
                }

                $("#staffTable").append(tbodyEnd);
            }
        }
        request.open("GET", urlSchoolStaff, true);
        request.send();
    } catch (e) {
        alert(e);
    }
});

$(document).on("click", ".staffBtn", function() {
    var eventId = $(this).find("button").data('id');
    var staffName = $(this).find("#staffNameTbl").html();
    var staffId = $(this).find("#staffIdTbl").html();
    var role = $(this).find("#roleTbl").html();
    var flag = $(this).find("#flagTbl").html();
    var schoolId = $(this).find("#schoolIdTbl").val();
    
    

    $('#idRole').val(eventId);
    $('#idAccess').val(eventId);
    $('#staffNameRole').val(staffName);
    $('#staffNameAccess').val(staffName);
    $('#staffIdRole').val(staffId);
    $('#staffIdAccess').val(staffId);
    $('#role').val(role);
    $('#flag').val(flag);
    $('#schoolIdRole').val(schoolId);
    $('#schoolIdAccess').val(schoolId);

});

function modifyRole() {
    
    var id = document.getElementById("idRole").value;
    var role = document.getElementById("role").value;

    const data = new FormData();
    data.append('token', userDataObject.token);
    data.append('modifyStaffId', id);
    data.append('newRole', role);

    const formJSON = Object.fromEntries(data.entries());

    $.ajax({
        url: "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/modifyStaffRole",
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(formJSON, null, 2),
        success: function() {
            alert("Successfully Modified");
            //Go to the shop's login page
            window.location.replace("AllSchoolStaff.html");
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
    $("#loadingRole").show();
});

$(document).ajaxStop(function() {
    $("#loadingRole").hide();
});

function modifyAccess() {
    var id = document.getElementById("idAccess").value;
    var flag = document.getElementById("flag").value;

    const data = new FormData();
    data.append('token', userDataObject.token);
    data.append('modifyStaffId', id);
    data.append('newAccess', flag);

    const formJSON = Object.fromEntries(data.entries());


    $(document).ajaxStart(function() {
        $("#loading").show();
    });

    $.ajax({
        url: "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/modifyStaffAccess",
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(formJSON, null, 2),
        success: function() {
            alert("Successfully Modified");
            //Go to the shop's login page
            window.location.replace("AllSchoolStaff.html");
        },
        error: function(xhr, status, errorThrown) {
            //Here the status code can be retrieved like;
            xhr.status;
            //The message added to Response object in Controller can be retrieved as following.
            alert(xhr.responseText);
        }
    });

    $(document).ajaxStop(function() {
        $("#loading").hide();
    });
}