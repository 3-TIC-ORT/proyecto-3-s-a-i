document.getElementById('input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      changeColorInput();
  }
});

function changeColorInput() {
  let color = document.getElementById('input').value;

  colorIndicator.style.backgroundColor = `${color}`;
  colorPicker.color.hexString = color;
}

function mostrarMenu7() {
    var menu1 = document.getElementById("Menu1");
    var menu13 = document.getElementById("Menu13");
      
      if (menu1.value == "setappvolume") {
        menu13.style.display = "block"; 
      } else {
        menu13.style.display = "none"; 
      }
    }
    
function mostrarMenu8() {
      var menu3 = document.getElementById("Menu3");
      var menu14 = document.getElementById("Menu14");
      
      if (menu3.value == "setappvolume") {
        menu14.style.display = "block"; 
      } else {
        menu14.style.display = "none";  
      }
    }
    
function mostrarMenu9() {
      var menu5 = document.getElementById("Menu5");
      var menu15 = document.getElementById("Menu15");
      
      if (menu5.value == "setappvolume") {
        menu15.style.display = "block"; 
      } else {
        menu15.style.display = "none";  
      }
    }
    
function mostrarMenu10() {
      var menu2 = document.getElementById("Menu2");
      var menu16 = document.getElementById("Menu16");
      
      if (menu2.value == "muteapp") {
        menu16.style.display = "block"; 
      } else {
        menu16.style.display = "none";  
      }
    }
    
function mostrarMenu11() {
      var menu4 = document.getElementById("Menu4");
      var menu17 = document.getElementById("Menu17");
      
      if (menu4.value == "muteapp") {
        menu17.style.display = "block"; 
      } else {
        menu17.style.display = "none";  
      }
    }
    
function mostrarMenu12() {
      var menu6 = document.getElementById("Menu6");
      var menu18 = document.getElementById("Menu18");
      
      if (menu6.value == "muteapp") {
        menu18.style.display = "block"; 
      } else {
        menu18.style.display = "none";  
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

const input = document.getElementById("Menu7");
input.addEventListener("blur", () => {
  if (!input.value.endsWith(".exe") && input.value.trim() !== "") {
                  input.value += ".exe";
              }
          });

const input2 = document.getElementById("Menu8");
input2.addEventListener("blur", () => {
  if (!input2.value.endsWith(".exe") && input2.value.trim() !== "") {
      input2.value += ".exe";
}
});
      
const input3 = document.getElementById("Menu9");
input3.addEventListener("blur", () => {
  if (!input3.value.endsWith(".exe") && input3.value.trim() !== "") {
      input3.value += ".exe";
}
});

const input4 = document.getElementById("Menu10");
input4.addEventListener("blur", () => {
   if (!input4.value.endsWith(".exe") && input4.value.trim() !== "") {
        input4.value += ".exe";
}
});

const input5 = document.getElementById("Menu11");
input5.addEventListener("blur", () => {
  if (!input5.value.endsWith(".exe") && input5.value.trim() !== "") {
      input5.value += ".exe";
}
});


const input6 = document.getElementById("Menu12");
input6.addEventListener("blur", () => {
  if (!input6.value.endsWith(".exe") && input6.value.trim() !== "") {
      input6.value += ".exe";
            }
              });



document.getElementById("aply").addEventListener( "click", aplicar);

function aplicar(){
  
  let datosFront = {
    p1:document.getElementById("Menu1").value,
    p2:document.getElementById("Menu3").value,
    p3:document.getElementById("Menu5").value,
    b1:document.getElementById("Menu2").value,
    b2:document.getElementById("Menu4").value,
    b3:document.getElementById("Menu6").value,
    InsertarAplicacionp1:document.getElementById("Menu7").value,
    InsertarAplicacionp2:document.getElementById("Menu8").value,
    InsertarAplicacionp3:document.getElementById("Menu9").value,
    InsertarAplicacionb1:document.getElementById("Menu10").value,
    InsertarAplicacionb2:document.getElementById("Menu11").value,
    InsertarAplicacionb3:document.getElementById("Menu12").value,
    color:document.getElementById("input").value,
    parpadeo:document.getElementById("input1").value,
    arcoiris:document.getElementById("input2").value,
    respiracion:document.getElementById("input3").value,
    desplazamiento:document.getElementById("input4").value,
  }

  console.log(document.getElementById("Menu7"))
  console.log("Ivo:");
  console.log(datosFront);

fetchData("funciones", (listasensores)=>{

    for(let i= 1;i<listasensores.length;i++){
      listasensores[i].funcion=datosFront[`${listasensores[i].nombre}`];
      if(listasensores[i].funcion==="setappvolume" ||listasensores[i].funcion==="muteapp"){
        //console.log(datosFront[`InsertarAplicacion${listasensores[i].nombre}`]);
        listasensores[i].appdata=datosFront[`InsertarAplicacion${listasensores[i].nombre}`]
        }
    }
    postData("corregir",listasensores,()=>{
      console.log("correcció hecho")
    })
});
};


