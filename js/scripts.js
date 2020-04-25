function onlyNums(e) {
    var code = window.event?e.which:e.keyCode;
    return !(code < 48 || code > 57);
}

function begin() {
    var vOne = document.getElementById('valueOne').value;
    var vTwo = document.getElementById('valueTwo').value;
    //const options = document.getElementById('opt').options

    var dates = [

        {
            code: "32423",
            name: "Juan Roa"
        },
        {
            code: "98734",
            name: "Maria Rojas"
        },
        {
            code: "8927423",
            name: "Lola Hernandez"
        }
]

    dates.forEach((record) =>{
        alert(`Codigo=${record.code} Name=${record.name}`)
    })

}

$(document).ready(function () {
    $('#btnHide').click( () =>{
       $('#layout').fadeOut('slow');
    });

    $('#btnView').click( () =>{
       $('#layout').fadeIn('slow');
    });
})
function operaciones(){
        var nOne = document.getElementById("numOne").value;
        nOne = parseInt(nOne);
        var nTwo = document.getElementById("numTwo").value;
        nTwo = parseInt(nTwo);

        var option = document.getElementById('option');
       alert(option.value);
        switch (option.selectedIndex) {
          case 1: result = nOne + nTwo;
            break;
          case 2:
            result = nOne>nTwo?nOne-nTwo: nTwo-nOne;
            break;
          case 3:
          result = nOne*nTwo;
          break;
          case 4:
            result =  nOne>nTwo? nOne/nTwo:0;
            break;
          default:
        }
        var r = document.getElementById("result");
        r.innerHTML = "El resultado es " + result;
      }


