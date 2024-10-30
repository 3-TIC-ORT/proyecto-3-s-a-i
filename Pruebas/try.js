function changeColorInput() {
  let color = document.getElementById('input').value;

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
        menu8.style.display = "block"; 
      } else {
        menu8.style.display = "none";  
      }
    }
    
function mostrarMenu9() {
      var menu5 = document.getElementById("Menu5");
      var menu9 = document.getElementById("Menu9");
      
      if (menu5.value == "setappvolume") {
        menu9.style.display = "block"; 
      } else {
        menu9.style.display = "none";  
      }
    }
    
function mostrarMenu10() {
      var menu2 = document.getElementById("Menu2");
      var menu10 = document.getElementById("Menu10");
      
      if (menu2.value == "muteapp") {
        menu10.style.display = "block"; 
      } else {
        menu10.style.display = "none";  
      }
    }
    
function mostrarMenu11() {
      var menu4 = document.getElementById("Menu4");
      var menu11 = document.getElementById("Menu11");
      
      if (menu4.value == "muteapp") {
        menu11.style.display = "block"; 
      } else {
        menu11.style.display = "none";  
      }
    }
    
function mostrarMenu12() {
      var menu6 = document.getElementById("Menu6");
      var menu12 = document.getElementById("Menu12");
      
      if (menu6.value == "muteapp") {
        menu12.style.display = "block"; 
      } else {
        menu12.style.display = "none";  
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



document.getElementById("aply").addEventListener( "click", aplicar);

function aplicar(){
  
  let datosFront = {
    p1:document.getElementById("Menu1").value,
    p2:document.getElementById("Menu3").value,
    p3:document.getElementById("Menu5").value,
    b1:document.getElementById("Menu2").value,
    b2:document.getElementById("Menu4").value,
    b3:document.getElementById("Menu6").value,
    InsertarAplicacion1:document.getElementById("Menu7").value,
    InsertarAplicacion2:document.getElementById("Menu8").value,
    InsertarAplicacion3:document.getElementById("Menu9").value,
    InsertarAplicacion4:document.getElementById("Menu10").value,
    InsertarAplicacion5:document.getElementById("Menu11").value,
    InsertarAplicacion6:document.getElementById("Menu12").value,
    color:document.getElementById("input").value,
    parpadeo:document.getElementById("input1").value,
    arcoiris:document.getElementById("input2").value,
    respiracion:document.getElementById("input3").value,
    desplazamiento:document.getElementById("input4").value,
  }

fetchData("funciones", (listasensores)=>{
    for(let i= 1;i<listasensores.length;i++){
        if(datosFront[`${listasensores[i].nombre}`]==="setappvolume" ||[`${listasensores[i].nombre}`]==="muteapp"){
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
};


