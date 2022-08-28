/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    try {

        // var path = window.location.pathname;
        // var page = path.split("/").pop();
        var navBar;

        var userDataObject = userData.getUserDataFromSession();
        console.log(userDataObject);
        // document.getElementById("staffId").value = userDataObject.staffInfo.body.staffId;
        // document.getElementById("schoolCode").value = userDataObject.staff.school.schoolCode;
        // document.getElementById("token").value = userDataObject.token;



        var role = userDataObject.staff.role;

        if (role !== 'superuser' && role !== 'admin' && role !== 'officeadmin') {
            navBar = ``;
        } else if (role === 'officeadmin') {
            navBar = ``;
        } else if (role === 'admin') {
            navBar = ``;
        } else if (role === 'superuser') {
            navBar = `<nav class="navbar">
                        <div class="brand-title"><img src="./img/logo.png" alt="logo" class="logo" /></div>
                        <a href="#" class="toggle-button">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </a>
                        <div id="navbar-links" class="navbar-links active">
                    
                            <ul>
                            <li class="dropdown">
                                <a href="#" class="dropbtn">Student</a>
                                <div class="dropdown-content">
                                    <ul><a href="StudentRegistration.html">Register Students</a></ul>
                                    <ul><a href="StudentList.html">Students List</a></ul>
                                    <ul><a href="StudentScores.html">Continuous Assessment</a></ul>
                                </div>
                            </li>
                            <li class="dropdown">
                                    <a href="#" class="dropbtn">Staff</a>
                                    <div class="dropdown-content">
                                        <ul><a href="CreateStaff.html">Create</a></ul>
                                        <ul><a href="AllSchoolStaff.html">All Staff</a></ul>   
                                    </div>
                                </li>
                                <li class="dropdown">                                
                                    <a href="#" class="dropbtn">School</a>
                                    <div class="dropdown-content">
                                        <ul><a href="Attendance.html">Attendance</a></ul>
                                        <ul><a href="SchoolStatus.html">Status</a></ul>
                                        <ul><a href="CreateClass.html">Create Class</a></ul>
                                        <ul><a href="SetSession.html">Set Session</a></ul>
                                    </div>
                                </li>
                                <li class="dropdown">
                                    <a href="#" class="dropbtn">Financial</a>
                                    <div class="dropdown-content">
                                        <ul><a href="Income.html">Income Posting</a></ul>
                                        <ul><a href="Expense.html">Expense Posting</a></ul>  
                                        <ul><a href="CreateGL.html">Create GL - Account</a></ul>                        
                                    </div>
                                </li>
                            
                                <li class="dropdown">                                
                                    <a href="#" class="dropbtn">Other Reports</a>
                                    <div class="dropdown-content">
                                        <ul><a href="ExpenseSpool.html">Expense Spool</a></ul>
                                        <ul><a href="IncomeSpool.html">Income Spool</a></ul>
                                        <ul><a href="ProfitAndLoss.html">P-L Report</a></ul>
                                        <ul><a href="SchoolCabal.html">School Cabal</a></ul>
                                    </div>
                                </li>
                                <li class="dropdown">
                                    <a href="#" class="dropbtn">Personal Settings</a>
                                    <div class="dropdown-content">
                                        <ul><a href="ModifyPassword.html">Modify Password</a></ul>
                                    </div>
                                </li>
                                <li><a href="#" onclick="logout()">Sign Out</a></li>
                            </ul>
                        </div>
                    </nav>`;
        }
        $("#navDiv").append(navBar);
        const toggleButton = document.getElementsByClassName('toggle-button')[0];
        const navbarLinks = document.getElementById('navbar-links');
        const toggleBars = document.querySelectorAll('.toggle-button .bar');

        toggleButton.addEventListener('click', () => {
            navbarLinks.classList.toggle('block');
            toggleBars.forEach((bar) => {
                bar.classList.toggle('active');
            });
        });

    } catch (e) {
        window.location.replace("index.html");
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

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
}

var userDataObject = userData.getUserDataFromSession();

function logout() {
    // 
    // 
    const data = new FormData();
    $.ajax({
        url: "https://schoolrm.herokuapp.com/logout/" + userDataObject.token,
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data: '',
        success: function () {
            //Go to the shop's login page
            window.sessionStorage.clear();
            window.location.replace("index.html");
        },
        error: function (xhr, status, errorThrown) {
            //Here the status code can be retrieved like;
            xhr.status;
            //The message added to Response object in Controller can be retrieved as following.
            window.sessionStorage.clear();
            window.location.replace("index.html");
        }
    });
}

//$(document).ready(function () {
//    var hours = 24; // Reset when storage is more than 24hours
//    var now = new Date().getTime();
//    var setupTime = localStorage.getItem('setupTime');
//    if (setupTime === null) {
//        localStorage.setItem('setupTime', now);
//    } else {
//        if (now - setupTime > hours * 60 * 60 * 1000) {
//            window.sessionStorage.clear();
//            localStorage.clear();
//            localStorage.setItem('setupTime', now);
//        }
//    }
//});

var idleTime = 0;
$(document).ready(function () {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });
});

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 4) { // 5 minutes
        logout();
        //        window.sessionStorage.clear();
        //        window.location.reload();
    }
}
window.addEventListener('load', function () {
    function updateOnlineStatus(event) {
        var condition = navigator.onLine ? "online" : "offline";
        alert
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
});