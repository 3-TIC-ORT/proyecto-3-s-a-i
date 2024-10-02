function mostrarMenu7() {
    var menu1 = document.getElementById("Menu1").value;
    var menu7 = document.getElementById("Menu7");

          if (menu1 === "Setar volumen de la app") {
                 menu7.style.display = "block";
        } else {
                 menu7.style.display = "none";
}
}

    function mostrarMenu8() {
var menu3 = document.getElementById("Menu3").value;
var menu8 = document.getElementById("Menu8");

if (menu3 === "Setar volumen de la app") {
menu8.style.display = "block";
} else {
menu8.style.display = "none";
}
}

    function mostrarMenu9() {
var menu5 = document.getElementById("Menu5").value;
var menu9 = document.getElementById("Menu9");

if (menu5 === "Setar volumen de la app") {
menu9.style.display = "block";
} else {
menu9.style.display = "none";
}
}

    function mostrarMenu10() {
var menu2 = document.getElementById("Menu2").value;
var menu10 = document.getElementById("Menu10");

if (menu2 === "Mutear Aplicacion") {
menu10.style.display = "block";
} else {
menu10.style.display = "none";
}
}

    function mostrarMenu11() {
var menu4 = document.getElementById("Menu4").value;
var menu11 = document.getElementById("Menu11");

if (menu4 === "Mutear Aplicacion") {
menu11.style.display = "block";
} else {
menu11.style.display = "none";
}
}

    function mostrarMenu12() {
var menu6 = document.getElementById("Menu6").value;
var menu12 = document.getElementById("Menu12");

if (menu6 === "Mutear Aplicacion") {
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




