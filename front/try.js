document.getElementById("input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    changeColorInput();
  }
});
function changeColorInput() {
  let color = document.getElementById('input').value;
  // Asegúrate de que colorIndicator y colorPicker están definidos en tu código
  colorIndicator.style.backgroundColor = `${color}`;
  colorPicker.color.hexString = color;
}
    
              
              
function mostrarMenu7() {
    var menu1 = document.getElementById("Menu1");
    var menu7 = document.getElementById("Menu7");
      
      if (menu1.value == "setappvolume") {
        menu7.style.display = "block"; 
      } else {
        menu7.style.display = "none"; 
      }
    }
    
function mostrarMenu8() {
      var menu3 = document.getElementById("Menu3");
      var menu8 = document.getElementById("Menu8");
      
      if (menu3.value == "setappvolume") {
        menu8.style.display = "block"; // Muestra el Menu8
      } else {
        menu8.style.display = "none";  // Oculta el Menu8
      }
    }
    
function mostrarMenu9() {
      var menu5 = document.getElementById("Menu5");
      var menu9 = document.getElementById("Menu9");
      
      if (menu5.value == "setappvolume") {
        menu9.style.display = "block"; // Muestra el Menu9
      } else {
        menu9.style.display = "none";  // Oculta el Menu9
      }
    }
    
function mostrarMenu10() {
      var menu2 = document.getElementById("Menu2");
      var menu10 = document.getElementById("Menu10");
      
      if (menu2.value == "muteapp") {
        menu10.style.display = "block"; // Muestra el Menu10
      } else {
        menu10.style.display = "none";  // Oculta el Menu10
      }
    }
    
function mostrarMenu11() {
      var menu4 = document.getElementById("Menu4");
      var menu11 = document.getElementById("Menu11");
      
      if (menu4.value == "muteapp") {
        menu11.style.display = "block"; // Muestra el Menu11
      } else {
        menu11.style.display = "none";  // Oculta el Menu11
      }
    }
    
function mostrarMenu12() {
      var menu6 = document.getElementById("Menu6");
      var menu12 = document.getElementById("Menu12");
      
      if (menu6.value == "muteapp") {
        menu12.style.display = "block"; // Muestra el Menu12
      } else {
        menu12.style.display = "none";  // Oculta el Menu12
      }
    }
      
    
function checkOnlyOne(checkbox) {
      let checkboxes = document.querySelectorAll('.checkbox');
          checkboxes.forEach((item) => {
            if (item !== checkbox) {
                item.checked = false;
                  }
              });
          }

function mandarDatos(){

let p1 = document.getElementById("Menu1").value;
let p2 = document.getElementById("Menu3").value;
let p3 = document.getElementById("Menu5").value;
let b1 = document.getElementById("Menu2").value;
let b2 = document.getElementById("Menu4").value;
let b3 = document.getElementById("Menu6").value;
let InsertarAplicacion1 = document.getElementById("Menu7").value;
let InsertarAplicacion2 = document.getElementById("Menu8").value;
let InsertarAplicacion3 = document.getElementById("Menu9").value;
let InsertarAplicacion4 = document.getElementById("Menu10").value;
let InsertarAplicacion5 = document.getElementById("Menu11").value;
let InsertarAplicacion6 = document.getElementById("Menu12").value;
let color = document.getElementById("input").value;
let led1 = document.getElementById("input1").value;
let led2 = document.getElementById("input2").value;
let led3 = document.getElementById("input3").value;
let led4 = document.getElementById("input4").value;

let datosFront = {
    p1:p1,
    p2:p2,
    p3:p3,
    b1:b1,
    b2:b2,
    b3:b3,
    InsertarAplicacionp1:InsertarAplicacion1,
    InsertarAplicacionp2:InsertarAplicacion2,
    InsertarAplicaciop3:InsertarAplicacion3,
    InsertarAplicacionb1:InsertarAplicacion4,
    InsertarAplicacionb2:InsertarAplicacion5,
    InsertarAplicacionb3:InsertarAplicacion6,
    color:color,
    led1:parpadeo,
    led2:arcoiris,
    led3:respiracion,
    led4:desplazamiento,
}
function aplicar(){
fetchData("funciones", (listasensores)=>{
    for(let i=1;i<listasensores.length;i++){
        if(datosFront[listasensores[i].nombre].includes("app")){
          listasensores[i].funcion=datosFront[`${listasensores[i].nombre}`];
          listasensores[i].appdata=datosFront[`InsertarAplicacion${listasensores[i].nombre}`]
        } else{
          listasensores[i].funcion=datosFront[`${listasensores[i].nombre}`];
        }
    }
    postData("corregir",listasensores,()=>{
      console.log("correcció hecho")
    })
});
}
}




