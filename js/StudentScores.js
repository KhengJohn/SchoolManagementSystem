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
    var stillInSchool = 1;
    var urlSchoolStudent;
    $("#studentTable").empty();

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
                $("#tableDiv").empty();
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
                    var tdId = "<input type=\"hidden\" id=\"schoolIdTbl\" value=\"" + val[i]["school"]["id"] + "\"/>"
                    var td1 = "<td>" + count + "</td>";
                    var td2 = "<td id=\"studentNameTbl\">" + val[i]["firstName"] + " " + val[i]["middleName"] + " " + val[i]["lastName"] + "</td>";
                    var td3 = "<td id=\"staffIdTbl\">" + val[i]["dateOfBirth"] + "</td>";
                    var td4 = "<td id=\"phoneTbl\">" + val[i]["gender"] + "</td>";
                    var td5 = "<td id=\"roleTbl\">" + val[i]["phone"] + "</td>";
                    var td6 = "<td id=\"flagTbl\">" + val[i]["email"] + "</td>";
                    var td7 = "<td id=\"flagTbl\">" + displayClassName(val[i]["studentClass"]["className"]) + "</td>";
                    var td8 = "<td id=\"studentClassTbl\">" + val[i]["studentClass"]["arm"] + "</td>";

                    var stillInSchoolReq;
                    if (val[i]["stillInSchool"]) {
                        stillInSchoolReq = "Yes";
                    } else {
                        stillInSchoolReq = "No";
                    }

                    var td9 = "<td id=\"flagTbl\">" + stillInSchoolReq + "</td>";

                    var td10 = "<td><button type=\"button\" class=\"btn btn-primary\" data-id=\"" + val[i]["id"] + "\" data-toggle=\"modal\" data-target=\"#modInputScores\">Input Scores</button></td>";
                    var td11 = "<td><button type=\"button\" class=\"btn btn-outline-success\" data-id=\"" + val[i]["id"] + "\" data-toggle=\"modal\" data-target=\"#modViewScores\">View Scores</button></td></tr>";

                    $("#studentTable").append(tr + tdId + td1 + td2 + td3 + td4 + td5 + td6 + td7 + td8 + td9 + td10 + td11);
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

$(document).on("click", ".studentBtn", function () {
    var eventId = $(this).find("button").data('id');
    var studentName = $(this).find("#studentNameTbl").html();;
    var studentClass = $(this).find("#studentClassTbl").html();

    $('#studentId').val(eventId);
    $('#studentName').val(studentName);
    $('#studentNameView').val(studentName);
    $('#studentClass').val(studentClass);
});

$(document).on("click", ".performanceScoreDiv", function () {
    $("#inputScoreDiv").empty();
    var btnClicked = $(this).find("button").data('id');
    $('#headerNameSpan').html(btnClicked);

    var scoreType = $(this).find("button").data('id');

    var studentId = $('#studentId').val();
    var termType = $('#termType').val();
    var schoolSession = $('#schoolSession').val();
    var url;
    var request = new XMLHttpRequest();
    studentSubjects(studentId, termType, schoolSession).then(function (value) {
        var subjectOfferedArray = value

        switch (scoreType) {
            case "Test - 1":
                url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getTestScore1/" + studentId + "/" + termType + "/" + schoolSession + "/" + userDataObject.token;
                break;

            case "Test - 2":
                url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getTestScore2/" + studentId + "/" + termType + "/" + schoolSession + "/" + userDataObject.token;
                break;

            case "Test - 3":
                url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getTestScore3/" + studentId + "/" + termType + "/" + schoolSession + "/" + userDataObject.token;
                break;

            case "Test - 4":
                url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getTestScore4/" + studentId + "/" + termType + "/" + schoolSession + "/" + userDataObject.token;
                break;

            case "Assignment":
                url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getAssignmentScore/" + studentId + "/" + termType + "/" + schoolSession + "/" + userDataObject.token;
                break;

            case "Project":
                url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getProjectScore/" + studentId + "/" + termType + "/" + schoolSession + "/" + userDataObject.token;
                break;

            case "Examination":
                url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getExamScore/" + studentId + "/" + termType + "/" + schoolSession + "/" + userDataObject.token;
                break;

            case "Other":
                url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getOtherScore/" + studentId + "/" + termType + "/" + schoolSession + "/" + userDataObject.token;
                break;
        }

        try {
            request.onreadystatechange = function () {
                if (request.readyState === 4 || request.readyState === 200) {
                    console.log(request.responseText);
                    if (request.responseText != '') {
                        var val = JSON.parse(request.responseText);

                        var tbl = $("<div/>").attr("id", "scoreSubject").attr("class", "");
                        $("#inputScoreDiv").append(tbl);
                        for (var i = 0; i < subjectOfferedArray.length; i = i + 2) {
                            var divStart = "<div class=\"form-group row\">";
                            var td1 = '<div class="col-sm-6 mb-3 mb-sm-0">' +
                                '<label>' + getLabel(subjectOfferedArray[i]) + '</label>' +
                                '<input type="number" step="0.01" class="form-control form-control-user" name="' + subjectOfferedArray[i] + '" id="' + subjectOfferedArray[i] + '" value="' + val[subjectOfferedArray[i]] + '">' +
                                '</div>';
                            var td2 = '';
                            if ((i + 1) < subjectOfferedArray.length) {
                                td2 = '<div class="col-sm-6 mb-3 mb-sm-0">' +
                                    '<label>' + getLabel(subjectOfferedArray[i + 1]) + '</label>' +
                                    '<input type="number" step="0.01" class="form-control form-control-user" name="' + subjectOfferedArray[i + 1] + '" id="' + subjectOfferedArray[i + 1] + '" value="' + val[subjectOfferedArray[i + 1]] + '">' +
                                    '</div>';
                            }
                            var divEnd = '</div>';
                            $("#scoreSubject").append(divStart + td1 + td2 + divEnd);
                        }
                    } else {
                        loadSubjects();
                    }
                }
            }
            request.open("GET", url, true);
            request.send();
        } catch (e) {
            alert(e);
        }
    }).catch(function (valueError) {
        //error handler function is invoked
        console.log("Error value>>>>> " + valueError);
    });

});

