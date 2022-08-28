/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    var request = new XMLHttpRequest();
    var schoolShortName = document.getElementById("schoolShortName").value;
    var urlStudent = "https://schoolrm.herokuapp.com/" + schoolShortName + "/allStudent";
    try {
        request.onreadystatechange = function () {
            if (request.readyState === 4 || request.readyState === 200) {
                var val = JSON.parse(request.responseText);
                var tbl = $("<table/>").attr("id", "studentTable").attr("class", "table table-borderless table-responsive");
                $("#tableDiv").append(tbl);
                var thead = "<thead> " +
                        "<tr>" +
                        "<th scope=\"col\">S/N</th>" +
                        "<th scope=\"col\">First Name</th>" +
                        "<th scope=\"col\">Middle Name</th>" +
                        "<th scope=\"col\">Last Name</th>" +
                        "<th scope=\"col\">Gender</th>" +
                        "<th scope=\"col\">Class</th>" +
                        "<th scope=\"col\">Arm</th>" +
                        "<th scope=\"col\">Contact No.</th>" +
                        "<th scope=\"col\">Still in School?</th>" +
                        "<th scope=\"col\">Reg. No.</th>" +                        
                        "</tr> " +
                        "</thead>";
                var tbody = "<tbody id=\"myTable\">";
                var tbodyEnd = "</tbody>";

                $("#studentTable").append(thead + tbody);
                for (var i = 0; i < val.length; i++) {
                    var j = i + 1;
                    var tr = "<tr class=\"studentBtn\">";
                    var td1 = "<td>" + j + "</td>";
                    var td2 = "<td id=\"studentNameTbl\">" + val[i]["studentName"] + "</td>\n\
                                           <td id=\"colourTbl\">" + val[i]["colour"] + "</td>\n\
                                           <td id=\"sizeTypeTbl\">" + val[i]["sizeType"] + "</td>\n\
                                           <td id=\"categoryTbl\">" + val[i]["category"]["categoryName"] + "</td>\n\
                                           <td id=\"unitCostTbl\">" + (val[i]["unitCost"]).toLocaleString() + "</td>\n\
                                           <td id=\"rateTbl\">" + (val[i]["rate"]).toLocaleString() + "</td>\n\
                                           <td id=\"unitInStockTbl\">" + val[i]["unitInStock"] + "</td>";
                    var td3 = "<td id=\"unitOnOrderTbl\">" + val[i]["unitOnOrder"] + "</td>";
                    var td4 = "<td id=\"reorderLevelTbl\">" + val[i]["reorderLevel"] + "</td>";
                    var td5 = "<td id=\"unitSoldTbl\">" + val[i]["unitSold"] + "</td>";
                    var td51 = "<td id=\"barcodeTbl\">" + val[i]["barcode"] + "</td>";
                    var td6 = "<td id=\"discountTbl\">" + val[i]["discount"] + "</td>";
                    if (val[i]["expiryDate"] === '8888-12-31') {
                        var td12 = "<td id=\"expiryDateTbl\" style=\"white-space: nowrap;\">-</td>";
                    } else {
                        var td12 = "<td id=\"expiryDateTbl\" style=\"white-space: nowrap;\">" + val[i]["expiryDate"] + "</td>";
                    }
                    if (val[i]["discountAvailable"] === 1) {
                        var td7 = "<td id=\"discountAvailableTbl\" style=\"color:blue;\">&#10004;</td>";
                    } else {
                        var td7 = "<td id=\"discountAvailableTbl\" style=\"color:red;\">&#10008;</td>";
                    }

                    if (val[i]["studentAvailable"] === 1) {
                        var td8 = "<td id=\"studentAvailableTbl\" style=\"color:blue;\">&#10004;</td>";
                    } else {
                        var td8 = "<td id=\"studentAvailableTbl\" style=\"color:red;\">&#10008;</td>";
                    }

                    var td9 = "<td><button type=\"button\" class=\"btn btn-primary\" data-id=\"" + val[i]["id"] + "\" data-toggle=\"modal\" data-target=\"#modStudent\">Modify</button></td>";
                    var td10 = "<td><button type=\"button\" class=\"btn btn-outline-danger\" data-id=\"" + val[i]["id"] + "\" data-toggle=\"modal\" data-target=\"#delStudent\">Delete</button></td></tr>";
                    if (val[i]["useCategoryPrice"] === 1) {
                        var td11 = "<td id=\"useCategoryPriceTbl\" style=\"color:blue;\">&#10004;</td>";
                    } else {
                        var td11 = "<td id=\"useCategoryPriceTbl\" style=\"color:red;\">&#10008;</td>";
                    }

                    $("#studentTable").append(tr + td1 + td2 + td3 + td4 + td5 + td51 + td6 + td12 + td7 + td8 + td11 + td9 + td10);
                }

                $("#studentTable").append(tbodyEnd);
            }
        };
        request.open("GET", urlStudent, true);
        request.send();
    } catch (e) {
        alert(e);
    }
});

