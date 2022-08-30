var myArray = [
    {'class':'Primary one','arm':'A', 'teacherName':'John Idoko','viewSubject':'View','modify':'Modify'},
   
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
        <td>${data[i].class}</td>
        <td >${data[i].arm}</td>
        <td>${data[i].teacherName}</td>      
        <td>${data[i].viewSubject}</td>
        <td>${data[i].modify}</td>
        </tr> 
       ` 
       table.innerHTML += row
    }

}