function loadSubjects() {
    $("#inputScoreDiv").empty();

    var studentId = document.getElementById("studentId").value;
    var termType = document.getElementById("termType").value;
    var schoolSession = document.getElementById("schoolSession").value;

    var request = new XMLHttpRequest();
    var urlSchoolStudent = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getStudentSubjects/"
        + studentId + "/" + termType + "/" + schoolSession + "/" + userDataObject.token;

    try {
        request.onreadystatechange = function () {
            if (request.readyState === 4 || request.readyState === 200) {
                var val = JSON.parse(request.responseText);
                var subjectOfferedArray = val.subjectsOffered.split(",");
                var tbl = $("<div/>").attr("id", "scoreSubject").attr("class", "");
                $("#inputScoreDiv").append(tbl);
                for (var i = 0; i < subjectOfferedArray.length; i = i + 2) {
                    var divStart = "<div class=\"form-group row\">";
                    var td1 = '<div class="col-sm-6 mb-3 mb-sm-0">' +
                        '<label>' + getLabel(subjectOfferedArray[i]) + '</label>' +
                        '<input type="number" step="0.01" class="form-control form-control-user" name="' + subjectOfferedArray[i] + '" id="' + subjectOfferedArray[i] + '" placeholder="Enter Scores">' +
                        '</div>';
                    var td2 = '';
                    if ((i + 1) < subjectOfferedArray.length) {
                        td2 = '<div class="col-sm-6 mb-3 mb-sm-0">' +
                            '<label>' + getLabel(subjectOfferedArray[i + 1]) + '</label>' +
                            '<input type="number" step="0.01" class="form-control form-control-user" name="' + subjectOfferedArray[i + 1] + '" id="' + subjectOfferedArray[i + 1] + '" placeholder="Enter Scores">' +
                            '</div>';
                    }
                    var divEnd = '</div>';
                    $("#scoreSubject").append(divStart + td1 + td2 + divEnd);
                }
            }
        }
        request.open("GET", urlSchoolStudent, true);
        request.send();
    } catch (e) {
        alert(e);
    }
}

