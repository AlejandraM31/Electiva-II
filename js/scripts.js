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
          if(nOne>nTwo){
            result=nOne-nTwo;
          }else{
            result=nTwo-nOne;
          }
          break;
          case 3:
          result = nOne*nTwo;
          break;
          case 4:
            result =  nOne>nTwo? nOne/nTwo:nTwo/nOne;
          if(nTwo==0){
            alert("La division por cero no existe,los numeros ingresados no pueden ser cero");
          }
          break;
          case 5:
          result=Math.pow(nOne,nTwo);
          break;
          case 6:
          var  dividendo;
          var  divisor;
          var  resto;
          if(nOne>nTwo){
            dividendo=nOne;
            divisor=nTwo;
          }else{
            dividendo=nTwo;
            divisor=nOne;
          }
          resto=dividendo%divisor;
          do{
           dividendo=divisor;
           divisor=resto;
           resto=dividendo%divisor;
           }while(resto!=0);
                result="El MCD de: " + nOne + " y " + nTwo + " es:  " +divisor;
                alert("El MCD es -->: "+ divisor);
            break;
            case 7:
              // alert("Numeros amigos");
             var cont;
             var sumaDiv=0;
             for(cont=1;cont<nOne;cont++){ //for para sumar los divisores propios del numero uno
                 if(nOne%cont==0){
                     sumaDiv=sumaDiv+cont;
                 }
             }
                //si la suma de los divisores de nOne es igual a nTwo
             if(sumaDiv==nTwo){
                 sumaDiv=0;
             for(cont=1;cont<nTwo;cont++){ //sumo los divisores propios de nTwo
                  if(nTwo%cont==0){
                   sumaDiv=sumaDiv+cont;
                  }
                  }
                //si la suma de los divisores de nTwo es igual  a nOne 
              if(sumaDiv==nOne){
                   result="Los numeros SÍ son Amigos";
              }else{
                   result="Los numeros NO son Amigos";
              }
              }
              else{
                result="Los numeros NO son Amigos";
              }
           break;
               case 8:
                alert("numeros primos table")
                var less=nOne<nTwo?nOne:nTwo;
	            var higher=nOne>nTwo?nOne:nTwo;
	            alert(`Mayor=${higher} Menor=${less}`);
	            document.getElementById("titHead").innerHTML="";
	            document.getElementById("titHead").appendChild(document.createTextNode(`Numeros primos del ${less} al ${higher}`));
                var tBody=document.getElementById("tblBody");
                document.getElementById("tblBody").innerHTML="";
                var contCousings=0;
                var sum=0;

                for(var cont=less;cont<=higher;cont++){
                    if(isCousing(cont)){
                        var row=document.createElement("tr");
                        var col=document.createElement("td");
                        col.appendChild(document.createTextNode(++contCousings));
                        row.appendChild(col);

                        col=document.createElement("td");
                        col.appendChild(document.createTextNode(cont));
                        row.appendChild(col);
                        tBody.appendChild(row);
                         sum+=cont;

                    }
                }
                document.getElementById("foot").appendChild(document.createTextNode(`Hay ${contCousings} numeros primos la Suma es ${sum}`));
                break;
            case 9:
                break;
          default:
        }
        var r = document.getElementById("result");
        r.innerHTML = "El resultado es " + result;
      }
function isCousing(n){
	var cont=2;
	var cousing=true;
	while(cont<=n/2 && cousing){
		cousing=!(n%cont++==0);
	}
	return cousing;
}


