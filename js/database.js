
var myArray = [
    {'staffID':'UC/SF/22/01','name':'John Idoko', 'phoneNumber':'07036060982','role':'Teacher','status':'Active'},
    {'staffID':'SD02','name':'David Idoko', 'phoneNumber':'07036060982','role':'Cleaner', 'status':'Not Active'},
    {'staffID':'SD03','name':'Joy Sunday', 'phoneNumber':'07036060982','role':'Admin', 'status':'Active'},
    {'staffID':'SD04','name':'Queen Mark', 'phoneNumber':'07036060982','role':'Teacher', 'status':'Active'},
    {'staffID':'SD01','name':'Timothy Leonard', 'phoneNumber':'07036060982','role':'Teacher', 'status':'Active'},
    {'staffID':'SD01','name':'Afiniki Matthew', 'phoneNumber':'07036060982','role':'Teacher', 'status':'Active'},
    {'staffID':'SD01','name':'Bulus Bako', 'phoneNumber':'07036060982','role':'Admin', 'status':'Active'},
    {'staffID':'SD01','name':'Peter Elizabeth', 'phoneNumber':'07036060982','role':'Admin', 'status':'Active'},
    {'staffID':'SD01','name':'Caleb Andrew', 'phoneNumber':'07036060982','role':'Teacher', 'status':'Active'},
    {'staffID':'SD01','name':'Apana Monday', 'phoneNumber':'07036060982','role':'Teacher', 'status':'Not Active'},
    {'staffID':'SD01','name':'Alex Ladi', 'phoneNumber':'07036060982','role':'Teacher','status':'Active'},
    {'staffID':'SD01','name':'Racheal Barnabas', 'phoneNumber':'07036060982','role':'Teacher', 'status':'Active'},
]

$('#search-input').on('keyup', function(){
    const value = $(this).val()
    console.log('Value:', value)
    const data = searchTable(value, myArray)
    buildTable(data)
} )

buildTable(myArray)

function searchTable(value, data){
    const filteredData = []

    for(let i = 0; i < data.length; i++ ){
        value = value.toLowerCase()
        const name = data[i].name.toLowerCase()

        if(name.includes(value)){
            filteredData.push(data[i])
        }
    }
    return filteredData
}

function buildTable(data){
    var table = document.getElementById('myTable')

    table.innerHTML = ''
    for ( var i = 0; i < data.length; i++){
        const row = `
        <tr>
        <td>${data[i].staffID}</td>
        <td >${data[i].name}</td>
        <td>${data[i].phoneNumber}</td>      
        <td>${data[i].role}</td>
        <td>${data[i].status}</td>
        </tr> 
       ` 
       table.innerHTML += row
    }

}



var myStudentArray = [
    {'studentID':'UC/ST/22/01','name':'John Idoko', 'phoneNumber':'07036060982','status':'Active'},
    {'studentID':'SD02','name':'David Idoko', 'phoneNumber':'07036060982', 'status':'Not Active'},
    {'studentID':'SD03','name':'Joy Sunday', 'phoneNumber':'07036060982', 'status':'Active'},
    {'studentID':'SD04','name':'Queen Mark', 'phoneNumber':'07036060982','status':'Active'},
    {'studentID':'SD01','name':'Timothy Leonard', 'phoneNumber':'07036060982', 'status':'Active'},
    {'studentID':'SD01','name':'Afiniki Matthew', 'phoneNumber':'07036060982', 'status':'Active'},
    {'studentID':'SD01','name':'Bulus Bako', 'phoneNumber':'07036060982', 'status':'Active'},
    {'studentID':'SD01','name':'Peter Elizabeth', 'phoneNumber':'07036060982', 'status':'Active'},
    {'studentID':'SD01','name':'Caleb Andrew', 'phoneNumber':'07036060982','status':'Active'},
    {'studentID':'SD01','name':'Apana Monday', 'phoneNumber':'07036060982','role':'Teacher', 'status':'Not Active'},
    {'studentID':'SD01','name':'Alex Ladi', 'phoneNumber':'07036060982','status':'Active'},
    {'studentID':'SD01','name':'Racheal Barnabas', 'phoneNumber':'07036060982', 'status':'Active'},
]

$('#studentSearchInput').on('keyup', function(){
    const value = $(this).val()
    console.log('Value:', value)
    const data = searchStudentTable(value, myArray)
    buildStudentTable(data)
} )

buildStudentTable(myStudentArray)

function searchStudentTable(value, data){
    const filteredData = []

    for(let i = 0; i < data.length; i++ ){
        value = value.toLowerCase()
        const name = data[i].name.toLowerCase()

        if(name.includes(value)){
            filteredData.push(data[i])
        }
    }
    return filteredData
}

function buildStudentTable(data){
    var table = document.getElementById('myStudentTable')

    table.innerHTML = ''
    for ( var i = 0; i < data.length; i++){
        const row = `
        <tr>
        <td>${data[i].studentID}</td>
        <td >${data[i].name}</td>
        <td>${data[i].phoneNumber}</td>
        <td>${data[i].status}</td>
        </tr> 
       ` 
       table.innerHTML += row
    }

}