function getLabel(selectedSubject) {
    let label;
    switch (selectedSubject) {
        case "agriculturalScience": label = "Agricultural Science"; break;
        case "arabic": label = "Arabic"; break;
        case "basicScience": label = "Basic Science"; break;
        case "basicTechnology": label = "Basic Technology"; break;
        case "bibleKnowledge": label = "Bible Knowledge"; break;
        case "biology": label = "Biology"; break;
        case "bookKeeping": label = "Book Keeping"; break;
        case "businessStudies": label = "Business Studies"; break;
        case "chemistry": label = "Chemistry"; break;
        case "christianReligionStudies": label = "Christian Religion Studies"; break;
        case "civic": label = "Civic"; break;
        case "civicEducation": label = "Civic Education"; break;
        case "commerce": label = "Commerce"; break;
        case "computer": label = "Computer"; break;
        case "computerScience": label = "Computer Science"; break;
        case "computerStudies": label = "Computer Studies"; break;
        case "creativeArts": label = "Creative Arts"; break;
        case "culturalAndCreativeArts": label = "Cultural And Creative Arts"; break;
        case "dataProcessing": label = "Data Processing"; break;
        case "economics": label = "Economics"; break;
        case "elementaryScience": label = "Elementary Science"; break;
        case "englishComposition": label = "English Composition"; break;
        case "englishGrammar": label = "English Grammar"; break;
        case "englishLanguage": label = "English Language"; break;
        case "financialAccount": label = "Financial Account"; break;
        case "fineArtCreativeArt": label = "Fine Art / Creative Art"; break;
        case "french": label = "French"; break;
        case "furtherMathematics": label = "Further Mathematics"; break;
        case "geography": label = "Geography"; break;
        case "government": label = "Government"; break;
        case "handwriting": label = "Hand Writing"; break;
        case "hausa": label = "Hausa"; break;
        case "healthEducation": label = "Health Education"; break;
        case "healthHabit": label = "Health Habit"; break;
        case "history": label = "History"; break;
        case "homeEconomics": label = "Home Economics"; break;
        case "igbo": label = "Igbo"; break;
        case "islamicReligionStudies": label = "Islamic Religion Studies"; break;
        case "languages": label = "Languages"; break;
        case "letterworkPhonicMethod": label = "Letterwork Phonic Method"; break;
        case "literatureInEnglish": label = "Literature In English"; break;
        case "marketing": label = "Marketing"; break;
        case "mathematics": label = "Mathematics"; break;
        case "moralInstruction": label = "Moral Instruction"; break;
        case "music": label = "Music"; break;
        case "nigerianLanguages": label = "Nigerian Languages"; break;
        case "officePractice": label = "Office Practice"; break;
        case "phonics": label = "Phonics"; break;
        case "physicalAndHealthEducation": label = "Physical And Health Education"; break;
        case "physicalExercise": label = "Physical Exercise"; break;
        case "physics": label = "Physics"; break;
        case "quantitativeReasoning": label = "Quantitative Reasoning"; break;
        case "religiousKnowledge": label = "Religious Knowledge"; break;
        case "rhymesSongs": label = "Rhymes Songs"; break;
        case "scientificAndReflectiveThinking": label = "Scientific And Reflective Thinking"; break;
        case "socialHabit": label = "Social Habit"; break;
        case "socialStudies": label = "Social Studies"; break;
        case "spelling": label = "Spelling"; break;
        case "storyTelling": label = "Story Telling"; break;
        case "technicalDrawing": label = "Technical Drawing"; break;
        case "typewriting": label = "Typewriting"; break;
        case "verbalReasoning": label = "Verbal Reasoning"; break;
        case "vocationalAptitude": label = "Vocational Aptitude"; break;
        case "writingPatterns": label = "Writing Patterns"; break;
        case "yoruba": label = "Yoruba"; break;
        case "numberWork": label = "Number Work"; break;
    }
    return label;
}

function handleFormSubmit(event) {
    event.preventDefault();
    var scoreType = $('#headerNameSpan').html();
    var studentId = $('#studentId').val();
    var termType = $('#termType').val();
    var schoolSession = $('#schoolSession').val();
    var url;
    const data = new FormData(event.target);
    data.append('termType', termType);
    data.append('schoolSession', schoolSession);
    const formJSON = Object.fromEntries(data.entries());

    switch (scoreType) {
        case "Test - 1":
            url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/modifyTestScore1/" + studentId + "/" + userDataObject.token;
            break;

        case "Test - 2":
            url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/modifyTestScore2/" + studentId + "/" + userDataObject.token;
            break;

        case "Test - 3":
            url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/modifyTestScore3/" + studentId + "/" + userDataObject.token;
            break;

        case "Test - 4":
            url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/modifyTestScore4/" + studentId + "/" + userDataObject.token;
            break;

        case "Assignment":
            url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/modifyAssignmentScore/" + studentId + "/" + userDataObject.token;
            break;

        case "Project":
            url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/modifyProjectScore/" + studentId + "/" + userDataObject.token;
            break;

        case "Examination":
            url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/modifyExamScore/" + studentId + "/" + userDataObject.token;
            break;

        case "Other":
            url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/modifyOtherScore/" + studentId + "/" + userDataObject.token;
            break;
    }


    $.ajax({
        url: url,
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(formJSON, null, 2),
        success: function (response) {
            alert("Scores added successfully!");
            //Go to the shop's login page
            window.location.replace("StudentScores.html");
        },
        error: function (xhr, status, errorThrown) {
            //Here the status code can be retrieved like;
            xhr.status;
            //The message added to Response object in Controller can be retrieved as following.
            alert(xhr.responseText);
        }
    });
}

const formScore = document.querySelector('.post-scores-form');
formScore.addEventListener('submit', handleFormSubmit);

$(document).ajaxStart(function () {
    $("#loading").show();
});


$(document).ajaxStop(function () {
    $("#loading").hide();
});

$(document).ajaxStart(function () {
    $("#spool_loading").show();
});


$(document).ajaxStop(function () {
    $("#spool_loading").hide();
});

$(document).on("click", ".performanceScoreViewDiv", function () {
    $("#viewScoreDiv").empty();
    var scoreType = $(this).find("button").data('id');
    $('#headerNameViewSpan').html(scoreType);

    var studentId = $('#studentId').val();
    var termType = $('#termTypeView').val();
    var schoolSession = $('#schoolSessionView').val();
    var url;
    var request = new XMLHttpRequest();
    studentSubjects(studentId, termType, schoolSession).then(function (value) {
        var subjectOfferedArray = value

        switch (scoreType) {
            case "Test - 1":
                url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getTestScore1/" + studentId + "/" + termType + "/" + schoolSession + "/" + userDataObject.token;
                break;

            case "Test - 2":
                url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getTestScore2/" + studentId + "/" + termType + "/" + schoolSession + "/" + userDataObject.token;
                break;

            case "Test - 3":
                url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getTestScore3/" + studentId + "/" + termType + "/" + schoolSession + "/" + userDataObject.token;
                break;

            case "Test - 4":
                url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getTestScore4/" + studentId + "/" + termType + "/" + schoolSession + "/" + userDataObject.token;
                break;

            case "Assignment":
                url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getAssignmentScore/" + studentId + "/" + termType + "/" + schoolSession + "/" + userDataObject.token;
                break;

            case "Project":
                url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getProjectScore/" + studentId + "/" + termType + "/" + schoolSession + "/" + userDataObject.token;
                break;

            case "Examination":
                url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getExamScore/" + studentId + "/" + termType + "/" + schoolSession + "/" + userDataObject.token;
                break;

            case "Other":
                url = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getOtherScore/" + studentId + "/" + termType + "/" + schoolSession + "/" + userDataObject.token;
                break;
        }

        try {
            request.onreadystatechange = function () {
                if (request.readyState === 4 || request.readyState === 200) {
                    var val = JSON.parse(request.responseText);

                    var tbl = $("<div/>").attr("id", "viewSubject").attr("class", "");
                    $("#viewScoreDiv").append(tbl);
                    for (var i = 0; i < subjectOfferedArray.length; i = i + 2) {
                        var divStart = "<div class=\"form-group row\">";
                        var td1 = '<div class="col-sm-6 mb-3 mb-sm-0">' +
                            '<label>' + getLabel(subjectOfferedArray[i]) + '</label>' +
                            '<input type="number" step="0.01" class="form-control form-control-user" name="' + subjectOfferedArray[i] + '" id="' + subjectOfferedArray[i] + '" value="' + val[subjectOfferedArray[i]] + '" readonly>' +
                            '</div>';
                        var td2 = '';
                        if ((i + 1) < subjectOfferedArray.length) {
                            td2 = '<div class="col-sm-6 mb-3 mb-sm-0">' +
                                '<label>' + getLabel(subjectOfferedArray[i + 1]) + '</label>' +
                                '<input type="number" step="0.01" class="form-control form-control-user" name="' + subjectOfferedArray[i + 1] + '" id="' + subjectOfferedArray[i + 1] + '" value="' + val[subjectOfferedArray[i + 1]] + '" readonly>' +
                                '</div>';
                        }
                        var divEnd = '</div>';
                        $("#viewSubject").append(divStart + td1 + td2 + divEnd);
                    }

                }
            };
            request.open("GET", url, true);
            request.send();
        } catch (e) {
            alert(e);
        }
    }).catch(function (valueError) {
        //error handler function is invoked
        console.log("Error value>>>>> " + valueError);
    });
});


let studentSubjects = function (studentId, termType, schoolSession) {
    return new Promise(function (viewSubjects, reject) {
        var urlSchoolSubject = "https://schoolrm.herokuapp.com/" + userDataObject.staff.school.schoolCode + "/getStudentSubjects/"
            + studentId + "/" + termType + "/" + schoolSession + "/" + userDataObject.token;
        var request = new XMLHttpRequest();
        try {
            var val;
            request.onreadystatechange = function () {
                if (request.readyState === 4 || request.readyState === 200) {
                    val = JSON.parse(request.responseText);
                    var subjectOfferedArray = val.subjectsOffered.split(",");
                    viewSubjects(subjectOfferedArray);
                }
            }
            request.open("GET", urlSchoolSubject, true);
            request.send();
        } catch (e) {
            reject("No subjects!");
        }
    });
}
